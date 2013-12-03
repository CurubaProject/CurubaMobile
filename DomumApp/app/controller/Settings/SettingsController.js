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
Ext.define('Domum.controller.Settings.SettingsController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            ServerAddressTextField : '#SettingsServerAddressTextfield'
        },

        control: {

        }
    },

    init: function () {
        this.callParent();
        Publisher.subscribe(this);

        // TODO belm (2013-11-29): move this to the store factory.
        store = Ext.create('Ext.data.Store', {model: 'Domum.model.Settings.SettingsModel'});
        store.on('load', function () {
                if (store.first() !== undefined) {
                    Proxy.setBaseURL(store.first().data.ServerAddress);
                }
            });
        store.load();
        this.settingsStore = store;
    },

    notify: function (event, param) {
        if (event === Constants.SETTINGSSERVERADDRESS_CHANGE) {
            Proxy.setBaseURL(param);

            this.settingsStore.removeAll();
            this.settingsStore.add({ServerAddress: param});
            this.settingsStore.sync();
        }
        else if (event === Constants.SETTINGSVIEW_PAINTED) {
            this.getServerAddressTextField().setValue(this.settingsStore.first().data.ServerAddress);
        }
    }
});
