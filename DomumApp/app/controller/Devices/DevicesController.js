// ----------------------------------------------------------------------------
// This file is part of 'Curuba Mobile'.
//
// 'Curuba Mobile' is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// 'Curuba Mobile' is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with 'Curuba Mobile'.  If not, see <http://www.gnu.org/licenses/>.
// ----------------------------------------------------------------------------
Ext.define('Domum.controller.Devices.DevicesController', {
    extend: 'Ext.app.Controller',

    scheduleList:[],

    config: {
        refs: {
            DevicesView:'#DevicesView',
            DeviceList: '#DeviceList',
            DeviceDetailsView: '#DeviceDetailsView',
            DeviceConfigurationView: '#DeviceConfigurationView',
            DeviceNameTextField: '#DeviceConfigurationNameTextField',
            DeviceConfigurationScheduleArea: '#DeviceConfigurationScheduleArea'
        },

        control: {
            DeviceList: {
                itemtap: 'viewDeviceDetails',
            }
        }
    },

    init: function () {
        this.callParent();
        Publisher.subscribe(this);
        this.deviceListUpdater();
    },

    deviceListUpdater: function () {
        // We pool the server once in a while to update the device list.
        var that = this;
        setTimeout(function () {
            // TODO Add smooth transition
            // TODO when using mock objects for the store, using that.getDeviceList().getStore()
            //      returns a sencha style object, not our precious mock object. RemoveAll is called
            that.getDeviceList().getStore().removeAll();
            that.getDeviceList().getStore().load();
            that.deviceListUpdater();
        }, 10000); // TODO maybe a constant ?
    },

    notify: function (event, param) {
        switch (event) {
            case Constants.CONFIGUREDEVICEBUTTON_TAP:
                this.configureDevice();
                break;

            case Constants.DEVICESTATUSCONTROL_CHANGE:
                this.changeDeviceStatus(param);
                break;

            case Constants.DEVICECONFIGURATIONADDSCHEDULEBUTTON_TAP:
                this.addNewUptimeSchedule();
                break;

            case Constants.DEVICEDETAILSSTORE_LOAD:
                this.loadDeviceDetailsView();
                Publisher.publish(Constants.DEVICEDETAILS_NEWID, this.deviceDetailsStore.first().data.DeviceId);
                break;

            case Constants.DEVICECONFIGURATIONSAVEBUTTON_TAP:
                this.saveConfiguration();
                break;

            case Constants.DEVICECONFIGURATIONSTORE_LOAD:
                this.loadDeviceConfigurationView();
                break;

            case Constants.DEVICECONFIGURATIONNAMETEXTFIELD_CHANGE:
                this.DeviceConfigurationStore.first().set('DeviceName', this.getDeviceNameTextField().getValue());
                break;

            case Constants.DEVICECONFIGURATIONREMOVEBUTTON_TAP:
                this.removeSchedule(param);
                break;

            case Constants.SETTINGSSERVERADDRESS_CHANGE:
            case Constants.DEVICELIST_INITIALIZE:
                this.loadDeviceList();
                break;

            default :
                // Else nothing to be done with the event.
        }
    },

    loadDeviceList: function () {
        // Will be called when the server address changes.
        var store = StoreFactory.DeviceListStore.create();
        store.setProxy(Proxy.getProxy(ListDeviceRequest));
        this.getDeviceList().setStore(store);
        store.load();
    },

    viewDeviceDetails: function (view, index, target, record, e, eOpts) {
        // Setup the proxy with the right device.
        this.selectedDeviceId = record.data.DeviceId;
        this.deviceDetailsStore = StoreFactory.DeviceDetailsStore.create();
        this.deviceDetailsStore.setProxy(Proxy.getProxy(DeviceDetailsRequest, {DeviceId:this.selectedDeviceId.DeviceId, DeviceNumber: this.selectedDeviceId.DeviceNumber})); // TODO Change DeviceId to an object?
        this.deviceDetailsStore.load();
        // TODO belm : we must do something when it doesn't load correctly.
    },

    configureDevice: function () {
        // Setup the proxy with the right device.
        this.DeviceConfigurationStore = StoreFactory.DeviceConfigurationStore.create();
        this.DeviceConfigurationStore.setProxy(Proxy.getProxy(DeviceConfigurationRequest, {DeviceId:this.selectedDeviceId.DeviceId, DeviceNumber: this.selectedDeviceId.DeviceNumber})); // TODO
        this.DeviceConfigurationStore.load();
        // TODO belm : we must do something when it doesn't load correctly.
    },

    loadDeviceDetailsView : function () {
        var data = this.deviceDetailsStore.first().data;
        this.getDevicesView().push({ xtype: 'DeviceDetailsView', title:data.DeviceName});
        this.getDeviceDetailsView().add(ViewFactory.deviceDetailsControl.create(data.DeviceType));
        this.getDeviceDetailsView().add(ViewFactory.deviceDetailsInfo.create(data.DeviceType));
    },

    loadDeviceConfigurationView : function () {
        this.scheduleList = []; // We reset the schedule list.
        var data = this.DeviceConfigurationStore.first().data;
        for (var i = 0; i < data.DeviceSchedule.length; i++) {
            var newSchedule = this.buildScheduleItem(this.deviceDetailsStore.first().data.DeviceType);
            newSchedule.setup(this.scheduleList.length, data.DeviceSchedule[i]);
            this.scheduleList.push(newSchedule);
        }
        this.getDevicesView().push({ xtype: 'DeviceConfigurationView', title:this.deviceDetailsStore.first().data.DeviceName});
        this.buildScheduleArea();
        this.getDeviceNameTextField().setValue(data.DeviceName);
    },

    changeDeviceStatus: function (param) { // TODO belm : this is state or status?
        var requestParams = {};
        requestParams.DeviceId = this.deviceDetailsStore.first().data.DeviceId.DeviceId;
        requestParams.DeviceNumber = this.deviceDetailsStore.first().data.DeviceId.DeviceNumber;
        requestParams.Parameters = Ext.JSON.encode(param); // Passing an object here makes it an array in the server. why?
        Proxy.JsonPRequest(SetDeviceState, requestParams, function (e, ee) {
            alert('success');
        });
    },

    buildScheduleArea: function (data) {
        for (var i= 0; i < this.scheduleList.length; i++) { // We need to iterate forward to display numbers properly.
            this.getDeviceConfigurationScheduleArea().add(this.scheduleList[i]);
        }
    },

    addNewUptimeSchedule: function () {
        var newSchedule = this.buildScheduleItem(this.deviceDetailsStore.first().data.DeviceType);
        newSchedule.setup(this.scheduleList.length, {ScheduleConfig:{}}); // TODO belm : maybe create a factory for this spontaneous object?
        this.scheduleList.push(newSchedule);
        this.getDeviceConfigurationScheduleArea().add(newSchedule);
    },

    removeSchedule : function (scheduleToRemove) {
        // We have to destroy the area and build it again.
        for (var i = this.getDeviceConfigurationScheduleArea().getItems().length; i--;) {
            this.getDeviceConfigurationScheduleArea().getItems().items[i].destroy();
        }
        this.scheduleList.splice(this.scheduleList.indexOf(scheduleToRemove), 1);
        this.buildScheduleArea();
    },

    saveConfiguration: function () {
        var dataList = [];
        for (var i = this.scheduleList.length; i--;) {
            dataList.push(Ext.JSON.encode(this.scheduleList[i].data));
        }

        var requestParams = {};
        requestParams = this.DeviceConfigurationStore.first().raw;
        requestParams.DeviceSchedule = Ext.JSON.encode(dataList); // Passing an object here makes it an array in the server. why?

        //this.DeviceConfigurationStore.first().set('DeviceSchedule',dataList);
        // TODO belm : not done.
        Proxy.JsonPRequest({route:'/setDeviceConfiguration'}, requestParams, function (e, ee) {
            alert('sync');
        });
        // TODO belm : is this the proper way to write information with a proxy? It didn't work...
        //this.DeviceConfigurationStore.sync();
    },

    buildScheduleItem: function(type) {
        return ViewFactory.deviceConfigurationItem.create(type);
    }
});
