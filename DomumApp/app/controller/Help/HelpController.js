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
// TODO Maybe improve by creating multiple controllers
Ext.define('Domum.controller.Help.HelpController', {
    extend: 'Ext.app.Controller',

    actualView : Constants.ACTUALVIEW_NONE,

    config: {
        refs: {
            // Related to the main view.
            TutorialButton: '#HelpViewTutorialButton',
            AboutUsButton: '#HelpViewAboutUsButton',

            HelpView: '#HelpView',
            TutorialView: '#TutorialView',

            // Related to tutorial views.
            IntroductionButton: '#TutorialViewTOCIntoductionButton',
            ServerConfigButton: '#TutorialViewTOCServerConfigButton',
            DeviceConfigButton: '#TutorialViewTOCDeviceConfigButton',
            GuiButton: '#TutorialViewTOCGuiButton',
            UserConfigButton: '#TutorialViewTOCUserConfig',
            OtherLinksButton: '#TutorialViewTOCOtherLinks',
            GetInvolvedButton: '#TutorialViewTOCGetInvolved'
        },

        control: {
            // Related to the main view.
            TutorialButton: {
                tap: 'showTutorial'
            },

            AboutUsButton: {
                tap: 'showAboutUs'
            },

            // Related to tutorial views.
            IntroductionButton: {
                tap: 'showTutorialIntroduction'
            },

            ServerConfigButton: {
                tap: 'showTutorialServerConfig'
            },

            DeviceConfigButton: {
                tap: 'showTutorialDeviceConfig'
            },

            GuiButton: {
                tap: 'showTutorialGui'
            },

            UserConfigButton: {
                tap: 'showTutorialUserConfig'
            },

            OtherLinksButton: {
                tap: 'showTutorialOtherLinks'
            },

            GetInvolvedButton: {
                tap: 'showTutorialGetInvolved'
            }
        }
    },

    init: function () {
        this.callParent();
        var that = this;
        Publisher.subscribe(that);
    },

    notify: function (event, param) {
        if (event === Constants.TUTORIALVIEW_DEACTIVATE || event === Constants.ABOUTUSVIEW_DEACTIVATE) {
            this.actualView = Constants.ACTUALVIEW_NONE;
        }
    },

    // Related to the main view.
    showTutorial: function() {
        if (this.actualView !== Constants.ACTUALVIEW_TUTORIAL) {
            this.getHelpView().push({xtype: 'TutorialView'});
            this.actualView = Constants.ACTUALVIEW_TUTORIAL;
        }
    },

    showAboutUs: function() {
        if (this.actualView !== Constants.ACTUALVIEW_ABOUTUS) {
            this.getHelpView().push({xtype: 'AboutView'});
            this.actualView = Constants.ACTUALVIEW_ABOUTUS;
        }
    },

    // Related to tutorial views.
    showTutorialIntroduction: function() {
        this.getTutorialView().animateActiveItem(Constants.SHOWTUTORIAL_INTRODUCTION, {type: 'slide', direction: 'right'});
    },

    showTutorialServerConfig: function() {
        this.getTutorialView().animateActiveItem(Constants.SHOWTUTORIAL_SERVERCONFIG, {type: 'slide', direction: 'right'});
    },

    showTutorialDeviceConfig: function() {
        this.getTutorialView().animateActiveItem(Constants.SHOWTUTORIAL_DEVICECONFIG, {type: 'slide', direction: 'right'});
    },

    showTutorialGui: function() {
        this.getTutorialView().animateActiveItem(Constants.SHOWTUTORIAL_GUI, {type: 'slide', direction: 'right'});
    },

    showTutorialUserConfig: function() {
        this.getTutorialView().animateActiveItem(Constants.SHOWTUTORIAL_USERCONFIG, {type: 'slide', direction: 'right'});
    },

    showTutorialOtherLinks: function() {
        this.getTutorialView().animateActiveItem(Constants.SHOWTUTORIAL_OTHERLINKS, {type: 'slide', direction: 'right'});
    },

    showTutorialGetInvolved: function() {
        this.getTutorialView().animateActiveItem(Constants.SHOWTUTORIAL_GETINVOLVED, {type: 'slide', direction: 'right'});
    }
});
