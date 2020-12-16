// const request = require('request')
const axios = require('axios')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url: url, json: true }, (error, response) => {
//     request({ url, json: true }, (error, { body }) => { // shorthand syntax
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
////         } else if (response.body.error) {
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
////             callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }
const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lang=fr&lat=${latitude}&lon=${longitude}&appid=a83b689ca9c96ff1e0264a5919b7da0f`

    axios
        .get(url)
        // .then((response) => {
        .then(({ data }) => {
            // if (response.data.error) {
            if (data.error) {
                callback('Unable to find location', undefined)
            } else {
                // callback(undefined, response.data.weather[0].description + ' It is currently ' + response.data.main.temp + ' degress out. There is a ' + response.data.clouds.all + '% chance of rain.')
                callback(undefined, data.weather[0].description + ' It is currently ' + data.main.temp + ' degress out. There is a ' + data.clouds.all + '% chance of rain.')
            }
        })
        // .catch((error) => console.log('Unable to connect to weather service! --- ', error.response.data.message))
        .catch(({ response: { data: { message } } }) => console.log('Unable to connect to weather service! --- ', message))
}

module.exports = forecast
