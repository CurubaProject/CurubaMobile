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
// This must be the SECOND entry point of the application.
Ext.define('Domum.view.MainView', {
    extend: 'Ext.TabPanel',
    xtype: 'MainView',

    config: {
        tabBarPosition: 'bottom',

        // TODO We should make a custom icons for these.
        items: [{
            title: language.get('TAB_BAR_ICON_TITLE_DEVICES'),
            iconCls: 'home',
            xtype:'DevicesView'
        }, {
            title: language.get('TAB_BAR_ICON_TITLE_SETTINGS'),
            iconCls: 'settings',
            xtype:'SettingsView'
        }, {
            title: language.get('TAB_BAR_ICON_TITLE_HELP'),
            iconCls: 'info',
            xtype: 'HelpView'
        }]
    }
});
