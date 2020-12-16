// const request = require('request')
const axios = require('axios')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }
const geocode = (address, callback) => {
    const url =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) + // pas necessaire, mais oui si "?"
        '.json?access_token=pk.eyJ1IjoidHJvZ25lIiwiYSI6ImNraWt0a2xpOTBkNWMyeW5hZmplbXUzZzgifQ.JI2cYmFut4ebaVCdmW5KEA&limit=1'

    axios(url)
        .then(({ data }) => {
            if (data.features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                callback(undefined, {
                    latitude: data.features[0].center[0],
                    longitude: data.features[0].center[1],
                    location: data.features[0].place_name,
                })
            }
        })
        .catch((error) => {
            callback('Unable to connect to location services!', undefined)
        })
}
module.exports = geocode

// .then((response) => {
// if (response.data.features.length === 0) {
// latitude: response.data.features[0].center[0],
// longitude: response.data.features[0].center[1],
// location: response.data.features[0].place_name,
