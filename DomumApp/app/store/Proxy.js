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
var Proxy = {
        // TODO remove the default URL?
    //baseURL: 'http://dsrouteur.gel.usherbrooke.ca:8080',
    //baseURL: 'http://192.168.1.101:8080',
    baseURL: 'http://192.168.20.139:8080',
	getProxy: function (type, params) {
		return new Ext.data.proxy.JsonP({
			url: Proxy.baseURL + type.route,
			extraParams : params,
			reader: {
				type: 'json'
			}
		});
	},
    JsonPRequest: function (type, params, onSuccess) {
	    return Ext.data.JsonP.request({
            url: Proxy.baseURL + type.route,
            params: params,
            success: onSuccess,
            failure: function(response, opts) {
                console.error('server-side failure with status code ' + response.status);
            }
        });
    },
    setBaseURL : function (address) {
        this.baseURL = 'http://' + address + ':8080';
    }
};
