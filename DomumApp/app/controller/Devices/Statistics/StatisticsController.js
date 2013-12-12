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
Ext.define('Domum.controller.Devices.Statistics.StatisticsController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            Chart: '#StatisticsChart',
            ChartTitle: '#Title'
        },

        control: {
            'DeviceStatisticsView #ByYearButton': {
                tap: 'requestStatisticsByYear'
            },
            'DeviceStatisticsView #ByMonthButton': {
                tap: 'requestStatisticsByMonth'
            },
            'DeviceStatisticsView #ByWeekButton': {
                tap: 'requestStatisticsByWeek'
            },
            'DeviceStatisticsView #ByDayButton': {
                tap: 'requestStatisticsByDay'
            }
        }
    },

    init: function () {
        this.callParent();
        Publisher.subscribe(this);
    },

    notify: function (event, param) {
        if (event === Constants.STATISTICSSTORE_LOAD) {
			var that = this;
            this.getChart().redraw();
            setTimeout(function () {that.getChart().redraw();}, 100);
        }
        else if (event == Constants.DEVICEDETAILS_NEWID) {
            this.deviceId = param;
        }
    },

    requestStatisticsByYear: function () {
        var store = StoreFactory.DeviceStatisticStore.create();
        store.setProxy(Proxy.getProxy(DeviceStatisticsRequest, {DeviceId:this.deviceId.DeviceId, DeviceNumber: this.deviceId.DeviceNumber, Granularity:Constants.STATISTICSGRANULARITY_BYYEAR}));
        store.load();
        this.getChartTitle().setHtml(language.get('STATISTICS_CHART_BY_YEAR_TITLE'));
        this.getChart().setStore(store);
        this.getChart().setStore(store);
    },

    requestStatisticsByMonth: function () {
        var store = StoreFactory.DeviceStatisticStore.create();
        store.setProxy(Proxy.getProxy(DeviceStatisticsRequest, {DeviceId:this.deviceId.DeviceId, DeviceNumber: this.deviceId.DeviceNumber, Granularity:Constants.STATISTICSGRANULARITY_BYMONTH}));
        store.load();
        this.getChartTitle().setHtml(language.get('STATISTICS_CHART_BY_MONTH_TITLE'));
        this.getChart().setStore(store);
        this.getChart().setStore(store);
    },

    requestStatisticsByWeek: function () {
        var store = StoreFactory.DeviceStatisticStore.create();
        store.setProxy(Proxy.getProxy(DeviceStatisticsRequest, {DeviceId:this.deviceId.DeviceId, DeviceNumber: this.deviceId.DeviceNumber, Granularity:Constants.STATISTICSGRANULARITY_BYWEEK}));
        store.load();
        this.getChartTitle().setHtml(language.get('STATISTICS_CHART_BY_WEEK_TITLE'));
        this.getChart().setStore(store);
        this.getChart().setStore(store);
    },

    requestStatisticsByDay: function () {
        var store = StoreFactory.DeviceStatisticStore.create();
        store.setProxy(Proxy.getProxy(DeviceStatisticsRequest, {DeviceId:this.deviceId.DeviceId, DeviceNumber: this.deviceId.DeviceNumber, Granularity:Constants.STATISTICSGRANULARITY_BYDAY}));
        store.load();
        this.getChartTitle().setHtml(language.get('STATISTICS_CHART_BY_DAY_TITLE'));
        this.getChart().setStore(store);
        this.getChart().setStore(store);
    }
});