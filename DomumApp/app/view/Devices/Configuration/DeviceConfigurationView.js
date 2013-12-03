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
Ext.define('Domum.view.Devices.Configuration.DeviceConfigurationView', {
    extend: 'Ext.Container',
    xtype: 'DeviceConfigurationView',
    id: 'DeviceConfigurationView',

    config: {
        xtype: 'container',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'fieldset',
                title: language.get('DEVICE_CONFIGURATION_SCHEDULE_DEVICE_NAME_FIELDSET'),
                cls: 'scheduleField',
                items: [
                    {
                        xtype: 'textfield',
                        label: language.get('DEVICE_CONFIGURATION_LABEL_DEVICE_NAME'),
                        id: 'DeviceConfigurationNameTextField',
                        listeners: {
                            change: function () {
                                Publisher.publish(Constants.DEVICECONFIGURATIONNAMETEXTFIELD_CHANGE);
                            }
                        }
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'DeviceConfigurationScheduleArea'
            },
            {
                xtype: 'button',
                id: 'DeviceConfigurationAddScheduleButton',
                text: language.get('DEVICE_CONFIGURATION_ADD_SCHEDULE_BUTTON'),
                cls: 'scheduleButton',
                listeners: {
                    tap: function () {
                        Publisher.publish(Constants.DEVICECONFIGURATIONADDSCHEDULEBUTTON_TAP);
                    }
                }
            },
            {
                xtype: 'button',
                id: 'DeviceConfigurationSaveButton',
                text: language.get('SAVE'),
                ui: 'confirm',
                cls: 'scheduleButton',
                listeners: {
                    tap: function () {
                        Publisher.publish(Constants.DEVICECONFIGURATIONSAVEBUTTON_TAP);
                    }
                }
            }
        ]
    }
});
