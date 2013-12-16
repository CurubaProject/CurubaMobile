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
var ViewFactoryTemplates = {
    getNewDeviceStatistics: function () {
        var newTemplate = {
            xtype : 'DeviceStatisticsView'
        };
        return newTemplate;
    },

    getNewDeviceDetailsControlSlider: function () {
        var newTemplate = {
            xtype: 'sliderfield',
            id: 'DeviceStatusControl',
            cls: 'toggleButton deviceInterruptor', // TODO belm : change this cls to something accurate.
            labelCls: 'labelSliderButton',
            label: language.get('STATE_DEVICE'),
            ui : 'action',
            listeners: {
                change: function (me, sl, thumb, newValue, oldValue, eOpts) { // TODO rename params
                    var param = {};
                    if (newValue == 0) {
                        param.DeviceState = Constants.DEVICESTATUS_OFF;
                        param.DeviceValue = newValue;
                    } else {
                        param.DeviceState = Constants.DEVICESTATUS_ON;
                        param.DeviceValue = newValue;
                    }
                    Publisher.publish(Constants.DEVICESTATUSCONTROL_CHANGE, param);
                }
            }
        }
        return newTemplate;
    },

    getNewDeviceDetailsControlOnOff: function () {
        var newTemplate = {
            xtype: 'togglefield',
            id: 'DeviceStatusControl',
            cls: 'toggleButton deviceInterruptor', // TODO belm : change this cls to something accurate.
            labelCls: 'labelToggleButton',
            listeners: {
                change: function (field, something1, something2, newValue, oldVal) {// TODO rename params
                    // Can someone find the right names for the parameters?
                    var param = {};
                    if (newValue == 1) {
                        param.DeviceState = Constants.DEVICESTATUS_ON;
                        param.DeviceValue = Constants.DEVICESTATUSDIMMER_MAX;
                    } else {
                        param.DeviceState = Constants.DEVICESTATUS_OFF;
                        param.DeviceValue = Constants.DEVICESTATUSDIMMER_Min;
                    }
                    Publisher.publish(Constants.DEVICESTATUSCONTROL_CHANGE, param);
                }
            }
        };
        return newTemplate;
    },

    getNewDeviceConfigurationTemplate: function () {
       var newTemplate = {
           xtype: 'container',
           layout: Layout.centerHboxLayout,
           items: [
               {
                   xtype: 'fieldset',
                   items: [
                       {
                           xtype: 'titlebar',
                           label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_FROM'), // TODO belm 2013-12-15 : why is it the same than the textfield label? remove?
                       },
                       {
                           xtype: 'textfield',
                           label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_FROM'),
                           placeHolder: 'HH:MM',
                           maxLength: 5,
                           listeners: {
                               change: function () {
                                   newTemplate.data.ScheduleFrom = this.getValue();
                               }
                           }
                       },
                       {
                           xtype: 'textfield',
                           label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_TO'),
                           placeHolder: 'HH:MM',
                           maxLength: 5,
                           listeners: {
                               change: function () {
                                   newTemplate.data.ScheduleTo = this.getValue();
                               }
                           }
                       }
                   ]
               }
           ]
       };
       return newTemplate;
    },
    
    getNewDeviceConfigurationDimmerTemplate: function () { // TODO belm 2013-12-15 : is this ever used?
       var newTemplate = {
           xtype: 'container',
           layout: Layout.centerHboxLayout,
           items: [
               {
                   xtype: 'fieldset',
                   items: [
                       {
                           xtype: 'titlebar',
                           label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_FROM'), // TODO belm 2013-12-15 : why is it the same than the textfield label? remove?
                       },
                       {
                           xtype: 'textfield',
                           label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_FROM'),
                           placeHolder: 'HH:MM',
                           maxLength: 5,
                           listeners: {
                               change: function () {
                                   newTemplate.data.ScheduleFrom = this.getValue();
                               }
                           }
                       },
                       {
                           xtype: 'textfield',
                           label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_TO'),
                           placeHolder: 'HH:MM',
                           maxLength: 5,
                           listeners: {
                               change: function () {
                                   newTemplate.data.ScheduleTo = this.getValue();
                               }
                           }
                       },
                       {
                           xtype: 'textfield',
                           label: language.get('DEVICE_CONFIGURATION_SCHEDULE_TEXTFIELD_STATUS'),
                           placeHolder: '0 to 100',
                           maxLength: 3,
                           listeners: {
                               change: function () {
                                   newTemplate.data.ScheduleConfig.status = this.getValue();
                               }
                           }
                       },
                   ]
               }
           ]
       };
       return newTemplate;
    }
    
};