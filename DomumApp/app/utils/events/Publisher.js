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
// TODO rename this?
var Publisher = {
    subscribers:[],

    subscribe: function (subscriber) {
        this.subscribers.push(subscriber);
    },

    unsubscribe: function (subscriber) {
        var indexOfSubscriber = this.subscribers.indexOf(subscriber);
        if (indexOfSubscriber !== -1) {
            this.subscribers.splice(indexOfSubscriber, 1);
        }
    },

    publish: function (event, param) {
        for (var index = this.subscribers.length; index--;) {
            this.subscribers[index].notify(event, param);
        }
    }
};