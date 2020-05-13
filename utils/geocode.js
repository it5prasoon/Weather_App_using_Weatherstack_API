const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicHJhc29vbmswMDUiLCJhIjoiY2thM3liY2QyMG92dzNmcDBtd3B5aml4ZyJ9.T0vZocdWJvQYxwHMPSI8sQ'
    request({url: url, json: true}, (error,response) =>{
        if(error) {
            callback('Unable to Connect to location Services!', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search!', undefined)
        } else {
             callback(undefined, {
                 latitude: response.body.features[0].center[1],
                 longitude: response.body.features[0].center[0],
                 location: response.body.features[0].place_name
             })
        }
    })
}

module.exports = geocode