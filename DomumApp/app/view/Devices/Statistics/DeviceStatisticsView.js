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
// TODO Put tabs for each statistics ?
// Invoke StatisticsChart with required data
// Tap to fit screen, tap again to shrink to normal position
Ext.define('Domum.view.Devices.Statistics.DeviceStatisticsView', {
    extend: 'Ext.Container',
    xtype: 'DeviceStatisticsView',
    id: 'DeviceStatisticsView',

    config: {
        cls:'chartContainer',
        items: [{
            xtype: 'container',
            layout: Layout.centerHboxLayout,

            items: [{
                xtype: 'panel',
                id: 'Title',
                html: language.get('STATISTICS_CHART_BY_DAY_TITLE')
            }]
        }, {
            xtype: 'StatisticsChart'
        }, {
            xtype: 'container',
            layout: Layout.centerHboxLayout,

            items: [
                {
                    xtype: 'button',
                    ui: 'action',
                    cls : 'statisticChartTypeStatistic',
                    id: 'ByYearButton',
                    text: language.get('STATISTICS_CHART_BY_YEAR_BUTTON')
                }, {
                    xtype: 'button',
                    ui: 'action',
                    cls : 'statisticChartTypeStatistic',
                    id: 'ByMonthButton',
                    text: language.get('STATISTICS_CHART_BY_MONTH_BUTTON')
                }, {
                    xtype: 'button',
                    ui: 'action',
                    cls : 'statisticChartTypeStatistic',
                    id: 'ByWeekButton',
                    text: language.get('STATISTICS_CHART_BY_WEEK_BUTTON')
                }, {
                    xtype: 'button',
                    ui: 'action',
                    cls : 'statisticChartTypeStatistic',
                    id: 'ByDayButton',
                    text:  language.get('STATISTICS_CHART_BY_DAY_BUTTON')
            }]
        }]
    }
});