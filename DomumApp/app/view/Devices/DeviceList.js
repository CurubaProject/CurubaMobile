// ----------------------------------------------------------------------------
// This file is part of "Curuba Mobile".
//
// "Curuba Mobile" is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// "Curuba Mobile" is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with "Curuba Mobile".  If not, see <http://www.gnu.org/licenses/>.
// ----------------------------------------------------------------------------

// TODO Uses DeviceListItem ??
// Asks data for DeviceListItem from an communication object
// Use custom CSS for this
var listDeviceItemTpl = new Ext.XTemplate(
    '<div class="iconTypeListDevice iconListDevice "><i class="', '{[this.selectType(values.DeviceType)]}' ,'"></i></div>',
    '<div class="nameDeviceListDevice">{DeviceName} </div>',
    '<div class="stateDeviceListDevice"> {DeviceStatus} </div>',
    '<div class=\'iconDeviceList iconListDevice ', '{[this.selectClass(values.DeviceStatus)]}', '\'><i class="fa fa-power-off"></i>­</div>',
    '<div style="clear: both;"></div>',
    {
        selectClass : function (state) {
            var result = 'deviceOff';
            if (state.toLowerCase() === 'on') {
                result = 'deviceOn';
            }

            return result;
        },
        selectType : function (type) {
            var result = '';

            if (type === 'dimmer') {
                result = 'fa fa-lightbulb-o';
            } else {
                result = 'fa fa-bolt';
            }

            return result;
        }
    }
);

Ext.define('Domum.view.Devices.DeviceList', {
    extend: 'Ext.dataview.List',
    xtype: 'DeviceList',
    id: 'DeviceList',

    config: {
        //store: 'DeviceStore',
		loadingText: null,
        itemTpl: listDeviceItemTpl,

        listeners: {
            initialize: function () {
                Publisher.publish(Constants.DEVICELIST_INITIALIZE);
                //console.log('BONJOUR TOI');
            }
        }
    }
});


