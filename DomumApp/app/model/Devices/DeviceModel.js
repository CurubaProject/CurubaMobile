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
Ext.define('Domum.model.Devices.DeviceModel', {
    extend: 'Ext.data.Model',
    xtype: 'DeviceModel',

    config: {
        fields: [
            {name: 'DeviceId', type: 'object'},
            {name: 'DeviceName', type: 'string'},
            {name: 'DeviceType', type: 'string'},
            {name: 'DeviceStatus',  type: 'string'}
        ]
    }
});

Ext.define('Domum.model.Devices.DeviceDetailsModel', {
    extend: 'Ext.data.Model',
    xtype: 'DeviceDetailsModel',

    config: {
        fields: [
            {name: 'DeviceId', type: 'object'},
            {name: 'DeviceName', type: 'string'},
            {name: 'DeviceType', type: 'string'},
            {name: 'DeviceConfig',  type: 'object'},
            {name: 'DeviceDetails', type: 'object'}
        ]
    }
});

Ext.define('Domum.model.Devices.DeviceConfigurationModel', {
    extend: 'Ext.data.Model',
    xtype: 'DeviceConfigurationModel',

    config: {
        fields: [
                 {name: 'DeviceId', type: 'object'},
                 {name: 'DeviceName', type: 'string'},
                 {name: 'DeviceType', type: 'string'},
                 {name: 'DeviceSchedule',  type: 'object'}
        ]
    }
});