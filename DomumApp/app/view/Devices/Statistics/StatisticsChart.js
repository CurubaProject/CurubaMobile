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
Ext.define('Domum.view.Devices.Statistics.StatisticsChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'StatisticsChart',

    config: {
        id: 'StatisticsChart',
        cls:'statisticsChart spacer',
        animate: true,
        store: { // TODO belm 2013-11-13 : if removed, nothing works. Is it normal?
            xtype: 'StatisticsStore'
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            title: {
                text: language.get('STATISTICS_CHART_Y_AXIS_LABEL'),
                cls: 'chartAxes'
            },
            fields: 'value'
        }, {
            type: 'category',
            position: 'bottom',
            title: {
                cls: 'chartAxes'
            },
            fields : 'graduation'
        }],
        series: [{
            type: 'bar',
            xField: 'graduation',
            yField: 'value',
            // Review lemj (10-04-2013) : don't put style in a JS object (NEVER)
            // TODO belm : i don't know how to fix this.
            //cls: 'chartColor',
            style: {
                fill: 'green'
            }
        }]
    }/*,

    setup: function (deviceId) {
        this.deviceId = deviceId;
    },

    getDeviceId : function () {
        return this.deviceId;
    }*/
});