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
// TODO belm (2013-11-11) : I feel like we should consider integers instead of strings for all constants.
// TODO belm (2013-12-01) : The name "DEVICE" must be changed for "MODULE" in all string constants and constants to comply with the proper naming.
var Constants = {
        // Device types
        DEVICETYPE_OUTLET : 'outlet',
        DEVICETYPE_DIMMER : 'dimmer',
        DEVICETYPE_NOLOAD : 'no load',

        // Device states (TODO or status???)
        DEVICESTATUS_ON : 'on',
        DEVICESTATUS_OFF : 'off',
        DEVICESTATUSDIMMER_MAX : 100,
        DEVICESTATUSDIMMER_MIN : 0,

        // Events
        CONFIGUREDEVICEBUTTON_TAP : 'ConfigureDeviceButton tap',
        DEVICELIST_INITIALIZE : 'DeviceList',
        DEVICESTATUSCONTROL_CHANGE : 'DeviceStatusControl change',
        DEVICECONFIGURATIONADDSCHEDULEBUTTON_TAP : 'DeviceConfigurationAddScheduleButton tap',
        DEVICEDETAILS_NEWID : 'Statistics newId',
        DEVICEDETAILSSTORE_LOAD : 'DeviceDetailsStore load',
        DEVICECONFIGURATIONSAVEBUTTON_TAP : 'DeviceConfigurationSaveButton tap',
        DEVICECONFIGURATIONSTORE_LOAD : 'DeviceConfigurationStore load',
        DEVICECONFIGURATIONNAMETEXTFIELD_CHANGE : 'DeviceConfigurationNameTextField change',
        DEVICECONFIGURATIONREMOVEBUTTON_TAP : 'DeviceConfigurationRemoveButton tap',
        STATISTICSSTORE_LOAD : 'StatisticsStore load',
        SETTINGSSERVERADDRESS_CHANGE : 'SettingsServerAddressTextfield change',
        SETTINGSVIEW_PAINTED : 'SettingsView painted',
        TUTORIALVIEW_DEACTIVATE : 'TutorailView deactivate',
        ABOUTUSVIEW_DEACTIVATE : 'AboutUsView deactivate',

        // These constants are used to know what view is used in a controller.
        // We use integers for fast comparison.
        ACTUALVIEWNONE : 0,
        ACTUALVIEW_TUTORIAL : 1,
        ACTUALVIEW_ABOUTUS : 2,

        // Statistics granularity
        STATISTICSGRANULARITY_BYYEAR : 'by year',
        STATISTICSGRANULARITY_BYMONTH : 'by month',
        STATISTICSGRANULARITY_BYWEEK : 'by week',
        STATISTICSGRANULARITY_BYDAY : 'by day',

        // TODO is this the best way to navigate?
        SHOWTUTORIAL_INTRODUCTION : 2,
        SHOWTUTORIAL_SERVERCONFIG : 7,
        SHOWTUTORIAL_DEVICECONFIG : 9,
        SHOWTUTORIAL_GUI : 16,
        SHOWTUTORIAL_USERCONFIG : 23,
        SHOWTUTORIAL_OTHERLINKS : 24,
        SHOWTUTORIAL_GETINVOLVED : 26
};