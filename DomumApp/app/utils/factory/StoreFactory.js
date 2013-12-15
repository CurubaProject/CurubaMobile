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
var StoreFactory = {
    debug : false, // TODO belm : There should be a mechanism so that when testing, testing files are loaded (with mock object, etc.)
                  // maybe with debug option with app.json?...
    DeviceListStore : {
        create : function () {
            var store;
            if (StoreFactory.debug === true) {
                store = {
                    data : [
                        { DeviceId:'1', DeviceName:'Outlet On', DeviceType:Constants.DEVICETYPE_OUTLET, DeviceStatus:Constants.DEVICESTATUS_ON },
                        { DeviceId:'2', DeviceName:'Outlet Off', DeviceType:Constants.DEVICETYPE_OUTLET, DeviceStatus:Constants.DEVICESTATUS_OFF },
                        { DeviceId:'3', DeviceName:'Dimmer On', DeviceType:Constants.DEVICETYPE_DIMMER, DeviceStatus:Constants.DEVICESTATUS_ON },
                        { DeviceId:'4', DeviceName:'Dimmer Off', DeviceType:Constants.DEVICETYPE_DIMMER, DeviceStatus:Constants.DEVICESTATUS_OFF },
                        { DeviceId:'5', DeviceName:'No load On', DeviceType:Constants.DEVICETYPE_NOLOAD, DeviceStatus:Constants.DEVICESTATUS_ON },
                        { DeviceId:'6', DeviceName:'No load Off', DeviceType:Constants.DEVICETYPE_NOLOAD, DeviceStatus:Constants.DEVICESTATUS_OFF }
                    ],

                    load : function () {
                        return this;
                    },

                    removeAll : function () {
                        // Do nothing.
                    },

                    setProxy : function (proxy) {
                        this.proxy = proxy;
                    }
                };
            }
            else {
                store = Ext.create('Domum.store.Devices.DeviceStore');
            }
            return store;
        }
    },

    DeviceDetailsStore : {
        create : function () {
            var store;
            if (StoreFactory.debug === true) {
                store = {
                    first : function () {
                        return {
                            data : { DeviceId:{DeviceId: 1234, DeviceNumber: 1}, DeviceType:'dimmer', DeviceName:'LampeSalon', DeviceStatus:'On' }
                        };
                    },

                    load : function () {
                        setTimeout( function () {
                            Publisher.publish(Constants.DEVICEDETAILSSTORE_LOAD);
                        }, 100);
                    },

                    setProxy : function (proxy) {
                        this.proxy = proxy;
                    }
                };
            }
            else {
                store = Ext.create('Domum.store.Devices.DeviceDetailsStore');
            }
            return store;
        }
    },

    DeviceConfigurationStore : {
        create : function () {
            var store;
            if (StoreFactory.debug === true) {
                store = {

                    data : {
                        DeviceId: {DeviceId: 1234, DeviceNumber: 1},
                        DeviceType:'dimmer',
                        DeviceName:'LampeSalon',
                        DeviceSchedule:[
                            {ScheduleId:13, ScheduleTo:'10:30', ScheduleFrom:'09:00', ScheduleConfig:{status:'on', value:'50%'}},
                            {ScheduleId:14, ScheduleTo:'11:30', ScheduleFrom:'10:50', ScheduleConfig:{status:'off', value:'0%'}},
                            {ScheduleId:15, ScheduleTo:'23:30', ScheduleFrom:'17:00', ScheduleConfig:{status:'on', value:'50%'}}
                        ]
                    },

                    first : function () {
                        return {
                            data:this.data,

                            set: function(field, name) {
                                this.data.DeviceName = name;
                            }
                        };
                    },

                    load: function () {
                        setTimeout( function () {
                            Publisher.publish(Constants.DEVICECONFIGURATIONSTORE_LOAD);
                        }, 100);
                    },

                    setProxy : function (proxy) {
                        this.proxy = proxy;
                    }
                };
            }
            else {
                store = Ext.create('Domum.store.Devices.DeviceConfigurationStore');
            }
            return store;
        }
    },

    DeviceStatisticStore : {
        create : function () {
            var store;
            if (StoreFactory.debug === true) {
                store = {
                    setProxy : function (proxy) {
                        switch (proxy.config.extraParams.Granularity) {
                            case Constants.STATISTICSGRANULARITY_BYYEAR:
                                this.data = [{'graduation': 'month 1', 'value': 10},
                                             {'graduation': 'month 2', 'value': 7},
                                             {'graduation': 'month 3', 'value': 10},
                                             {'graduation': 'month 4', 'value': 10},
                                             {'graduation': 'month 5', 'value': 27}];
                                break;

                            case Constants.STATISTICSGRANULARITY_BYMONTH:
                                this.data = [{'graduation': 'Week 1', 'value': 2},
                                             {'graduation': 'Week 2', 'value': 7},
                                             {'graduation': 'Week 3', 'value': 5},
                                             {'graduation': 'Week 4', 'value': 11},
                                             {'graduation': 'Week 5', 'value': 19}];
                                break;

                            case Constants.STATISTICSGRANULARITY_BYWEEK:
                                this.data = [{'graduation': 'day 1', 'value': 15},
                                             {'graduation': 'day 2', 'value': 7},
                                             {'graduation': 'day 3', 'value': 10},
                                             {'graduation': 'day 4', 'value': 9},
                                             {'graduation': 'day 5', 'value': 22},
                                             {'graduation': 'day 6', 'value': 10},
                                             {'graduation': 'day 7', 'value': 2}];
                                break;

                            case Constants.STATISTICSGRANULARITY_BYDAY:
                                this.data = [{'graduation': '1', 'value': 17},
                                             {'graduation': '2', 'value': 7},
                                             {'graduation': '3', 'value': 5},
                                             {'graduation': '4', 'value': 2},
                                             {'graduation': '5', 'value': 3},
                                             {'graduation': '6', 'value': 4},
                                             {'graduation': '7', 'value': 17},
                                             {'graduation': '8', 'value': 7},
                                             {'graduation': '9', 'value': 5},
                                             {'graduation': '10', 'value': 2},
                                             {'graduation': '11', 'value': 3},
                                             {'graduation': '12', 'value': 4},
                                             {'graduation': '13', 'value': 17},
                                             {'graduation': '14', 'value': 7},
                                             {'graduation': '15', 'value': 5},
                                             {'graduation': '16', 'value': 2},
                                             {'graduation': '17', 'value': 3},
                                             {'graduation': '18', 'value': 4},
                                             {'graduation': '19', 'value': 17},
                                             {'graduation': '20', 'value': 7},
                                             {'graduation': '21', 'value': 5},
                                             {'graduation': '22', 'value': 2},
                                             {'graduation': '23', 'value': 3},
                                             {'graduation': '24', 'value': 4}];
                                break;

                            default :
                                // It should not work!
                        }
                    },

                    load : function () {}
                };
            }
            else {
                store = Ext.create('Domum.store.Devices.Statistics.StatisticsStore');
            }
            return store;
        }
    }
};