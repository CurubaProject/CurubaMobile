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
// TODO Use constant for name label ??
Ext.define('Domum.model.Settings.SettingsModel', {
    extend: 'Ext.data.Model',
    xtype: 'SettingsModel',

    config: {
        fields: [
            {name: 'ServerAddress', type: 'string'}
        ],
        proxy : {
            type: 'localstorage',
            id  : 'Settings'
        }
    }
});