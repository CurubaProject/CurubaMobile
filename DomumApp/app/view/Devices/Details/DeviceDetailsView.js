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
Ext.define('Domum.view.Devices.Details.DeviceDetailsView', {
    extend: 'Ext.Container',
    xtype: 'DeviceDetailsView',
    id: 'DeviceDetailsView',

    config: {
        store: 'DeviceStore',
        scrollable: true,
        layout: Layout.centerVboxLayout,

        items: [
            {
                xtype: 'button',
                ui: 'action',
                cls: 'spacer configureDeviceStatistic',
                id: 'ConfigureDeviceButton',
                text: language.get('CONFIGURE_DEVICE_BUTTON_TEXT'),
                listeners: {
                    tap: function () {
                        Publisher.publish(Constants.CONFIGUREDEVICEBUTTON_TAP);
                    }
                }
            }
        ]
    }
});
