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
Ext.define('Domum.view.Settings.SettingsView', {
    extend: 'Ext.navigation.View',
    xtype: 'SettingsView',
    id: 'SettingsView',

    config: {
        items: [
            {
                xtype : 'panel',
                title: language.get('SETTINGS_TITLE'),
                items: [
                    {
                        xtype: 'fieldset',
                        title: language.get('SETTINGS_SERVER_ADDRESS_FIELDSET'),
                        items: [
                            {
                                xtype: 'textfield',
                                label: language.get('SETTINGS_SERVER_ADDRESS_FIELDSET'),
                                id: 'SettingsServerAddressTextfield',
                                listeners: {
                                    change: function (that, newValue, oldValue, eOpts) {
                                        Publisher.publish(Constants.SETTINGSSERVERADDRESS_CHANGE, newValue);
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ],

        listeners : {
            painted : function () {
                Publisher.publish(Constants.SETTINGSVIEW_PAINTED);
            }
        }
    }
});