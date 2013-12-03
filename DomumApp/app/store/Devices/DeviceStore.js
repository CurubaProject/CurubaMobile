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
// TODO remove inline Data and create a proxy factory instead
Ext.define('Domum.store.Devices.DeviceStore', {
    extend: 'Ext.data.Store',
    xtype: 'DeviceStore',

    config: {
        model: 'Domum.model.Devices.DeviceModel',
        storeId: 'DeviceStore',
        autoLoad: false,
    }
});

Ext.define('Domum.store.Devices.DeviceDetailsStore', {
    extend: 'Ext.data.Store',
    xtype: 'DeviceDetailsStore',

    config: {
        model: 'Domum.model.Devices.DeviceDetailsModel',
        storeId: 'DeviceDetailsStore',
        autoLoad: false,

        listeners: {
            load: function () {
                Publisher.publish(Constants.DEVICEDETAILSSTORE_LOAD);
            }
        }
    }
});

Ext.define('Domum.store.Devices.DeviceConfigurationStore', {
    extend: 'Ext.data.Store',
    xtype: 'DeviceConfigurationStore',

    config: {
        model: 'Domum.model.Devices.DeviceConfigurationModel',
        storeId: 'DeviceConfigurationStore',
        autoLoad: false,

        listeners: {
            load: function () {
                Publisher.publish(Constants.DEVICECONFIGURATIONSTORE_LOAD);
            }
        }
    }
});