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
//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

Ext.application({
    name: 'Domum',

    requires: [
        'Domum.view.MainView',
    ],

    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@144.png'
    },

    models: [
         'Devices.DeviceModel',
         'Devices.Statistics.StatisticsModel',
         'Settings.SettingsModel'
    ],
    stores: [
         'Devices.DeviceStore',
         'Devices.Statistics.StatisticsStore'
    ],
    views: [
        'MainView',
        'Devices.Configuration.DeviceConfigurationView',
        'Devices.DevicesView',
        'Devices.DeviceList',
        'Devices.DeviceListItem',
        'Devices.Statistics.DeviceStatisticsView',
        'Devices.Statistics.StatisticsChart',
        'Devices.Details.DeviceDetailsView',
        'Help.HelpView',
        'Help.HelpOptions',
        'Help.About.AboutView',
        'Help.Tutorial.TutorialView',
        'Settings.SettingsView'
    ],
    controllers: [
        'Devices.DevicesController',
        'Devices.Statistics.StatisticsController',
        'Help.HelpController',
        'Settings.SettingsController'
    ],

    launch: function () {
        // TODO belm (2013-11-30) : is it the way to load data before everything?
        // TODO belm (2013-12-01) : The name "DEVICE" must be changed for "MODULE" in all constants and files names to comply with the proper naming.
        store = Ext.create('Ext.data.Store', {model: 'Domum.model.Settings.SettingsModel'});
        store.on('load', function () {
                if (store.first() !== undefined) {
                    Proxy.setBaseURL(store.first().data.ServerAddress);
                }

                Ext.Viewport.add({xclass: 'Domum.view.MainView'});
            });
        store.load();
    }
});
