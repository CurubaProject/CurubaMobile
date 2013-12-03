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
Ext.define('Domum.view.Help.HelpOptions', {
    extend: 'Ext.Container',
    xtype: 'HelpOptions',
    id: 'HelpOptions',
    
    config: {
        cls: 'helpMenu',         
        items: [
            {
                xtype: 'button',
                ui: 'action',
                cls: 'HelpMenuButton',
                text: language.get('TUTORIAL_TITLE'),
                id: 'HelpViewTutorialButton'
            },
            {
                xtype: 'button',
                ui: 'action',
                cls: 'HelpMenuButton',
                text: language.get('ABOUT_US_TITLE'),
                id: 'HelpViewAboutUsButton'
            }
        ]
    }
});