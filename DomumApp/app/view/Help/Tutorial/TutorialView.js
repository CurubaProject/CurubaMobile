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

        // TODO belm (2013-12-01) - changer le style des ronds qui indiquent à quelle page on est pour être plus visible.

        // TODO belm: use string internationalization object instead of constant strings.
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
                // TODO  ajouter image du systeme.
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
                   }]
                }]
                // TODO : montage des modules - Ajouter le mot de passe dans la section settings avant de programmer.
                // TODO : demander à Jo les détails
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
                // TODO : montage des modules - assembler les modules de contrôle et d'application si pas montés
                // mettre image de comment assembler. (avec les vis)
                // TODO : montage des modules - donner un avertissement de sécurité et suggérer de protèger les circuits dans l'epoxy.
                // Dire explicitement que si il n'y a pas d'epoxy, on ne doit pas le mettre dans le mur.
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
                // TODO : montage des modules - Souder des fils de sortie sur le board. Connecter les fils + crimper.
                // image de comment faire.
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
                // TODO : montage des modules - Ajuster les dip switches.
                // image des dip switches.
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
                        // TODO : montage des modules - pré-configuration avec fil mini-usb et le serveur.
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
                        // lumiere verte = power
                        // lumiere jaune = communication usb
                        // lumiere jaune qui blink 10Hz = problème.
                        // lumiere jaune qui est allumée tout le temps = communication terminée.
                        // Lumiere jaune qui blink a 1-2Hz = communication qui se fait - il faut pas débrancher rien.
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
                // TODO : montage des modules - débrancher.
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
                // TODO : montage des modules - mettre le module dans le boîtier.
                // Images des connexion de fils de sylvain modifiées par Mo.
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
                              html: language.get('TUTORIAL_TEXT_DEVICE_INSTALLATION_LIGHT_SIGNIFICATION')
                           }]
                        }]
                        // lumiere verte = power
                        // lumiere jaune = communication usb
                        // lumiere jaune qui blink 10Hz = problème.
                        // Lumiere jaune qui blink < 0.5Hz = communication qui se fait - tout est correct.
                    },
                    {
                        xtype: 'container',
                        items: [{
                           xtype: 'container',
                           cls : 'containerTutorial',
                           items : [{
                              html: 'Problème #1'
                           }]
                        }]
                    },
                    {
                        xtype: 'container',
                        items: [{
                           xtype: 'container',
                           cls : 'containerTutorial',
                           items : [{
                              html: 'Problème #2'
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