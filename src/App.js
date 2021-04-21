'use strict'
const whois = require('whois')

exports.handler = (event, context, callback) => {
    lookupAddress(event.address, response => {
        callback(null, response)
    })
}


export const lookupAddress = (address, callback) => {
    whois.lookup(address, (err, data) => {
        if (err) {
            callback("Failed to get data on address")
        }
        callback(processData(data))
    })
}
