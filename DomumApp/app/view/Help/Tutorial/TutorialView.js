Ext.define('Domum.view.Help.Tutorial.TutorialView', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'TutorialView',
    id: 'TutorialView',

    config: {
        fullscreen: true,

        listeners: {
            deactivate: function () {
                Publisher.publish(Constants.TUTORIALVIEW_DEACTIVATE);
            }
        },

        items: [
            {
               xtype: 'container',
               items: [{
                  xtype: 'container',
                  cls : 'containerTutorial',
                  items : [{
                     html: language.get('TUTORIAL_TEXT_HOW_TO_USE_THIS_TUTORIAL')
                  }]
               }]
            },
            {
                items: [
                    {
                        html: language.get('TUTORIAL_TEXT_TABLE_OF_CONTENT'),
                        cls: 'titleMenuTutorial'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        id: 'TutorialViewTOCIntoductionButton',
                        text: language.get('TUTORIAL_TOC_INTRODUCTION_BUTTON'),
                        cls: 'tutorialMenuButton'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        id: 'TutorialViewTOCServerConfigButton',
                        text: language.get('TUTORIAL_TOC_SERVER_CONFIG_BUTTON'),
                        cls: 'tutorialMenuButton'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        id: 'TutorialViewTOCDeviceConfigButton',
                        text: language.get('TUTORIAL_TOC_DEVICE_CONFIG_BUTTON'),
                        cls: 'tutorialMenuButton'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        id: 'TutorialViewTOCGuiButton',
                        text: language.get('TUTORIAL_TOC_GUI_BUTTON'),
                        cls: 'tutorialMenuButton'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        id: 'TutorialViewTOCUserConfig',
                        text: language.get('TUTORIAL_TOC_USER_CONFIG_BUTTON'),
                        cls: 'tutorialMenuButton'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        id: 'TutorialViewTOCOtherLinks',
                        text: language.get('TUTORIAL_TOC_OTHER_LINK_BUTTON'),
                        cls: 'tutorialMenuButton'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        id: 'TutorialViewTOCGetInvolved',
                        text: language.get('TUTORIAL_TOC_GET_INVOLVED_BUTTON'),
                        cls: 'tutorialMenuButton'
                    }
                ]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_SYSTEM_INTRODUCTION')
                   }]
                }]
                // TODO belm : Add an image of the system.
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_INTRODUCTION')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_SERVER_INTRODUCTION')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_DEVICE_INTRODUCTION')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_HOW_IT_WORKS_INTRODUCTION')
                   }]
                }]
            },
            {
                xtype: 'carousel',
                direction: 'vertical',
                activeItem: 1,
                items: [
                    {
                        xtype: 'container',
                        items: [{
                           xtype: 'container',
                           cls : 'containerTutorial',
                           items : [{
                              html: language.get('TUTORIAL_TEXT_SERVER_INSTALLATION_RASPBERRY_PI')
                           }]
                        }]
                    },
                    {
                        xtype: 'container',
                        items: [{
                           xtype: 'container',
                           cls : 'containerTutorial',
                           items : [{
                              html: language.get('TUTORIAL_TEXT_SERVER_INSTALLATION')
                           }]
                        }]
                    },
                    {
                        xtype: 'container',
                        items: [{
                           xtype: 'container',
                           cls : 'containerTutorial',
                           items : [{
                              html: language.get('TUTORIAL_TEXT_SERVER_INSTALLATION_COMPUTER')
                           }]
                        }]
                    },
                ]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_SERVER_CONFIGURATION')
                      // TODO belm : give the procedure to give the server the wifi password.
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [
                    {
                       xtype: 'container',
                       cls : 'containerTutorial',
                       items : [
                           {
                               html: language.get('TUTORIAL_TEXT_DEVICE_ASSEMBLY')
                           }
                       ]
                    },
                    {
                        xtype: 'container',
                        cls : 'containerTutorial-warning',
                        items : [
                            {
                                html: language.get('TUTORIAL_TEXT_DEVICE_ASSEMBLY_WARNINGS')
                            }
                        ]
                     }
                ]
                // TODO belm : insert images about how to assemble the modules.
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_DEVICE_ASSEMBLY_WIRING')
                   }]
                }]
                // TODO belm : insert image about how to install the wires on the module.
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_DEVICE_ASSEMBLY_AJUST_DEVICE_PURPOSE')
                   }]
                }]
                // TODO belm : insert image of the dip switches configurations.
            },
            {
                xtype: 'carousel',
                direction: 'vertical',
                items: [
                    {
                        xtype: 'container',
                        items: [{
                           xtype: 'container',
                           cls : 'containerTutorial',
                           items : [{
                              html: language.get('TUTORIAL_TEXT_DEVICE_CONFIGURATION_PLUG')
                           }]
                        }]
                    },
                    {
                        xtype: 'container',
                        items: [{
                           xtype: 'container',
                           cls : 'containerTutorial',
                           items : [{
                              html: language.get('TUTORIAL_TEXT_DEVICE_CONFIGURATION_LIGHT_SIGNIFICATION')
                           }]
                        }]
                    }
                ]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_DEVICE_CONFIGURATION_UNPLUG')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_DEVICE_INSTALLATION_WIRING')
                   }]
                }]
                // TODO belm : insert images about how to wire the module to the power.
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_DEVICE_INSTALLATION_LIGHT_SIGNIFICATION')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_DEVICE_TAB')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_DEVICE_LIST')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_DEVICE_DETAILS_ONOFF_BUTTON')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_DEVICE_DETAILS_HISTOGRAM')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_DEVICE_DETAILS_CONFIGURE_DEVICE')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_CONFIGURE_DEVICE')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_CONGRATULATION')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MOBILE_APP_SETTINGS')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MORE_INFORMATION_WEBSITE')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [{
                   xtype: 'container',
                   cls : 'containerTutorial',
                   items : [{
                      html: language.get('TUTORIAL_TEXT_MORE_INFORMATION_WIKI')
                   }]
                }]
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'container',
                        cls : 'containerTutorial',
                        items : [
                            {
                                html: language.get('TUTORIAL_TEXT_MORE_INFORMATION_GET_INVOLVED')
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls : 'containerTutorial',
                        items : [
                            {
                                html: language.get('TUTORIAL_TEXT_MORE_INFORMATION_GET_INVOLVED_LINK')
                            }
                        ]
                    }
                ]
            }
        ]
    }
});