export const schema = {
    "models": {
        "Itinerary": {
            "name": "Itinerary",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "isRoot": {
                    "name": "isRoot",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "start": {
                    "name": "start",
                    "isArray": false,
                    "type": {
                        "nonModel": "TimeLocation"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "end": {
                    "name": "end",
                    "isArray": false,
                    "type": {
                        "nonModel": "TimeLocation"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": {
                        "enum": "Code"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "parent": {
                    "name": "parent",
                    "isArray": false,
                    "type": {
                        "model": "Itinerary"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "parentID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Itineraries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byParent",
                        "fields": [
                            "parentID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Code": {
            "name": "Code",
            "values": [
                "FIXED",
                "FLEXIBLE",
                "TRANSIT"
            ]
        }
    },
    "nonModels": {
        "TimeLocation": {
            "name": "TimeLocation",
            "fields": {
                "time": {
                    "name": "time",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "fixed": {
                    "name": "fixed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lat": {
                    "name": "lat",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "long": {
                    "name": "long",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "radius": {
                    "name": "radius",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "b14c1e52ab5b19131ce56605e3263381"
};