import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'app.css': {
                        table: 'sys_ux_theme_asset'
                        id: 'e4122edda7bc4c5d9683bbc44164bfc3'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '91b2f9b1fca74c02892e40f3f86de436'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a31192ed135541c9aaa2309f5accdbbb'
                    }
                    'queuesmart-ai-insights': {
                        table: 'sys_ws_operation'
                        id: 'bc4a5afd3e424e8faf8b261202a96816'
                    }
                    'queuesmart-generate-token': {
                        table: 'sys_ws_operation'
                        id: '1058a1a7cfe946d2847e297554449513'
                    }
                    'queuesmart-staff-call-next': {
                        table: 'sys_ws_operation'
                        id: '545440e7b6b444e4ac97a75f80c245f3'
                    }
                    'queuesmart-staff-complete-service': {
                        table: 'sys_ws_operation'
                        id: '039190be50f84962a2da4b7fa19c3c20'
                    }
                    'queuesmart-staff-mark-unavailable': {
                        table: 'sys_ws_operation'
                        id: '6e31614519f74a2aa917b06074744172'
                    }
                    'queuesmart-staff-start-service': {
                        table: 'sys_ws_operation'
                        id: '74fef15c50d740f6b943c1f1eec75ff9'
                    }
                    'queuesmart-student-api': {
                        table: 'sys_ws_definition'
                        id: '95f5e16e964c4b2c83993886d2cac8e3'
                    }
                    'queuesmart-student-me': {
                        table: 'sys_ws_operation'
                        id: '17834ef9456145ae9fadffc08e48f5f6'
                    }
                    'queuesmart-submit-feedback': {
                        table: 'sys_ws_operation'
                        id: '972bb8f8c1734e43bb6ab8a182134c93'
                    }
                    'src_server_queuesmart-ai-insights_ts': {
                        table: 'sys_module'
                        id: '9a4c12a308a34c6f82517bb8d5573507'
                    }
                    'src_server_queuesmart-feedback_ts': {
                        table: 'sys_module'
                        id: 'eeb99ddb5b4545debd687a704e8e8668'
                    }
                    'src_server_queuesmart-generate_ts': {
                        table: 'sys_module'
                        id: '409099c2455849baaaa016b5b922fddc'
                    }
                    'src_server_queuesmart-staff_ts': {
                        table: 'sys_module'
                        id: '54c0c08a893d40119aea0c231d259a2f'
                    }
                    'src_server_queuesmart-staff-action_ts': {
                        table: 'sys_module'
                        id: '7e8bf1683a8e422c8d154a37bf78fbf1'
                    }
                    'src_server_queuesmart-user_ts': {
                        table: 'sys_module'
                        id: '28ddb1b69ddd4dfc932b9c4299423998'
                    }
                }
                composite: [
                    {
                        table: 'sys_hub_action_output'
                        id: '00ab3db71dab03107f441c0189b3a5ec'
                        key: {
                            model: 'ff9b3db71dab03107f441c0189b3a5ae'
                            element: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '010974ff1d2303107f441c0189b3a517'
                        key: {
                            model: '46a874bf1d2303107f441c0189b3a5fb'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0159577c7c6703107f44c9469eb959aa'
                        key: {
                            sys_ui_section: {
                                id: 'f459577c7c6703107f44c9469eb9599f'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '01a25ec242754af5b0e6d9fb493940c0'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01a67564cd3383107f44c0edd2feb0d3'
                        key: {
                            name: 'var__m_sys_hub_flow_input_1e663d24cd3383107f44c0edd2feb0bb'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01a67564cd3383107f44c0edd2feb0dd'
                        key: {
                            name: 'var__m_sys_hub_flow_input_1e663d24cd3383107f44c0edd2feb0bb'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0506f240c8bf03107f44f3136bd8bb37'
                        key: {
                            name: 'var__m_sys_hub_flow_input_4106f240c8bf03107f44f3136bd8bb1e'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05402ce8cdf343107f44c0edd2feb0a1'
                        key: {
                            name: 'var__m_sys_hub_flow_input_47df98a8cdf343107f44c0edd2feb0a6'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0559577c7c6703107f44c9469eb959ab'
                        key: {
                            sys_ui_section: {
                                id: 'f459577c7c6703107f44c9469eb9599f'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '05aa716ccd3383107f44c0edd2feb07d'
                        key: {
                            model: 'f8aa716ccd3383107f44c0edd2feb060'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05ba5e08c8bb03107f44f3136bd8bbb8'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f4ba5e08c8bb03107f44f3136bd8bb91'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '05fe5ff47ca703107f44c9469eb959e2'
                        key: {
                            sys_security_acl: '0dfe5ff47ca703107f44c9469eb959d8'
                            sys_user_role: {
                                id: 'f4fe5ff47ca703107f44c9469eb95961'
                                key: {
                                    name: 'x_snc_queuesmart.service_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06ab4452b0d04988be363553a22ebbe4'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '074c65c8c8f303107f44f3136bd8bb47'
                        key: {
                            model: 'f22ce988c8f303107f44f3136bd8bb2e'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '08ab7db71dab03107f441c0189b3a501'
                        key: {
                            document_key: 'ff9b3db71dab03107f441c0189b3a5ae'
                            variable: '48ab3db71dab03107f441c0189b3a5e5'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '08c8c74d64a303107f44370f5ab04992'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            view: {
                                id: '09f22e33292103107f44f3a98c182477'
                                key: {
                                    name: 'sys_ref_list'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '0906f240c8bf03107f44f3136bd8bb20'
                        key: {
                            model: '4106f240c8bf03107f44f3136bd8bb1e'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0959577c7c6703107f44c9469eb959ad'
                        key: {
                            sys_ui_section: {
                                id: 'f459577c7c6703107f44c9469eb9599f'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '098fd70d646703107f44370f5ab049df'
                        key: {
                            model: '1b2f17c9646703107f44370f5ab0495a'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0a1a1a4c4b664d58a3ac436a8859cb35'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_counter'
                            col_name_string: 'workplace'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0c257d7b1d6b03107f441c0189b3a5ed'
                        key: {
                            document_key: 'c843f5b71d6b03107f441c0189b3a518'
                            variable: 'bf157d7b1d6b03107f441c0189b3a5a4'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '0d402ce8cdf343107f44c0edd2feb071'
                        key: {
                            model: '47df98a8cdf343107f44c0edd2feb0a6'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0ed465d0d89c40778bd8e9e575e1c38e'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_queue'
                            col_name_string: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f4c65c8c8f303107f44f3136bd8bb41'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f22ce988c8f303107f44f3136bd8bb2e'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0ff6c38964a303107f44370f5ab04985'
                        key: {
                            sys_ui_section: {
                                id: 'cff6c74964a303107f44370f5ab04936'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10dff9d2524e4d22bf74cf273325486e'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'actual_end_time'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '112cba54cdb703107f44c0edd2feb089'
                        key: {
                            model: 'c91cf654cdb703107f44c0edd2feb0b9'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '117539bb1d6b03107f441c0189b3a570'
                        key: {
                            model: 'd57539bb1d6b03107f441c0189b3a56c'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '118f1b0d646703107f44370f5ab04927'
                        key: {
                            model: '1b2f17c9646703107f44370f5ab0495a'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '11d669bf1de703107f441c0189b3a5a1'
                        key: {
                            model: '1dd669bf1de703107f441c0189b3a59c'
                            element: 'response_window_until'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13cdea40c87f03107f44f3136bd8bb38'
                        key: {
                            name: 'var__m_sys_hub_flow_input_7f3da200c87f03107f44f3136bd8bb43'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1467af82d24549ec94d390f2662a01f9'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '148d901d96554d6e8ee1968712f2c100'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '157539bb1d6b03107f441c0189b3a55f'
                        key: {
                            model: '1d7539bb1d6b03107f441c0189b3a55b'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '157539bb1d6b03107f441c0189b3a586'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_d57539bb1d6b03107f441c0189b3a56c'
                            element: 'last_queue_position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19b62cc8d12c48f89022ef5ef9be4e06'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'workplace'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '1ade26d8cd3703107f44c0edd2feb080'
                        key: {
                            model: '1ade26d8cd3703107f44c0edd2feb078'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b098051ec81417f99e5d119edc7630c'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'staff'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1bf35305642703107f44370f5ab049f5'
                        key: {
                            sys_security_acl: '17f35305642703107f44370f5ab049de'
                            sys_user_role: {
                                id: 'b2f31305642703107f44370f5ab04989'
                                key: {
                                    name: 'x_snc_queuesmart.queue_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1bf39305642703107f44370f5ab0490c'
                        key: {
                            sys_security_acl: '53f39305642703107f44370f5ab04903'
                            sys_user_role: {
                                id: 'b2f31305642703107f44370f5ab04989'
                                key: {
                                    name: 'x_snc_queuesmart.queue_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d5a6714cd7f03107f44c0edd2feb010'
                        key: {
                            name: 'var__m_sys_hub_action_output_cc996f90cd7f03107f44c0edd2feb03f'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1d5a6714cd7f03107f44c0edd2feb019'
                        key: {
                            document_key: 'cc996f90cd7f03107f44c0edd2feb03f'
                            variable: 'dd5a2714cd7f03107f44c0edd2feb0f4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1dfe9ff47ca703107f44c9469eb9591a'
                        key: {
                            sys_security_acl: '59fe9ff47ca703107f44c9469eb95911'
                            sys_user_role: {
                                id: 'f4fe5ff47ca703107f44c9469eb95961'
                                key: {
                                    name: 'x_snc_queuesmart.service_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1eb717b87c6703107f44c9469eb959c3'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '1fcdea40c87f03107f44f3136bd8bb18'
                        key: {
                            model: '7f3da200c87f03107f44f3136bd8bb43'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '20b79f787c6703107f44c9469eb95908'
                        key: {
                            name: 'x_snc_queuesmart.workplace_user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '211e7a58cdb703107f44c0edd2feb03b'
                        key: {
                            name: 'var__m_sys_hub_flow_input_291e7a58cdb703107f44c0edd2feb009'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '212cfa54cdb703107f44c0edd2feb035'
                        key: {
                            name: 'var__m_sys_hub_flow_input_c91cf654cdb703107f44c0edd2feb0b9'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '217539bb1d6b03107f441c0189b3a5b7'
                        key: {
                            model: '1d7539bb1d6b03107f441c0189b3a55b'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '21d669bf1de703107f441c0189b3a5d2'
                        key: {
                            document_key: '91d669bf1de703107f441c0189b3a5ad'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '21d669bf1de703107f441c0189b3a5d6'
                        key: {
                            model: '1dd669bf1de703107f441c0189b3a59c'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '225a6714cd7f03107f44c0edd2feb0f5'
                        key: {
                            name: 'var__m_sys_hub_action_input_2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: 'queue_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '22de26d8cd3703107f44c0edd2feb0a1'
                        key: {
                            id: '1ade26d8cd3703107f44c0edd2feb078'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '22de26d8cd3703107f44c0edd2feb0a2'
                        key: {
                            document_key: '1ade26d8cd3703107f44c0edd2feb078'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '22de26d8cd3703107f44c0edd2feb0de'
                        key: {
                            id: 'adabe214cd3703107f44c0edd2feb0f7'
                            table: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '23e6bb5ccdbf03107f44c0edd2feb071'
                        key: {
                            model: 'e7e6bb5ccdbf03107f44c0edd2feb06e'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '23f8d7cd642703107f44370f5ab049ed'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'queue_position'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '243121371de703107f441c0189b3a5b9'
                        key: {
                            id: 'd83121371de703107f441c0189b3a589'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2459b398144b47fbaf8075187863047b'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '257539bb1d6b03107f441c0189b3a5c5'
                        key: {
                            id: '1d7539bb1d6b03107f441c0189b3a55b'
                            table: 'var__m_sys_hub_action_output_1d7539bb1d6b03107f441c0189b3a55b'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '257bb5b71dab03107f441c0189b3a5b5'
                        key: {
                            model: 'a17bb5b71dab03107f441c0189b3a5b0'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '257bfd771dab03107f441c0189b3a54d'
                        key: {
                            model: 'ebf9f5f31dab03107f441c0189b3a596'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '258bd8da0ed445368dc60d0ec21a15a4'
                        key: {
                            name: 'x_snc_queuesmart_available___busy___offline'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '25d669bf1de703107f441c0189b3a5d3'
                        key: {
                            document_key: '91d669bf1de703107f441c0189b3a5ad'
                            variable: '2dd669bf1de703107f441c0189b3a5b0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25d669bf1de703107f441c0189b3a5ee'
                        key: {
                            name: 'var__m_sys_hub_action_output_1dd669bf1de703107f441c0189b3a59c'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '25d669bf1de703107f441c0189b3a5f6'
                        key: {
                            document_key: '1dd669bf1de703107f441c0189b3a59c'
                            variable: '61d669bf1de703107f441c0189b3a5dd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2694ce89ed814c15adad0e27bdb05f4f'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'called_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '26bfd7787ca703107f44c9469eb959f9'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2704b6a3a61f4b28b32a454c484f586e'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'rejoin_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27157d7b1d6b03107f441c0189b3a510'
                        key: {
                            name: 'var__m_sys_hub_action_input_c843f5b71d6b03107f441c0189b3a518'
                            element: 'service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2721335714e703107f4429fa46ff66f7'
                        key: {
                            name: 'var__m_sys_hub_flow_input_2721335714e703107f4429fa46ff66dc'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2765aa0591a5401697063d207bff1d0f'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'counter_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '27f39305642703107f44370f5ab0495d'
                        key: {
                            sys_security_acl: 'eff39305642703107f44370f5ab04953'
                            sys_user_role: {
                                id: 'b2f31305642703107f44370f5ab04989'
                                key: {
                                    name: 'x_snc_queuesmart.queue_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '27f8d7cd642703107f44370f5ab049ec'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '283121371de703107f441c0189b3a5ba'
                        key: {
                            document_key: 'd83121371de703107f441c0189b3a589'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '283121371de703107f441c0189b3a5d2'
                        key: {
                            name: 'var__m_sys_hub_action_output_77dd9d3f1da703107f441c0189b3a5b3'
                            element: 'is_expired'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '283121371de703107f441c0189b3a5dd'
                        key: {
                            name: 'var__m_sys_hub_action_output_77dd9d3f1da703107f441c0189b3a5b3'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '283c071e946748fa93826d6bca4a6662'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'availability'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28eb3c557e004fc28933fb74d7b5893a'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'workplace'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '290fead8cd3703107f44c0edd2feb008'
                        key: {
                            name: 'var__m_sys_hub_action_input_ad0faad8cd3703107f44c0edd2feb0fd'
                            element: 'queue_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '290fead8cd3703107f44c0edd2feb049'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_610fead8cd3703107f44c0edd2feb035'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '29846fb07ce703107f44c9469eb959d9'
                        key: {
                            name: 'x_snc_queuesmart_available___busy___offline'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '29d669bf1de703107f441c0189b3a5f6'
                        key: {
                            document_key: '1dd669bf1de703107f441c0189b3a59c'
                            variable: 'e5d669bf1de703107f441c0189b3a5e6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a15e86ccd3743107f44c0edd2feb054'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e615e86ccd3743107f44c0edd2feb007'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '2ade26d8cd3703107f44c0edd2feb0d1'
                        key: {
                            model: 'adabe214cd3703107f44c0edd2feb0f7'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2bba4b80d2834c8fa2b67f86cca87739'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'queue_position'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2bf8d7cd642703107f44370f5ab049eb'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'counter'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2bf8d7cd642703107f44370f5ab049ee'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'actual_service_time'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '2d0fead8cd3703107f44c0edd2feb038'
                        key: {
                            model: '610fead8cd3703107f44c0edd2feb035'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2da473f7b2a0471ba39a994f5be9530a'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2db4db45642703107f44370f5ab04975'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '2dd669bf1de703107f441c0189b3a5b0'
                        key: {
                            model: '91d669bf1de703107f441c0189b3a5ad'
                            element: 'response_window_until'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '2dd669bf1de703107f441c0189b3a5c3'
                        key: {
                            model: '91d669bf1de703107f441c0189b3a5ad'
                            element: 'is_expired'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2dd669bf1de703107f441c0189b3a5d1'
                        key: {
                            document_key: '91d669bf1de703107f441c0189b3a5ad'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2dd669bf1de703107f441c0189b3a5f6'
                        key: {
                            document_key: '1dd669bf1de703107f441c0189b3a59c'
                            variable: '21d669bf1de703107f441c0189b3a5d6'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '2e15e86ccd3743107f44c0edd2feb009'
                        key: {
                            model: 'e615e86ccd3743107f44c0edd2feb007'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2ede26d8cd3703107f44c0edd2feb0a2'
                        key: {
                            document_key: '1ade26d8cd3703107f44c0edd2feb078'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ede26d8cd3703107f44c0edd2feb0ba'
                        key: {
                            name: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2ede26d8cd3703107f44c0edd2feb0de'
                        key: {
                            id: 'adabe214cd3703107f44c0edd2feb0f7'
                            table: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            field: 'success'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '2f157d7b1d6b03107f441c0189b3a506'
                        key: {
                            model: 'c843f5b71d6b03107f441c0189b3a518'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2ff8d7cd642703107f44370f5ab049ed'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'actual_start_time'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '310fead8cd3703107f44c0edd2feb086'
                        key: {
                            id: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            table: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32965a1dea8e4c7c9b1a2e982ce8d0aa'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'counter_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '33157d7b1d6b03107f441c0189b3a54f'
                        key: {
                            id: '6b157d7b1d6b03107f441c0189b3a531'
                            table: 'var__m_sys_hub_step_ext_input_6b157d7b1d6b03107f441c0189b3a531'
                            field: 'service'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '33157d7b1d6b03107f441c0189b3a59d'
                        key: {
                            model: 'c843f5b71d6b03107f441c0189b3a518'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33157d7b1d6b03107f441c0189b3a5a3'
                        key: {
                            name: 'var__m_sys_hub_action_output_c843f5b71d6b03107f441c0189b3a518'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3357d500c87303107f44f3136bd8bb2b'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '339b3db71dab03107f441c0189b3a5d6'
                        key: {
                            model: 'b39b3db71dab03107f441c0189b3a5cc'
                            element: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33e6bb5ccdbf03107f44c0edd2feb08c'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e7e6bb5ccdbf03107f44c0edd2feb06e'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34aa716ccd3383107f44c0edd2feb06f'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f8aa716ccd3383107f44c0edd2feb060'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3557263649f344d1882db96fed4e80a3'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '36134b347c6303107f44c9469eb9590e'
                        key: {
                            name: 'x_snc_queuesmart.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '365aa714cd7f03107f44c0edd2feb028'
                        key: {
                            name: 'var__m_sys_hub_action_output_2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '365aa714cd7f03107f44c0edd2feb03f'
                        key: {
                            model: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '370bd67f69564907bea9e0628489dd11'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'rejoin_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '374efa701d5a45eaa74ee7257e634128'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'workplace'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3757d500c87303107f44f3136bd8bb29'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'staff'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3757d500c87303107f44f3136bd8bb3c'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_window_until'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37609b8ee9db4f09bb1d33a23daaa6be'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '379b3db71dab03107f441c0189b3a5b2'
                        key: {
                            model: 'ff9b3db71dab03107f441c0189b3a5ae'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '37bf1b787ca703107f44c9469eb959b8'
                        key: {
                            sys_ui_section: {
                                id: 'bfbf1b787ca703107f44c9469eb959ae'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '37bf1b787ca703107f44c9469eb959b9'
                        key: {
                            sys_ui_section: {
                                id: 'bfbf1b787ca703107f44c9469eb959ae'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '37bf1b787ca703107f44c9469eb959ba'
                        key: {
                            sys_ui_section: {
                                id: 'bfbf1b787ca703107f44c9469eb959ae'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'workplace'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '381f7798d50547d48210b1c86021f126'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'arrival_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '390fead8cd3703107f44c0edd2feb051'
                        key: {
                            document_key: '610fead8cd3703107f44c0edd2feb035'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '390fead8cd3703107f44c0edd2feb086'
                        key: {
                            document_key: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            variable: '7d0fead8cd3703107f44c0edd2feb05b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '397bb5b71dab03107f441c0189b3a5bf'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_a17bb5b71dab03107f441c0189b3a5b0'
                            element: 'estimated_wait_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '397bf5b71dab03107f441c0189b3a50e'
                        key: {
                            model: 'ebf9f5f31dab03107f441c0189b3a596'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a5aa714cd7f03107f44c0edd2feb03d'
                        key: {
                            name: 'var__m_sys_hub_action_output_2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: 'is_called'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3a629341642703107f44370f5ab04991'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ace8fb7ca374e839d09e4baab393209'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'actual_start_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3b57d500c87303107f44f3136bd8bb3a'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'arrival_time'
                            position: '14'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '3c0745af03c2495582e528044a7d6007'
                        key: {
                            application_file: 'ee1e5c5ce86b45429accb14d8c52de29'
                            source_artifact: 'a18bd1fe0d8f410bbc75561586ba29b8'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '3c3121371de703107f441c0189b3a5e7'
                        key: {
                            action_type_id: '77dd9d3f1da703107f441c0189b3a5b3'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '3c8586e0ca0944c897647ef2464df723'
                        key: {
                            endpoint: 'x_snc_queuesmart_student.do'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d0fead8cd3703107f44c0edd2feb086'
                        key: {
                            document_key: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            variable: 'f50fead8cd3703107f44c0edd2feb055'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d7bf5b71dab03107f441c0189b3a51f'
                        key: {
                            document_key: 'ebf9f5f31dab03107f441c0189b3a596'
                            variable: 'f97bb5b71dab03107f441c0189b3a5e7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3dfb25e37c844139993f5a8a9f9195ba'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'service_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3e5aa714cd7f03107f44c0edd2feb01f'
                        key: {
                            document_key: 'e65aa714cd7f03107f44c0edd2feb008'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3e5aa714cd7f03107f44c0edd2feb059'
                        key: {
                            id: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            table: 'var__m_sys_hub_action_output_2a5a6714cd7f03107f44c0edd2feb0eb'
                            field: 'is_called'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '3e94e48be399496b938bc25be6fe1290'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_queue'
                            col_name_string: 'counter'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3f157d7b1d6b03107f441c0189b3a54c'
                        key: {
                            document_key: '6b157d7b1d6b03107f441c0189b3a531'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '3f157d7b1d6b03107f441c0189b3a5d0'
                        key: {
                            model: 'c843f5b71d6b03107f441c0189b3a518'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f57d500c87303107f44f3136bd8bb2c'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_wait_time'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3fbf1b787ca703107f44c9469eb959b7'
                        key: {
                            sys_ui_section: {
                                id: 'bfbf1b787ca703107f44c9469eb959ae'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3fbf1b787ca703107f44c9469eb959b8'
                        key: {
                            sys_ui_section: {
                                id: 'bfbf1b787ca703107f44c9469eb959ae'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3fbf1b787ca703107f44c9469eb959b9'
                        key: {
                            sys_ui_section: {
                                id: 'bfbf1b787ca703107f44c9469eb959ae'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'average_service_time'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3fbf1b787ca703107f44c9469eb959ba'
                        key: {
                            sys_ui_section: {
                                id: 'bfbf1b787ca703107f44c9469eb959ae'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '40257d7b1d6b03107f441c0189b3a5ee'
                        key: {
                            document_key: 'c843f5b71d6b03107f441c0189b3a518'
                            variable: '3f157d7b1d6b03107f441c0189b3a5d0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '40768f0964a303107f44370f5ab049de'
                        key: {
                            sys_security_acl: 'bb668f0964a303107f44370f5ab049d2'
                            sys_user_role: {
                                id: '9f664f0964a303107f44370f5ab0495e'
                                key: {
                                    name: 'x_snc_queuesmart.staff_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '407792622dba46428cdd7329a0c09ae8'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'called_time'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '40bb0fe1c64c4a289ce95810550e73be'
                        key: {
                            name: 'x_snc_queuesmart/main'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '40d629bf1de703107f441c0189b3a578'
                        key: {
                            document_key: '77dd9d3f1da703107f441c0189b3a5b3'
                            variable: 'e83121371de703107f441c0189b3a5c8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4106f240c8bf03107f44f3136bd8bb2d'
                        key: {
                            name: 'var__m_sys_hub_flow_input_4106f240c8bf03107f44f3136bd8bb1e'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4445c33c7c6303107f44c9469eb95976'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44ab3db71dab03107f441c0189b3a5ea'
                        key: {
                            name: 'var__m_sys_hub_action_output_ff9b3db71dab03107f441c0189b3a5ae'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '44ab7db71dab03107f441c0189b3a500'
                        key: {
                            id: 'ff9b3db71dab03107f441c0189b3a5ae'
                            table: 'var__m_sys_hub_action_output_ff9b3db71dab03107f441c0189b3a5ae'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44c1f889c38b4fb18536ab016441b51a'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '44c8c74d64a303107f44370f5ab04993'
                        key: {
                            list_id: {
                                id: '08c8c74d64a303107f44370f5ab04992'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    view: '09f22e33292103107f44f3a98c182477'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '4506f240c8bf03107f44f3136bd8bb31'
                        key: {
                            model: '4106f240c8bf03107f44f3136bd8bb1e'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '455a2714cd7f03107f44c0edd2feb0dc'
                        key: {
                            model: 'cd5a2714cd7f03107f44c0edd2feb0b7'
                            element: 'is_called'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '45aa716ccd3383107f44c0edd2feb073'
                        key: {
                            model: 'f8aa716ccd3383107f44c0edd2feb060'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '46dee2d8cd3703107f44c0edd2feb040'
                        key: {
                            model: 'adabe214cd3703107f44c0edd2feb0f7'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4710456ccd7b43107f44c0edd2feb071'
                        key: {
                            name: 'var__m_sys_hub_flow_input_c710456ccd7b43107f44c0edd2feb04a'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4763080d7cab03107f44c9469eb959ee'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'workplace'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4763080d7cab03107f44c9469eb959ef'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4763080d7cab03107f44c9469eb959f0'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '48257d7b1d6b03107f441c0189b3a5ed'
                        key: {
                            id: 'c843f5b71d6b03107f441c0189b3a518'
                            table: 'var__m_sys_hub_action_output_c843f5b71d6b03107f441c0189b3a518'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '48730327822344989efb372e9a338b4a'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'actual_service_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '48ab3db71dab03107f441c0189b3a5e1'
                        key: {
                            document_key: 'b39b3db71dab03107f441c0189b3a5cc'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '48ab3db71dab03107f441c0189b3a5e5'
                        key: {
                            model: 'ff9b3db71dab03107f441c0189b3a5ae'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '490974ff1d2303107f441c0189b3a512'
                        key: {
                            name: 'var__m_sys_hub_flow_input_46a874bf1d2303107f441c0189b3a5fb'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49ba5e08c8bb03107f44f3136bd8bbad'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f4ba5e08c8bb03107f44f3136bd8bb91'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '49ba5e08c8bb03107f44f3136bd8bbbc'
                        key: {
                            model: 'f4ba5e08c8bb03107f44f3136bd8bb91'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '49fab281646303107f44370f5ab04981'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            view: {
                                id: '09f22e33292103107f44f3a98c182477'
                                key: {
                                    name: 'sys_ref_list'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ac83790018a46c2ae75df4dccecda46'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'actual_end_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '4bcdaa40c87f03107f44f3136bd8bbaf'
                        key: {
                            model: '7f3da200c87f03107f44f3136bd8bb43'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4c257d7b1d6b03107f441c0189b3a5ec'
                        key: {
                            id: 'c843f5b71d6b03107f441c0189b3a518'
                            table: 'var__m_sys_hub_action_output_c843f5b71d6b03107f441c0189b3a518'
                            field: 'last_queue_position'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4cab3db71dab03107f441c0189b3a5e2'
                        key: {
                            id: 'b39b3db71dab03107f441c0189b3a5cc'
                            table: 'var__m_sys_hub_step_ext_input_b39b3db71dab03107f441c0189b3a5cc'
                            field: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '4cab7db71dab03107f441c0189b3a502'
                        key: {
                            action_type_id: 'ff9b3db71dab03107f441c0189b3a5ae'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4cc1e17414f04f19968b057c4482e647'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d0974ff1d2303107f441c0189b3a52a'
                        key: {
                            name: 'var__m_sys_hub_flow_input_46a874bf1d2303107f441c0189b3a5fb'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d59577c7c6703107f44c9469eb959ab'
                        key: {
                            sys_ui_section: {
                                id: 'f459577c7c6703107f44c9469eb9599f'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '4f10456ccd7b43107f44c0edd2feb065'
                        key: {
                            model: 'c710456ccd7b43107f44c0edd2feb04a'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '4f10456ccd7b43107f44c0edd2feb07f'
                        key: {
                            model: 'c710456ccd7b43107f44c0edd2feb04a'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f10456ccd7b43107f44c0edd2feb085'
                        key: {
                            name: 'var__m_sys_hub_flow_input_c710456ccd7b43107f44c0edd2feb04a'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4f63080d7cab03107f44c9469eb959d6'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4f63080d7cab03107f44c9469eb959ee'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4f63080d7cab03107f44c9469eb959ef'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4f63080d7cab03107f44c9469eb959f0'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '503121371de703107f441c0189b3a555'
                        key: {
                            name: 'var__m_sys_hub_action_input_77dd9d3f1da703107f441c0189b3a5b3'
                            element: 'response_window_until'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5106f240c8bf03107f44f3136bd8bb41'
                        key: {
                            name: 'var__m_sys_hub_flow_input_4106f240c8bf03107f44f3136bd8bb1e'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51d669bf1de703107f441c0189b3a5a6'
                        key: {
                            name: 'var__m_sys_hub_action_input_1dd669bf1de703107f441c0189b3a59c'
                            element: 'response_window_until'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '52de26d8cd3703107f44c0edd2feb087'
                        key: {
                            model: '1ade26d8cd3703107f44c0edd2feb078'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5407e0a4cd7743107f44c0edd2feb071'
                        key: {
                            name: 'var__m_sys_hub_flow_input_3dd66824cd7743107f44c0edd2feb0d7'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '555a2714cd7f03107f44c0edd2feb0fb'
                        key: {
                            name: 'var__m_sys_hub_action_output_cc996f90cd7f03107f44c0edd2feb03f'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56de26d8cd3703107f44c0edd2feb090'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_1ade26d8cd3703107f44c0edd2feb078'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '574c65c8c8f303107f44f3136bd8bb97'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f22ce988c8f303107f44f3136bd8bb2e'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '589170f86e2d4f338e1e037e1d9e39d9'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'service_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '595a6714cd7f03107f44c0edd2feb018'
                        key: {
                            id: 'cc996f90cd7f03107f44c0edd2feb03f'
                            table: 'var__m_sys_hub_action_output_cc996f90cd7f03107f44c0edd2feb03f'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '598f1b0d646703107f44370f5ab0492d'
                        key: {
                            name: 'var__m_sys_hub_flow_input_1b2f17c9646703107f44370f5ab0495a'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5991f8ac2450440db1ad6ccc11fb2bdf'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'staff_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5bcdea40c87f03107f44f3136bd8bb13'
                        key: {
                            name: 'var__m_sys_hub_flow_input_7f3da200c87f03107f44f3136bd8bb43'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5be2a7fc7ca703107f44c9469eb959ee'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5d3b2f374e80475f8d3c5014c7757649'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_counter'
                            col_name_string: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d8f1b0d646703107f44370f5ab04921'
                        key: {
                            name: 'var__m_sys_hub_flow_input_1b2f17c9646703107f44370f5ab0495a'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '5db3c0897cab03107f44c9469eb9591e'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            view: {
                                id: '09f22e33292103107f44f3a98c182477'
                                key: {
                                    name: 'sys_ref_list'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '5f138b347c6303107f44c9469eb9591c'
                        key: {
                            name: 'x_snc_queuesmart.user'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '603121371de703107f441c0189b3a5bc'
                        key: {
                            document_key: 'd83121371de703107f441c0189b3a589'
                            variable: '943121371de703107f441c0189b3a590'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '610fead8cd3703107f44c0edd2feb002'
                        key: {
                            model: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '61291f3c7c6703107f44c9469eb95992'
                        key: {
                            list_id: {
                                id: 'a5291f3c7c6703107f44c9469eb95990'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '617539bb1d6b03107f441c0189b3a5be'
                        key: {
                            name: 'var__m_sys_hub_action_output_1d7539bb1d6b03107f441c0189b3a55b'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '61b45b45642703107f44370f5ab049fb'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '61b717b87c6703107f44c9469eb95926'
                        key: {
                            sys_security_acl: '6db717b87c6703107f44c9469eb9591a'
                            sys_user_role: {
                                id: '20b79f787c6703107f44c9469eb95908'
                                key: {
                                    name: 'x_snc_queuesmart.workplace_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '61d669bf1de703107f441c0189b3a5d3'
                        key: {
                            id: '91d669bf1de703107f441c0189b3a5ad'
                            table: 'var__m_sys_hub_step_ext_input_91d669bf1de703107f441c0189b3a5ad'
                            field: 'response_window_until'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '61d669bf1de703107f441c0189b3a5dd'
                        key: {
                            model: '1dd669bf1de703107f441c0189b3a59c'
                            element: 'is_expired'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '61d669bf1de703107f441c0189b3a5f6'
                        key: {
                            id: '1dd669bf1de703107f441c0189b3a59c'
                            table: 'var__m_sys_hub_action_output_1dd669bf1de703107f441c0189b3a59c'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '62bfd7787ca703107f44c9469eb959fa'
                        key: {
                            list_id: {
                                id: '26bfd7787ca703107f44c9469eb959f9'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63e1c062771e44068b9dbf63cbfd0cc9'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '651e7a58cdb703107f44c0edd2feb03f'
                        key: {
                            model: '291e7a58cdb703107f44c0edd2feb009'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '651e7a58cdb703107f44c0edd2feb077'
                        key: {
                            name: 'var__m_sys_hub_flow_input_291e7a58cdb703107f44c0edd2feb009'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '65291f3c7c6703107f44c9469eb95991'
                        key: {
                            list_id: {
                                id: 'a5291f3c7c6703107f44c9469eb95990'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '657539bb1d6b03107f441c0189b3a5b1'
                        key: {
                            model: '1d7539bb1d6b03107f441c0189b3a55b'
                            element: 'last_queue_position'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '657539bb1d6b03107f441c0189b3a5b5'
                        key: {
                            name: 'var__m_sys_hub_action_output_1d7539bb1d6b03107f441c0189b3a55b'
                            element: 'last_queue_position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '65d669bf1de703107f441c0189b3a5d1'
                        key: {
                            id: '91d669bf1de703107f441c0189b3a5ad'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65d669bf1de703107f441c0189b3a5db'
                        key: {
                            name: 'var__m_sys_hub_action_output_1dd669bf1de703107f441c0189b3a59c'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '65d669bf1de703107f441c0189b3a5f5'
                        key: {
                            id: '1dd669bf1de703107f441c0189b3a59c'
                            table: 'var__m_sys_hub_action_output_1dd669bf1de703107f441c0189b3a59c'
                            field: 'is_expired'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '66de26d8cd3703107f44c0edd2feb0c7'
                        key: {
                            model: 'adabe214cd3703107f44c0edd2feb0f7'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66de26d8cd3703107f44c0edd2feb0d6'
                        key: {
                            name: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66de26d8cd3703107f44c0edd2feb0df'
                        key: {
                            document_key: 'adabe214cd3703107f44c0edd2feb0f7'
                            variable: '66de26d8cd3703107f44c0edd2feb0c7'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '683121371de703107f441c0189b3a5bf'
                        key: {
                            model: '77dd9d3f1da703107f441c0189b3a5b3'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '683121371de703107f441c0189b3a5d4'
                        key: {
                            model: '77dd9d3f1da703107f441c0189b3a5b3'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '690fead8cd3703107f44c0edd2feb044'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_610fead8cd3703107f44c0edd2feb035'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69b45b45642703107f44370f5ab049fa'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                            value: 'waiting'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '69d669bf1de703107f441c0189b3a5d1'
                        key: {
                            id: '91d669bf1de703107f441c0189b3a5ad'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ade26d8cd3703107f44c0edd2feb0cf'
                        key: {
                            name: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6bf39305642703107f44370f5ab04947'
                        key: {
                            sys_security_acl: '27f39305642703107f44370f5ab0493e'
                            sys_user_role: {
                                id: 'b2f31305642703107f44370f5ab04989'
                                key: {
                                    name: 'x_snc_queuesmart.queue_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6c76cf0964a303107f44370f5ab04968'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6d7539bb1d6b03107f441c0189b3a5c5'
                        key: {
                            document_key: '1d7539bb1d6b03107f441c0189b3a55b'
                            variable: '657539bb1d6b03107f441c0189b3a5b1'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '6d7539bb1d6b03107f441c0189b3a5c7'
                        key: {
                            action_type_id: '1d7539bb1d6b03107f441c0189b3a55b'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '6d7bb5b71dab03107f441c0189b3a5ba'
                        key: {
                            model: 'a17bb5b71dab03107f441c0189b3a5b0'
                            element: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6db4db45642703107f44370f5ab04971'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                            value: 'called'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dd669bf1de703107f441c0189b3a5c9'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_91d669bf1de703107f441c0189b3a5ad'
                            element: 'is_expired'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '6e5a6714cd7f03107f44c0edd2feb0ee'
                        key: {
                            model: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e66d56ed0cb4a5793f62159569dd824'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6ebfd7787ca703107f44c9469eb959fa'
                        key: {
                            list_id: {
                                id: '26bfd7787ca703107f44c9469eb959f9'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'service_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6ede26d8cd3703107f44c0edd2feb0a1'
                        key: {
                            id: '1ade26d8cd3703107f44c0edd2feb078'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6fc11bf079ab42bf8cf01301ee49db37'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '703121371de703107f441c0189b3a5e5'
                        key: {
                            id: '77dd9d3f1da703107f441c0189b3a5b3'
                            table: 'var__m_sys_hub_action_output_77dd9d3f1da703107f441c0189b3a5b3'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '710fead8cd3703107f44c0edd2feb051'
                        key: {
                            id: '610fead8cd3703107f44c0edd2feb035'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '710fead8cd3703107f44c0edd2feb05a'
                        key: {
                            name: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '710fead8cd3703107f44c0edd2feb07e'
                        key: {
                            name: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '710fead8cd3703107f44c0edd2feb085'
                        key: {
                            id: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            table: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71421b62723747348db0e4f4392b25e0'
                        key: {
                            name: 'x_snc_queuesmart_available___busy___offline'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7163080d7cab03107f44c9469eb9592e'
                        key: {
                            list_id: {
                                id: 'b163080d7cab03107f44c9469eb9592c'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '717bb5b71dab03107f441c0189b3a5ef'
                        key: {
                            model: 'ebf9f5f31dab03107f441c0189b3a596'
                            element: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '725aa714cd7f03107f44c0edd2feb020'
                        key: {
                            document_key: 'e65aa714cd7f03107f44c0edd2feb008'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '725aa714cd7f03107f44c0edd2feb05a'
                        key: {
                            id: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            table: 'var__m_sys_hub_action_output_2a5a6714cd7f03107f44c0edd2feb0eb'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '725aa714cd7f03107f44c0edd2feb05b'
                        key: {
                            document_key: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            variable: 'ba5aa714cd7f03107f44c0edd2feb023'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73146182f1764b55b2f5afd1c570eee3'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'counter'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '73157d7b1d6b03107f441c0189b3a537'
                        key: {
                            model: '6b157d7b1d6b03107f441c0189b3a531'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '739b3db71dab03107f441c0189b3a5c5'
                        key: {
                            name: 'var__m_sys_hub_action_input_ff9b3db71dab03107f441c0189b3a5ae'
                            element: 'queue_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '73f39305642703107f44370f5ab0499f'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '750fead8cd3703107f44c0edd2feb051'
                        key: {
                            id: '610fead8cd3703107f44c0edd2feb035'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7563080d7cab03107f44c9469eb9592d'
                        key: {
                            list_id: {
                                id: 'b163080d7cab03107f44c9469eb9592c'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'counter_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '765aa714cd7f03107f44c0edd2feb01f'
                        key: {
                            id: 'e65aa714cd7f03107f44c0edd2feb008'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '765aa714cd7f03107f44c0edd2feb05c'
                        key: {
                            action_type_id: '2a5a6714cd7f03107f44c0edd2feb0eb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77157d7b1d6b03107f441c0189b3a542'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_6b157d7b1d6b03107f441c0189b3a531'
                            element: 'last_queue_position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '771c67068d804b03be61d667b3c20aa8'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'counter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7757d500c87303107f44f3136bd8bb2c'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'actual_service_time'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '77e6bb5ccdbf03107f44c0edd2feb090'
                        key: {
                            model: 'e7e6bb5ccdbf03107f44c0edd2feb06e'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '784b08eda27b46efa8fcb4af9a3cce7b'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '790fead8cd3703107f44c0edd2feb064'
                        key: {
                            model: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '79378b8964a303107f44370f5ab04945'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'availability'
                            value: 'busy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '797bb5b71dab03107f441c0189b3a5c9'
                        key: {
                            document_key: 'a17bb5b71dab03107f441c0189b3a5b0'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '797bf5b71dab03107f441c0189b3a51e'
                        key: {
                            id: 'ebf9f5f31dab03107f441c0189b3a596'
                            table: 'var__m_sys_hub_action_output_ebf9f5f31dab03107f441c0189b3a596'
                            field: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7a388b0d64a303107f44370f5ab049db'
                        key: {
                            list_id: {
                                id: 'b2388b0d64a303107f44370f5ab049d9'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'staff_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7a5aa714cd7f03107f44c0edd2feb01f'
                        key: {
                            id: 'e65aa714cd7f03107f44c0edd2feb008'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7a5aa714cd7f03107f44c0edd2feb05a'
                        key: {
                            document_key: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            variable: 'f65aa714cd7f03107f44c0edd2feb036'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b11d0c5b88e49ea926bca6e02ec884e'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7b157d7b1d6b03107f441c0189b3a54c'
                        key: {
                            id: '6b157d7b1d6b03107f441c0189b3a531'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7b157d7b1d6b03107f441c0189b3a54d'
                        key: {
                            document_key: '6b157d7b1d6b03107f441c0189b3a531'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7b57d500c87303107f44f3136bd8bb2a'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'workplace'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bb6a6c6413641fdbb3669124e479113'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'response_window_until'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bb72bfcf5934d429cb8b180593002e5'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'student'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bfe84ae2e96458e965a09db03b6094f'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c8dc8953acc4d70926f73705d9f0702'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'queue_position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7d0fead8cd3703107f44c0edd2feb051'
                        key: {
                            document_key: '610fead8cd3703107f44c0edd2feb035'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '7d0fead8cd3703107f44c0edd2feb05b'
                        key: {
                            model: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d0fead8cd3703107f44c0edd2feb062'
                        key: {
                            name: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d297d162ff5421399ea86c54f161e5e'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'availability'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7e34ab707ce703107f44c9469eb9598a'
                        key: {
                            name: 'x_snc_queuesmart.counter_user'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7e388b0d64a303107f44370f5ab049da'
                        key: {
                            list_id: {
                                id: 'b2388b0d64a303107f44370f5ab049d9'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'availability'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e5aa714cd7f03107f44c0edd2feb017'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_e65aa714cd7f03107f44c0edd2feb008'
                            element: 'is_called'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7e5aa714cd7f03107f44c0edd2feb05a'
                        key: {
                            document_key: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            variable: '365aa714cd7f03107f44c0edd2feb03f'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ea04d8da73348359ca2d9a507065030'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'student'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7f157d7b1d6b03107f441c0189b3a54b'
                        key: {
                            id: '6b157d7b1d6b03107f441c0189b3a531'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7f57d500c87303107f44f3136bd8bb28'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'queue_position'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7f57d500c87303107f44f3136bd8bb3b'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'rejoin_count'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7f668f0964a303107f44370f5ab049b5'
                        key: {
                            sys_security_acl: '2b668f0964a303107f44370f5ab049a5'
                            sys_user_role: {
                                id: '9f664f0964a303107f44370f5ab0495e'
                                key: {
                                    name: 'x_snc_queuesmart.staff_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '804463b07ce703107f44c9469eb959b5'
                        key: {
                            sys_security_acl: 'c04463b07ce703107f44c9469eb959a0'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80487731cbe449ddac16cea1c949774d'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'actual_start_time'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8076cf0964a303107f44370f5ab04901'
                        key: {
                            sys_security_acl: '0c768f0964a303107f44370f5ab049f7'
                            sys_user_role: {
                                id: '9f664f0964a303107f44370f5ab0495e'
                                key: {
                                    name: 'x_snc_queuesmart.staff_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '80ab3db71dab03107f441c0189b3a5e1'
                        key: {
                            id: 'b39b3db71dab03107f441c0189b3a5cc'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80ab3db71dab03107f441c0189b3a5f9'
                        key: {
                            name: 'var__m_sys_hub_action_output_ff9b3db71dab03107f441c0189b3a5ae'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '81a67564cd3383107f44c0edd2feb0d7'
                        key: {
                            model: '1e663d24cd3383107f44c0edd2feb0bb'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '81a67564cd3383107f44c0edd2feb0e1'
                        key: {
                            model: '1e663d24cd3383107f44c0edd2feb0bb'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82de26d8cd3703107f44c0edd2feb048'
                        key: {
                            name: 'var__m_sys_hub_action_input_adabe214cd3703107f44c0edd2feb0f7'
                            element: 'queue_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '833423b07ce703107f44c9469eb95911'
                        key: {
                            name: 'x_snc_queuesmart_available___busy___offline'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '83ac5bf07ca703107f44c9469eb95933'
                        key: {
                            name: 'x_snc_queuesmart_service'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '84257d7b1d6b03107f441c0189b3a5ee'
                        key: {
                            document_key: 'c843f5b71d6b03107f441c0189b3a518'
                            variable: '33157d7b1d6b03107f441c0189b3a59d'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '84ab3db71dab03107f441c0189b3a5e1'
                        key: {
                            id: 'b39b3db71dab03107f441c0189b3a5cc'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '8506f240c8bf03107f44f3136bd8bb3b'
                        key: {
                            model: '4106f240c8bf03107f44f3136bd8bb1e'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8559577c7c6703107f44c9469eb959ac'
                        key: {
                            sys_ui_section: {
                                id: 'f459577c7c6703107f44c9469eb9599f'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '855a2714cd7f03107f44c0edd2feb0bd'
                        key: {
                            model: 'cd5a2714cd7f03107f44c0edd2feb0b7'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8763080d7cab03107f44c9469eb959e0'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8763080d7cab03107f44c9469eb959e1'
                        key: {
                            sys_ui_section: {
                                id: '4f63080d7cab03107f44c9469eb959d6'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'counter_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '87dfd15021504f1fa0a2112519f2746b'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8876cf0964a303107f44370f5ab04916'
                        key: {
                            sys_security_acl: '8476cf0964a303107f44370f5ab0490d'
                            sys_user_role: {
                                id: '9f664f0964a303107f44370f5ab0495e'
                                key: {
                                    name: 'x_snc_queuesmart.staff_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '895a6314cd7f03107f44c0edd2feb086'
                        key: {
                            model: 'cc996f90cd7f03107f44c0edd2feb03f'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a48189a60c641cf89eeed796e439f29'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '8c257d7b1d6b03107f441c0189b3a5ef'
                        key: {
                            action_type_id: 'c843f5b71d6b03107f441c0189b3a518'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8cab3db71dab03107f441c0189b3a5e1'
                        key: {
                            document_key: 'b39b3db71dab03107f441c0189b3a5cc'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '8cab3db71dab03107f441c0189b3a5f1'
                        key: {
                            model: 'ff9b3db71dab03107f441c0189b3a5ae'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8cab7db71dab03107f441c0189b3a500'
                        key: {
                            document_key: 'ff9b3db71dab03107f441c0189b3a5ae'
                            variable: '00ab3db71dab03107f441c0189b3a5ec'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8cd629bf1de703107f441c0189b3a577'
                        key: {
                            id: '77dd9d3f1da703107f441c0189b3a5b3'
                            table: 'var__m_sys_hub_action_output_77dd9d3f1da703107f441c0189b3a5b3'
                            field: 'is_expired'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '8d402ce8cdf343107f44c0edd2feb08e'
                        key: {
                            model: '47df98a8cdf343107f44c0edd2feb0a6'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '8d402ce8cdf343107f44c0edd2feb099'
                        key: {
                            model: '47df98a8cdf343107f44c0edd2feb0a6'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8daa716ccd3383107f44c0edd2feb082'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f8aa716ccd3383107f44c0edd2feb060'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '8dba5e08c8bb03107f44f3136bd8bbb1'
                        key: {
                            model: 'f4ba5e08c8bb03107f44f3136bd8bb91'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f4c65c8c8f303107f44f3136bd8bb8b'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f22ce988c8f303107f44f3136bd8bb2e'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9044a3b07ce703107f44c9469eb9592f'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '915a2714cd7f03107f44c0edd2feb0ef'
                        key: {
                            document_key: 'cd5a2714cd7f03107f44c0edd2feb0b7'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '915a6714cd7f03107f44c0edd2feb019'
                        key: {
                            document_key: 'cc996f90cd7f03107f44c0edd2feb03f'
                            variable: '955a2714cd7f03107f44c0edd2feb0fd'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '916aed771d2b03107f441c0189b3a5df'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                            value: 'missed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '91fab281646303107f44370f5ab04984'
                        key: {
                            list_id: {
                                id: '49fab281646303107f44370f5ab04981'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    view: '09f22e33292103107f44f3a98c182477'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '922ef6eba07a460f930772e3428b7efe'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '933ca987cb6a4909b56d5f205774b6a5'
                        key: {
                            application_file: '40bb0fe1c64c4a289ce95810550e73be'
                            source_artifact: 'a18bd1fe0d8f410bbc75561586ba29b8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93f9e0fd46a84266892d85b8c3ce4762'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'average_service_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '943121371de703107f441c0189b3a590'
                        key: {
                            model: 'd83121371de703107f441c0189b3a589'
                            element: 'response_window_until'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9543613b1de703107f441c0189b3a532'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_d83121371de703107f441c0189b3a589'
                            element: 'is_expired'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '955a2714cd7f03107f44c0edd2feb0f1'
                        key: {
                            id: 'cd5a2714cd7f03107f44c0edd2feb0b7'
                            table: 'var__m_sys_hub_step_ext_input_cd5a2714cd7f03107f44c0edd2feb0b7'
                            field: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '955a2714cd7f03107f44c0edd2feb0fd'
                        key: {
                            model: 'cc996f90cd7f03107f44c0edd2feb03f'
                            element: 'is_called'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '955a6714cd7f03107f44c0edd2feb006'
                        key: {
                            name: 'var__m_sys_hub_action_output_cc996f90cd7f03107f44c0edd2feb03f'
                            element: 'is_called'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '957539bb1d6b03107f441c0189b3a565'
                        key: {
                            name: 'var__m_sys_hub_action_input_1d7539bb1d6b03107f441c0189b3a55b'
                            element: 'service'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '95b717b87c6703107f44c9469eb9590a'
                        key: {
                            sys_security_acl: '09b7d3b87c6703107f44c9469eb959fa'
                            sys_user_role: {
                                id: '20b79f787c6703107f44c9469eb95908'
                                key: {
                                    name: 'x_snc_queuesmart.workplace_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '96de26d8cd3703107f44c0edd2feb092'
                        key: {
                            model: '1ade26d8cd3703107f44c0edd2feb078'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '973423b07ce703107f44c9469eb95941'
                        key: {
                            sys_security_acl: '5f3423b07ce703107f44c9469eb95937'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '9897eadfc7a54d60a644d9ed57dd00a6'
                        key: {
                            application_file: '3c8586e0ca0944c897647ef2464df723'
                            source_artifact: 'a18bd1fe0d8f410bbc75561586ba29b8'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '997539bb1d6b03107f441c0189b3a582'
                        key: {
                            model: 'd57539bb1d6b03107f441c0189b3a56c'
                            element: 'last_queue_position'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '99861b89642703107f44370f5ab049db'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            view: {
                                id: '09f22e33292103107f44f3a98c182477'
                                key: {
                                    name: 'sys_ref_list'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '99b3c0897cab03107f44c9469eb9591f'
                        key: {
                            list_id: {
                                id: '5db3c0897cab03107f44c9469eb9591e'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    view: '09f22e33292103107f44f3a98c182477'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'service_name'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '9b541345642703107f44370f5ab04944'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9dde45b5d40b4d43a9b33a153dbdab4a'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '9f664f0964a303107f44370f5ab0495e'
                        key: {
                            name: 'x_snc_queuesmart.staff_user'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a03121371de703107f441c0189b3a5b8'
                        key: {
                            id: 'd83121371de703107f441c0189b3a589'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a12cfa54cdb703107f44c0edd2feb01d'
                        key: {
                            name: 'var__m_sys_hub_flow_input_c91cf654cdb703107f44c0edd2feb0b9'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a17539bb1d6b03107f441c0189b3a58e'
                        key: {
                            document_key: 'd57539bb1d6b03107f441c0189b3a56c'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a17539bb1d6b03107f441c0189b3a5c6'
                        key: {
                            document_key: '1d7539bb1d6b03107f441c0189b3a55b'
                            variable: '217539bb1d6b03107f441c0189b3a5b7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a17bb5b71dab03107f441c0189b3a593'
                        key: {
                            name: 'var__m_sys_hub_action_input_ebf9f5f31dab03107f441c0189b3a596'
                            element: 'queue_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: 'a18bd1fe0d8f410bbc75561586ba29b8'
                        key: {
                            name: 'x_snc_queuesmart_student.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a18c86ddfd514144838063d073382c4c'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a1b4db45642703107f44370f5ab04973'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                            value: 'serving'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'a24c25c8c8f303107f44f3136bd8bbe6'
                        key: {
                            model: 'f22ce988c8f303107f44f3136bd8bb2e'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a2de26d8cd3703107f44c0edd2feb0df'
                        key: {
                            id: 'adabe214cd3703107f44c0edd2feb0f7'
                            table: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'a321335714e703107f4429fa46ff66eb'
                        key: {
                            model: '2721335714e703107f4429fa46ff66dc'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a321735714e703107f4429fa46ff6602'
                        key: {
                            name: 'var__m_sys_hub_flow_input_2721335714e703107f4429fa46ff66dc'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a3f8d7cd642703107f44370f5ab049eb'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a3f8d7cd642703107f44370f5ab049ee'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'actual_end_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a44d754b7dc34d7d878511ce33494e48'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'arrival_time'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a46cbe05646303107f44370f5ab0493f'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'status'
                            value: 'available'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'a50fead8cd3703107f44c0edd2feb046'
                        key: {
                            model: '610fead8cd3703107f44c0edd2feb035'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a51e7a58cdb703107f44c0edd2feb017'
                        key: {
                            name: 'var__m_sys_hub_flow_input_291e7a58cdb703107f44c0edd2feb009'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'a5291f3c7c6703107f44c9469eb95990'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a57539bb1d6b03107f441c0189b3a58f'
                        key: {
                            id: 'd57539bb1d6b03107f441c0189b3a56c'
                            table: 'var__m_sys_hub_step_ext_input_d57539bb1d6b03107f441c0189b3a56c'
                            field: 'service'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6de26d8cd3703107f44c0edd2feb0c5'
                        key: {
                            name: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a6de26d8cd3703107f44c0edd2feb0de'
                        key: {
                            id: 'adabe214cd3703107f44c0edd2feb0f7'
                            table: 'var__m_sys_hub_action_output_adabe214cd3703107f44c0edd2feb0f7'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a73423b07ce703107f44c9469eb959a2'
                        key: {
                            name: 'x_snc_queuesmart_available___busy___offline'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7809a84ad1d420dab72ced834c2b624'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'a7f8d7cd642703107f44370f5ab049ea'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a7f8d7cd642703107f44370f5ab049ed'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a807e0a4cd7743107f44c0edd2feb094'
                        key: {
                            name: 'var__m_sys_hub_flow_input_3dd66824cd7743107f44c0edd2feb0d7'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a83121371de703107f441c0189b3a5c6'
                        key: {
                            name: 'var__m_sys_hub_action_output_77dd9d3f1da703107f441c0189b3a5b3'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'a91e7a58cdb703107f44c0edd2feb00b'
                        key: {
                            model: '291e7a58cdb703107f44c0edd2feb009'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a97539bb1d6b03107f441c0189b3a5af'
                        key: {
                            name: 'var__m_sys_hub_action_output_1d7539bb1d6b03107f441c0189b3a55b'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a97539bb1d6b03107f441c0189b3a5c5'
                        key: {
                            id: '1d7539bb1d6b03107f441c0189b3a55b'
                            table: 'var__m_sys_hub_action_output_1d7539bb1d6b03107f441c0189b3a55b'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'aa15e86ccd3743107f44c0edd2feb07e'
                        key: {
                            model: 'e615e86ccd3743107f44c0edd2feb007'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aade26d8cd3703107f44c0edd2feb0df'
                        key: {
                            document_key: 'adabe214cd3703107f44c0edd2feb0f7'
                            variable: 'eade26d8cd3703107f44c0edd2feb0bc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab6db575768343f2b2114a637156b6e9'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'abf8d7cd642703107f44370f5ab049ec'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'student'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'ac07e0a4cd7743107f44c0edd2feb08d'
                        key: {
                            model: '3dd66824cd7743107f44c0edd2feb0d7'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ac3121371de703107f441c0189b3a5bb'
                        key: {
                            id: 'd83121371de703107f441c0189b3a589'
                            table: 'var__m_sys_hub_step_ext_input_d83121371de703107f441c0189b3a589'
                            field: 'response_window_until'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ad7539bb1d6b03107f441c0189b3a5c4'
                        key: {
                            id: '1d7539bb1d6b03107f441c0189b3a55b'
                            table: 'var__m_sys_hub_action_output_1d7539bb1d6b03107f441c0189b3a55b'
                            field: 'last_queue_position'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'adb717b87c6703107f44c9469eb95960'
                        key: {
                            sys_security_acl: '65b717b87c6703107f44c9469eb95932'
                            sys_user_role: {
                                id: '20b79f787c6703107f44c9469eb95908'
                                key: {
                                    name: 'x_snc_queuesmart.workplace_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae7a495307b14100977601826c76a9cb'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'average_service_time'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'aff8d7cd642703107f44370f5ab049eb'
                        key: {
                            list_id: {
                                id: 'a7f8d7cd642703107f44370f5ab049ea'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'staff'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'b00974ff1d2303107f441c0189b3a50c'
                        key: {
                            model: '46a874bf1d2303107f441c0189b3a5fb'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b099139336e8464fb7f54d2239bc46cd'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0e59edbcf694b59b85912fa21b79326'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b1374b8964a303107f44370f5ab049f9'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'availability'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'b163080d7cab03107f44c9469eb9592c'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b17bb5b71dab03107f441c0189b3a5ca'
                        key: {
                            document_key: 'a17bb5b71dab03107f441c0189b3a5b0'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b17bf5b71dab03107f441c0189b3a51f'
                        key: {
                            document_key: 'ebf9f5f31dab03107f441c0189b3a596'
                            variable: '397bf5b71dab03107f441c0189b3a50e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b215e86ccd3743107f44c0edd2feb085'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e615e86ccd3743107f44c0edd2feb007'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'b2388b0d64a303107f44370f5ab049d9'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'b2de26d8cd3703107f44c0edd2feb0e2'
                        key: {
                            action_type_id: 'adabe214cd3703107f44c0edd2feb0f7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2e3f5732d04495e8c998bd246f6ec85'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'staff_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b2f31305642703107f44370f5ab04989'
                        key: {
                            name: 'x_snc_queuesmart.queue_user'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'b3157d7b1d6b03107f441c0189b3a53d'
                        key: {
                            model: '6b157d7b1d6b03107f441c0189b3a531'
                            element: 'last_queue_position'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b357d500c87303107f44f3136bd8bb2a'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'student'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3659fe86a79435293ab65d0d9f329c4'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b50fead8cd3703107f44c0edd2feb085'
                        key: {
                            id: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            table: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b57bb5b71dab03107f441c0189b3a5c9'
                        key: {
                            id: 'a17bb5b71dab03107f441c0189b3a5b0'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b65aa714cd7f03107f44c0edd2feb05a'
                        key: {
                            id: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            table: 'var__m_sys_hub_action_output_2a5a6714cd7f03107f44c0edd2feb0eb'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b757d500c87303107f44f3136bd8bb28'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'counter'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b757d500c87303107f44f3136bd8bb3b'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'missed_time'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b7e688b3dcc84db0aca16fe8b9ea0eae'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_queue'
                            col_name_string: 'staff'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b80974ff1d2303107f441c0189b3a507'
                        key: {
                            name: 'var__m_sys_hub_flow_input_46a874bf1d2303107f441c0189b3a5fb'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b80c363c2b1e4eed84b685ca6c8d2c9a'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_staff'
                            col_name_string: 'counter'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b83121371de703107f441c0189b3a5e5'
                        key: {
                            document_key: '77dd9d3f1da703107f441c0189b3a5b3'
                            variable: '683121371de703107f441c0189b3a5d4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9374b8964a303107f44370f5ab049f8'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'availability'
                            value: 'available'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b97bb5b71dab03107f441c0189b3a5c8'
                        key: {
                            id: 'a17bb5b71dab03107f441c0189b3a5b0'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b97bf5b71dab03107f441c0189b3a50c'
                        key: {
                            name: 'var__m_sys_hub_action_output_ebf9f5f31dab03107f441c0189b3a596'
                            element: 'estimated_wait_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9aab1146a9b48dbb5b3b2d80c40a534'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'response_window_until'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba15e86ccd3743107f44c0edd2feb08f'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e615e86ccd3743107f44c0edd2feb007'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ba5aa714cd7f03107f44c0edd2feb023'
                        key: {
                            model: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb3463b07ce703107f44c9469eb95995'
                        key: {
                            sys_security_acl: 'b33463b07ce703107f44c9469eb9598d'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bb57d500c87303107f44f3136bd8bb2d'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'bb674199e331493c918937ed50834157'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_queue'
                            col_name_string: 'workplace'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be5aa714cd7f03107f44c0edd2feb052'
                        key: {
                            name: 'var__m_sys_hub_action_output_2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'beac9455b01d4fd5af6db3eb05004e8d'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_service'
                            col_name_string: 'workplace'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'bf157d7b1d6b03107f441c0189b3a5a4'
                        key: {
                            model: 'c843f5b71d6b03107f441c0189b3a518'
                            element: 'last_queue_position'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf157d7b1d6b03107f441c0189b3a5ce'
                        key: {
                            name: 'var__m_sys_hub_action_output_c843f5b71d6b03107f441c0189b3a518'
                            element: 'last_queue_position'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf57d500c87303107f44f3136bd8bb27'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf57d500c87303107f44f3136bd8bb2b'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'actual_start_time'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'bfbf1b787ca703107f44c9469eb959ae'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bfe6bb5ccdbf03107f44c0edd2feb096'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e7e6bb5ccdbf03107f44c0edd2feb06e'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c0257d7b1d6b03107f441c0189b3a5ed'
                        key: {
                            id: 'c843f5b71d6b03107f441c0189b3a518'
                            table: 'var__m_sys_hub_action_output_c843f5b71d6b03107f441c0189b3a518'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0ab3db71dab03107f441c0189b3a5f0'
                        key: {
                            name: 'var__m_sys_hub_action_output_ff9b3db71dab03107f441c0189b3a5ae'
                            element: 'estimated_wait_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c0ab7db71dab03107f441c0189b3a501'
                        key: {
                            document_key: 'ff9b3db71dab03107f441c0189b3a5ae'
                            variable: '8cab3db71dab03107f441c0189b3a5f1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1aa716ccd3383107f44c0edd2feb079'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f8aa716ccd3383107f44c0edd2feb060'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'c34c65c8c8f303107f44f3136bd8bb90'
                        key: {
                            model: 'f22ce988c8f303107f44f3136bd8bb2e'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c3f6c38964a303107f44370f5ab04987'
                        key: {
                            sys_ui_section: {
                                id: 'cff6c74964a303107f44370f5ab04936'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'availability'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c3f6c38964a303107f44370f5ab04988'
                        key: {
                            sys_ui_section: {
                                id: 'cff6c74964a303107f44370f5ab04936'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c3f6c38964a303107f44370f5ab04989'
                        key: {
                            sys_ui_section: {
                                id: 'cff6c74964a303107f44370f5ab04936'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'staff_name'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c52b741a74fc42eab70025d17784fda4'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'workplace'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5402ce8cdf343107f44c0edd2feb095'
                        key: {
                            name: 'var__m_sys_hub_flow_input_47df98a8cdf343107f44c0edd2feb0a6'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c55a2714cd7f03107f44c0edd2feb0e4'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_cd5a2714cd7f03107f44c0edd2feb0b7'
                            element: 'is_called'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5a67564cd3383107f44c0edd2feb0e7'
                        key: {
                            name: 'var__m_sys_hub_flow_input_1e663d24cd3383107f44c0edd2feb0bb'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c5d3dfbcd5ad40bca0333f59891c3c6c'
                        key: {
                            logical_table_name: 'x_snc_queuesmart_queue'
                            col_name_string: 'student'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'c710456ccd7b43107f44c0edd2feb075'
                        key: {
                            model: 'c710456ccd7b43107f44c0edd2feb04a'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c8a587c564a303107f44370f5ab0499f'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c8ab7db71dab03107f441c0189b3a500'
                        key: {
                            id: 'ff9b3db71dab03107f441c0189b3a5ae'
                            table: 'var__m_sys_hub_action_output_ff9b3db71dab03107f441c0189b3a5ae'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9402ce8cdf343107f44c0edd2feb089'
                        key: {
                            name: 'var__m_sys_hub_flow_input_47df98a8cdf343107f44c0edd2feb0a6'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c95a2714cd7f03107f44c0edd2feb06d'
                        key: {
                            name: 'var__m_sys_hub_action_input_cc996f90cd7f03107f44c0edd2feb03f'
                            element: 'queue_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'c9a67564cd3383107f44c0edd2feb09d'
                        key: {
                            model: '1e663d24cd3383107f44c0edd2feb0bb'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9ba5e08c8bb03107f44f3136bd8bbc2'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f4ba5e08c8bb03107f44f3136bd8bb91'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb10456ccd7b43107f44c0edd2feb07b'
                        key: {
                            name: 'var__m_sys_hub_flow_input_c710456ccd7b43107f44c0edd2feb04a'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cbf6c38964a303107f44370f5ab04986'
                        key: {
                            sys_ui_section: {
                                id: 'cff6c74964a303107f44370f5ab04936'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'counter'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cbf6c38964a303107f44370f5ab04987'
                        key: {
                            sys_ui_section: {
                                id: 'cff6c74964a303107f44370f5ab04936'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cbf6c38964a303107f44370f5ab04988'
                        key: {
                            sys_ui_section: {
                                id: 'cff6c74964a303107f44370f5ab04936'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ccab3db71dab03107f441c0189b3a5ff'
                        key: {
                            id: 'ff9b3db71dab03107f441c0189b3a5ae'
                            table: 'var__m_sys_hub_action_output_ff9b3db71dab03107f441c0189b3a5ae'
                            field: 'estimated_wait_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cd59577c7c6703107f44c9469eb959ac'
                        key: {
                            sys_ui_section: {
                                id: 'f459577c7c6703107f44c9469eb9599f'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'code'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cdad99fef98549a484a4bbfd2661a412'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce23496203c84fa7823a61b44f2ab3c6'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'cff6c74964a303107f44370f5ab04936'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd087a9ef39a6415a8798633522a69e1c'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd15a2714cd7f03107f44c0edd2feb0ee'
                        key: {
                            id: 'cd5a2714cd7f03107f44c0edd2feb0b7'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd15a6714cd7f03107f44c0edd2feb018'
                        key: {
                            id: 'cc996f90cd7f03107f44c0edd2feb03f'
                            table: 'var__m_sys_hub_action_output_cc996f90cd7f03107f44c0edd2feb03f'
                            field: 'is_called'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'd15a6714cd7f03107f44c0edd2feb01b'
                        key: {
                            action_type_id: 'cc996f90cd7f03107f44c0edd2feb03f'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd3cdea40c87f03107f44f3136bd8bb43'
                        key: {
                            name: 'var__m_sys_hub_flow_input_7f3da200c87f03107f44f3136bd8bb43'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'd55a6714cd7f03107f44c0edd2feb008'
                        key: {
                            model: 'cc996f90cd7f03107f44c0edd2feb03f'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd55a6714cd7f03107f44c0edd2feb019'
                        key: {
                            document_key: 'cc996f90cd7f03107f44c0edd2feb03f'
                            variable: 'd55a6714cd7f03107f44c0edd2feb008'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd5861b89642703107f44370f5ab049dc'
                        key: {
                            list_id: {
                                id: '99861b89642703107f44370f5ab049db'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    view: '09f22e33292103107f44f3a98c182477'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'staff_name'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'd7cdea40c87f03107f44f3136bd8bb3c'
                        key: {
                            model: '7f3da200c87f03107f44f3136bd8bb43'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'd807e0a4cd7743107f44c0edd2feb03e'
                        key: {
                            model: '3dd66824cd7743107f44c0edd2feb0d7'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'd83121371de703107f441c0189b3a54d'
                        key: {
                            model: '77dd9d3f1da703107f441c0189b3a5b3'
                            element: 'response_window_until'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'db3423b07ce703107f44c9469eb9592a'
                        key: {
                            sys_security_acl: 'd33423b07ce703107f44c9469eb95921'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'db3423b07ce703107f44c9469eb95963'
                        key: {
                            sys_security_acl: '133423b07ce703107f44c9469eb9594e'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'db3423b07ce703107f44c9469eb95978'
                        key: {
                            sys_security_acl: '9b3423b07ce703107f44c9469eb9596f'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'dd43613b1de703107f441c0189b3a529'
                        key: {
                            model: 'd83121371de703107f441c0189b3a589'
                            element: 'is_expired'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dd5a2714cd7f03107f44c0edd2feb0ee'
                        key: {
                            id: 'cd5a2714cd7f03107f44c0edd2feb0b7'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dd5a2714cd7f03107f44c0edd2feb0ef'
                        key: {
                            document_key: 'cd5a2714cd7f03107f44c0edd2feb0b7'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'dd5a2714cd7f03107f44c0edd2feb0f4'
                        key: {
                            model: 'cc996f90cd7f03107f44c0edd2feb03f'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dd5a6714cd7f03107f44c0edd2feb018'
                        key: {
                            id: 'cc996f90cd7f03107f44c0edd2feb03f'
                            table: 'var__m_sys_hub_action_output_cc996f90cd7f03107f44c0edd2feb03f'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ddfe5ff47ca703107f44c9469eb959f8'
                        key: {
                            sys_security_acl: '85fe5ff47ca703107f44c9469eb959ef'
                            sys_user_role: {
                                id: 'f4fe5ff47ca703107f44c9469eb95961'
                                key: {
                                    name: 'x_snc_queuesmart.service_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ddfe9ff47ca703107f44c9469eb9592f'
                        key: {
                            sys_security_acl: '5dfe9ff47ca703107f44c9469eb95926'
                            sys_user_role: {
                                id: 'f4fe5ff47ca703107f44c9469eb95961'
                                key: {
                                    name: 'x_snc_queuesmart.service_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de367d5cc91049e8a820ce1cc4db6c43'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'counter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df25f69f28b24a07b0ef5b40bd4883b4'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'e007e0a4cd7743107f44c0edd2feb076'
                        key: {
                            model: '3dd66824cd7743107f44c0edd2feb0d7'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e03bea55e9074d87a34da0b801b4bb5f'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'missed_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'e1d669bf1de703107f441c0189b3a5f8'
                        key: {
                            action_type_id: '1dd669bf1de703107f441c0189b3a59c'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e203480cd6564006a184bcab4af1a663'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e2bfd7787ca703107f44c9469eb959fb'
                        key: {
                            list_id: {
                                id: '26bfd7787ca703107f44c9469eb959f9'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'workplace'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e2de26d8cd3703107f44c0edd2feb0b4'
                        key: {
                            model: 'adabe214cd3703107f44c0edd2feb0f7'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e407e0a4cd7743107f44c0edd2feb089'
                        key: {
                            name: 'var__m_sys_hub_flow_input_3dd66824cd7743107f44c0edd2feb0d7'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e43121371de703107f441c0189b3a5b9'
                        key: {
                            document_key: 'd83121371de703107f441c0189b3a589'
                            variable: 'f5e56d79b3101300176b051a16a8dce4'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e4369f09642703107f44370f5ab04925'
                        key: {
                            category: 'x_snc_queuesmart_queue'
                            prefix: 'Q'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e46cbe05646303107f44370f5ab04941'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'status'
                            value: 'busy'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'e4b15a0cc83b03107f44f3136bd8bb94'
                        key: {
                            id: 'queuesmart_student_queue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5356aedab4741cd9818a3b80225e0bb'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'workplace'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e57539bb1d6b03107f441c0189b3a58e'
                        key: {
                            document_key: 'd57539bb1d6b03107f441c0189b3a56c'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e57539bb1d6b03107f441c0189b3a5c6'
                        key: {
                            document_key: '1d7539bb1d6b03107f441c0189b3a55b'
                            variable: 'ed7539bb1d6b03107f441c0189b3a591'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e5b4db45642703107f44370f5ab04974'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'status'
                            value: 'completed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e5d669bf1de703107f441c0189b3a5e6'
                        key: {
                            model: '1dd669bf1de703107f441c0189b3a59c'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e5fe9ff47ca703107f44c9469eb9596e'
                        key: {
                            name: 'x_snc_queuesmart_service'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e6bfd7787ca703107f44c9469eb959fa'
                        key: {
                            list_id: {
                                id: '26bfd7787ca703107f44c9469eb959f9'
                                key: {
                                    name: 'x_snc_queuesmart_service'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'average_service_time'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e6de26d8cd3703107f44c0edd2feb0b0'
                        key: {
                            id: '1ade26d8cd3703107f44c0edd2feb078'
                            table: 'var__m_sys_hub_step_ext_input_1ade26d8cd3703107f44c0edd2feb078'
                            field: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e753180473fe405e8957460dfae279b3'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e773df8ee0634a61b187aa3e57f0f6b7'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e83121371de703107f441c0189b3a5c8'
                        key: {
                            model: '77dd9d3f1da703107f441c0189b3a5b3'
                            element: 'is_expired'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e86cbe05646303107f44370f5ab0495b'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'status'
                            value: 'offline'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'e91e7a58cdb703107f44c0edd2feb01b'
                        key: {
                            model: '291e7a58cdb703107f44c0edd2feb009'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e9291f3c7c6703107f44c9469eb95991'
                        key: {
                            list_id: {
                                id: 'a5291f3c7c6703107f44c9469eb95990'
                                key: {
                                    name: 'x_snc_queuesmart_workplace'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'e92cfa54cdb703107f44c0edd2feb02e'
                        key: {
                            model: 'c91cf654cdb703107f44c0edd2feb0b9'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e97539bb1d6b03107f441c0189b3a58d'
                        key: {
                            id: 'd57539bb1d6b03107f441c0189b3a56c'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e9d669bf1de703107f441c0189b3a5e4'
                        key: {
                            name: 'var__m_sys_hub_action_output_1dd669bf1de703107f441c0189b3a59c'
                            element: 'is_expired'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e9d669bf1de703107f441c0189b3a5f5'
                        key: {
                            id: '1dd669bf1de703107f441c0189b3a59c'
                            table: 'var__m_sys_hub_action_output_1dd669bf1de703107f441c0189b3a59c'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea57e015494e4716930e8063738afe6e'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'missed_time'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'eade26d8cd3703107f44c0edd2feb0bc'
                        key: {
                            model: 'adabe214cd3703107f44c0edd2feb0f7'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'eb21335714e703107f4429fa46ff66fb'
                        key: {
                            model: '2721335714e703107f4429fa46ff66dc'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'ed0fead8cd3703107f44c0edd2feb03e'
                        key: {
                            model: '610fead8cd3703107f44c0edd2feb035'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ed7539bb1d6b03107f441c0189b3a58d'
                        key: {
                            id: 'd57539bb1d6b03107f441c0189b3a56c'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ed7539bb1d6b03107f441c0189b3a591'
                        key: {
                            model: '1d7539bb1d6b03107f441c0189b3a55b'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ee140c4d7cab03107f44c9469eb959f2'
                        key: {
                            name: 'x_snc_queuesmart_counter'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'ee1e5c5ce86b45429accb14d8c52de29'
                        key: {
                            name: 'x_snc_queuesmart/main.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eede26d8cd3703107f44c0edd2feb096'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_1ade26d8cd3703107f44c0edd2feb078'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eede26d8cd3703107f44c0edd2feb0df'
                        key: {
                            document_key: 'adabe214cd3703107f44c0edd2feb0f7'
                            variable: 'e2de26d8cd3703107f44c0edd2feb0b4'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'f009f0ff1d2303107f441c0189b3a5be'
                        key: {
                            model: '46a874bf1d2303107f441c0189b3a5fb'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f10fead8cd3703107f44c0edd2feb078'
                        key: {
                            name: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f10fead8cd3703107f44c0edd2feb086'
                        key: {
                            document_key: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            variable: '790fead8cd3703107f44c0edd2feb064'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'f10fead8cd3703107f44c0edd2feb088'
                        key: {
                            action_type_id: 'ad0faad8cd3703107f44c0edd2feb0fd'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'f12cfa54cdb703107f44c0edd2feb052'
                        key: {
                            model: 'c91cf654cdb703107f44c0edd2feb0b9'
                            element: 'changed_fields'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f17bb5b71dab03107f441c0189b3a5ed'
                        key: {
                            name: 'var__m_sys_hub_action_output_ebf9f5f31dab03107f441c0189b3a596'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f17bf5b71dab03107f441c0189b3a51e'
                        key: {
                            id: 'ebf9f5f31dab03107f441c0189b3a596'
                            table: 'var__m_sys_hub_action_output_ebf9f5f31dab03107f441c0189b3a596'
                            field: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: 'f17bf5b71dab03107f441c0189b3a521'
                        key: {
                            action_type_id: 'ebf9f5f31dab03107f441c0189b3a596'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f1b717b87c6703107f44c9469eb95976'
                        key: {
                            sys_security_acl: 'fdb717b87c6703107f44c9469eb9596c'
                            sys_user_role: {
                                id: '20b79f787c6703107f44c9469eb95908'
                                key: {
                                    name: 'x_snc_queuesmart.workplace_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f2388b0d64a303107f44370f5ab049da'
                        key: {
                            list_id: {
                                id: 'b2388b0d64a303107f44370f5ab049d9'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f2388b0d64a303107f44370f5ab049db'
                        key: {
                            list_id: {
                                id: 'b2388b0d64a303107f44370f5ab049d9'
                                key: {
                                    name: 'x_snc_queuesmart_staff'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'counter'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'f25aa714cd7f03107f44c0edd2feb012'
                        key: {
                            model: 'e65aa714cd7f03107f44c0edd2feb008'
                            element: 'is_called'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2c8a4bff8754f4a8a1cb383abe1dbce'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'counter'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f33423b07ce703107f44c9469eb959e4'
                        key: {
                            sys_security_acl: 'fb3423b07ce703107f44c9469eb959ce'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f357d500c87303107f44f3136bd8bb2d'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'actual_end_time'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'f3e6bb5ccdbf03107f44c0edd2feb09b'
                        key: {
                            model: 'e7e6bb5ccdbf03107f44c0edd2feb06e'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f43121371de703107f441c0189b3a5e5'
                        key: {
                            id: '77dd9d3f1da703107f441c0189b3a5b3'
                            table: 'var__m_sys_hub_action_output_77dd9d3f1da703107f441c0189b3a5b3'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f459577c7c6703107f44c9469eb9599f'
                        key: {
                            name: 'x_snc_queuesmart_workplace'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'f4aa716ccd3383107f44c0edd2feb062'
                        key: {
                            model: 'f8aa716ccd3383107f44c0edd2feb060'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f4fe5ff47ca703107f44c9469eb95961'
                        key: {
                            name: 'x_snc_queuesmart.service_user'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'f50fead8cd3703107f44c0edd2feb055'
                        key: {
                            model: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f563080d7cab03107f44c9469eb9592e'
                        key: {
                            list_id: {
                                id: 'b163080d7cab03107f44c9469eb9592c'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'workplace'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f57bb5b71dab03107f441c0189b3a5e4'
                        key: {
                            id: 'a17bb5b71dab03107f441c0189b3a5b0'
                            table: 'var__m_sys_hub_step_ext_input_a17bb5b71dab03107f441c0189b3a5b0'
                            field: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f57bf5b71dab03107f441c0189b3a51f'
                        key: {
                            document_key: 'ebf9f5f31dab03107f441c0189b3a596'
                            variable: '717bb5b71dab03107f441c0189b3a5ef'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'f615e86ccd3743107f44c0edd2feb089'
                        key: {
                            model: 'e615e86ccd3743107f44c0edd2feb007'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'f65aa714cd7f03107f44c0edd2feb036'
                        key: {
                            model: '2a5a6714cd7f03107f44c0edd2feb0eb'
                            element: 'is_called'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f757d500c87303107f44f3136bd8bb2b'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f768ba6a260f4a239433cec911c9f39f'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'actual_service_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8c7c674efe2470dbbb0852f57e0beb7'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'estimated_wait_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f90fead8cd3703107f44c0edd2feb052'
                        key: {
                            id: '610fead8cd3703107f44c0edd2feb035'
                            table: 'var__m_sys_hub_step_ext_input_610fead8cd3703107f44c0edd2feb035'
                            field: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f90fead8cd3703107f44c0edd2feb085'
                        key: {
                            id: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            table: 'var__m_sys_hub_action_output_ad0faad8cd3703107f44c0edd2feb0fd'
                            field: 'success'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f963080d7cab03107f44c9469eb9592d'
                        key: {
                            list_id: {
                                id: 'b163080d7cab03107f44c9469eb9592c'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'service'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'f97bb5b71dab03107f441c0189b3a5e7'
                        key: {
                            model: 'ebf9f5f31dab03107f441c0189b3a596'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa39cb00d4b54eba86a33ef7e954abf3'
                        key: {
                            name: 'x_snc_queuesmart_service'
                            element: 'workplace'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb157d7b1d6b03107f441c0189b3a5e5'
                        key: {
                            name: 'var__m_sys_hub_action_output_c843f5b71d6b03107f441c0189b3a518'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb2708b434564050a90b3131e2475265'
                        key: {
                            name: 'x_snc_queuesmart_queue'
                            element: 'staff'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb3463b07ce703107f44c9469eb9592a'
                        key: {
                            sys_security_acl: 'b33423b07ce703107f44c9469eb959f0'
                            sys_user_role: {
                                id: '7e34ab707ce703107f44c9469eb9598a'
                                key: {
                                    name: 'x_snc_queuesmart.counter_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fb57d500c87303107f44f3136bd8bb29'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'fb9b3db71dab03107f441c0189b3a5cf'
                        key: {
                            model: 'b39b3db71dab03107f441c0189b3a5cc'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb9b3db71dab03107f441c0189b3a5d9'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_b39b3db71dab03107f441c0189b3a5cc'
                            element: 'estimated_wait_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fc3121371de703107f441c0189b3a5e5'
                        key: {
                            document_key: '77dd9d3f1da703107f441c0189b3a5b3'
                            variable: '683121371de703107f441c0189b3a5bf'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'fcba5e08c8bb03107f44f3136bd8bb93'
                        key: {
                            model: 'f4ba5e08c8bb03107f44f3136bd8bb91'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'fd0fead8cd3703107f44c0edd2feb079'
                        key: {
                            model: 'ad0faad8cd3703107f44c0edd2feb0fd'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd2cfa54cdb703107f44c0edd2feb058'
                        key: {
                            name: 'var__m_sys_hub_flow_input_c91cf654cdb703107f44c0edd2feb0b9'
                            element: 'changed_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd378b8964a303107f44370f5ab04946'
                        key: {
                            name: 'x_snc_queuesmart_staff'
                            element: 'availability'
                            value: 'leave'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fd63080d7cab03107f44c9469eb9592c'
                        key: {
                            list_id: {
                                id: 'b163080d7cab03107f44c9469eb9592c'
                                key: {
                                    name: 'x_snc_queuesmart_counter'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd7bf5b71dab03107f441c0189b3a516'
                        key: {
                            name: 'var__m_sys_hub_action_output_ebf9f5f31dab03107f441c0189b3a596'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fd7bf5b71dab03107f441c0189b3a51e'
                        key: {
                            id: 'ebf9f5f31dab03107f441c0189b3a596'
                            table: 'var__m_sys_hub_action_output_ebf9f5f31dab03107f441c0189b3a596'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'fe5aa714cd7f03107f44c0edd2feb00b'
                        key: {
                            model: 'e65aa714cd7f03107f44c0edd2feb008'
                            element: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fe5aa714cd7f03107f44c0edd2feb020'
                        key: {
                            id: 'e65aa714cd7f03107f44c0edd2feb008'
                            table: 'var__m_sys_hub_step_ext_input_e65aa714cd7f03107f44c0edd2feb008'
                            field: 'queue_record'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ff57d500c87303107f44f3136bd8bb3a'
                        key: {
                            sys_ui_section: {
                                id: '9b541345642703107f44370f5ab04944'
                                key: {
                                    name: 'x_snc_queuesmart_queue'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'called_time'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffe6bb5ccdbf03107f44c0edd2feb0ad'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e7e6bb5ccdbf03107f44c0edd2feb06e'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
