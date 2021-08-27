/*
const util = require('./util')
let apiRequest = {
    "name": "APIRequestVolunteer",
    "arguments": {
        "date": "2021-08-26",
        "service": "help with tablet"
    },
    "slots": {
        "date": {
            "type": "Simple",
            "value": "2021-08-26"
        },
        "service": {
            "type": "Simple",
            "value": "help with tablet",
            "resolutions": {
                "resolutionsPerAuthority": [
                    {
                        "authority": "amzn1.er-authority.echo-sdk.amzn1.ask.skill.e5212077-3ccb-401a-93b6-bb5049d4e747.service",
                        "status": {
                            "code": "ER_SUCCESS_MATCH"
                        },
                        "values": [
                            {
                                "value": {
                                    "name": "digital",
                                    "id": "17403"
                                }
                            }
                        ]
                    },
                    {
                        "authority": "amzn1.er-authority.echo-sdk.dynamic.amzn1.ask.skill.e5212077-3ccb-401a-93b6-bb5049d4e747.service",
                        "status": {
                            "code": "ER_SUCCESS_NO_MATCH"
                        }
                    }
                ]
            }
        }
    }
}

console.log(util.getSlotValues(apiRequest.slots))
*/

const spintax = require('node-spintax')

const options = {
    syntax: {
    startSymbol: '[',
    endSymbol: ']',
    delimiter: '|'
}}

var spinner = new spintax('[|i want|i need|find me|find] [[a volunteer for|help with] something|help|a volunteer]', options);

spinner.unspin().forEach(e => console.log(e))