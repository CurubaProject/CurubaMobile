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
var ViewFactory = {
    deviceDetailsInfo: {
        create: function (type, deviceId) {
            var newView;

            switch (type) {
                case Constants.DEVICETYPE_OUTLET:
                    newView = ViewFactoryTemplates.getNewDeviceStatistics();
                    break;

                case Constants.DEVICETYPE_DIMMER:
                    newView = ViewFactoryTemplates.getNewDeviceStatistics();
                    break;

                default :
                    factoryCreationError(type);
            }

            return newView;
        }
    },

    deviceDetailsControl: {
        create: function (type) {
            var newView;

            switch (type) {
                case Constants.DEVICETYPE_OUTLET:
                    newView = ViewFactoryTemplates.getNewDeviceDetailsControlOnOff();
                    break;
                case Constants.DEVICETYPE_DIMMER:
                    newView = ViewFactoryTemplates.getNewDeviceDetailsControlSlider();
                    break;
                default :
                    factoryCreationError(type);
            }

            return newView;
        }
    },

    deviceConfigurationItem: {
        create: (function () {
            // TODO lemj Change augmentOutletView and augmentDimmerView to template or method in a other object?
            var augmentOutletView = function (newView) {
                var buttonRemove = {
                    iconCls: 'delete',
                    align: 'right',
                    iconMask: true,
                    listeners: {
                        tap: function () {
                            Publisher.publish(Constants.DEVICECONFIGURATIONREMOVEBUTTON_TAP, newView);
                        }
                    }
                };
               
                var viewItems = newView.items[0].items;
                
                viewItems[viewItems.length] = {
                    xtype: 'textfield',
                    label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_STATUS'),
                    listeners: {
                        change: function () {
                            newView.data.ScheduleConfig.status = this.getValue();
                        }
                    }
                };
                newView.setup = function (number, data) { // TODO belm : refactor
                    var viewdata = newView.data; // TODO lemj USEFUL?? Overwrite below
                    var components = newView.items[0]; // TODO rename tmp variable?

                    viewdata = data;
                    components.id = 'DeviceUptimeSchedule' + number;
                    newView.items[1].id = 'DeviceUptimeScheduleCancelButton' + number;
                    components.items[0].title = language.get('DEVICE_CONFIGURATION_SCHEDULE_AREA_FIELDSET') + (number+1);
                    components.items[1].value = viewdata.ScheduleFrom || '';
                    components.items[2].value = viewdata.ScheduleTo || '' ;
                    components.items[3].value = viewdata.ScheduleConfig.status || '';
                };
            };

            var augmentDimmerView = function (newView) {
                var buttonRemove = {
                    iconCls: 'delete',
                    align: 'right',
                    iconMask: true,
                    listeners: {
                        tap: function () {
                            Publisher.publish(Constants.DEVICECONFIGURATIONREMOVEBUTTON_TAP, newView);
                        }
                    }
                };
               
               var viewItems = newView.items[0].items;
                
                viewItems[newView.items[0].items.length] = {
                    xtype: 'textfield',
                    label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_STATUS'),
                    listeners: {
                        change: function () {
                            newView.data.ScheduleConfig.status = this.getValue();
                        }
                    }
                };
                
                viewItems[newView.items[0].items.length] = {
                    xtype: 'textfield',
                    label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_VALUE'),
                    listeners: {
                        change: function () {
                            newView.data.ScheduleConfig.value = this.getValue();
                        }
                    }
                };
                
                newView.setup = function (number, data) {// TODO belm : refactor
                    newView.data = data;
                    newView.items[0].id = 'DeviceUptimeSchedule' + number;
                    viewItems[0].id = 'DeviceUptimeScheduleCancelButton' + number;
                    viewItems[0].items = buttonRemove;
                    viewItems[0].title = language.get('DEVICE_CONFIGURATION_SCHEDULE_AREA_FIELDSET') + (number+1);
                    viewItems[1].value = newView.data.ScheduleFrom || '';
                    viewItems[2].value = newView.data.ScheduleTo || '' ;
                    viewItems[3].value = newView.data.ScheduleConfig.status || '';
                    viewItems[4].value = newView.data.ScheduleConfig.value || '' ;
                };
            };

            return function (type) {
                // Create the default view.
                var newView = ViewFactoryTemplates.getNewDeviceConfigurationTemplate();

                switch (type) {
                    case Constants.DEVICETYPE_OUTLET:
                        augmentOutletView(newView);
                        break;

                    case Constants.DEVICETYPE_DIMMER:
                        augmentDimmerView(newView);
                        break;
                    default :
                        factoryCreationError(type);
                }

                return newView;
            };
        })(),


    }
};

var factoryCreationError = function (type) {
    console.log('Device type ' + type + ' was not recognized.');
};