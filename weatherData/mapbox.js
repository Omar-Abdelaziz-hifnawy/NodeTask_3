// const request = require("request");

// const geocode = (address, callback) => {
    // const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw`;
//     request({ url: geocodeUrl, json: true }, (error, response) => {
//         if (error) {
//         callback(
//             "Error occurred while getting the location of address", undefined);
//         } else if (response.body.message) {
//         callback(`Error from geocode token ${response.body.message}`, undefined);
//         } else if (response.body.features.lenght == 0) {
//         callback("Address not found", undefined);
//         } else {
//         callback(undefined, {
//             latitude: response.body.features[0].center[1],
//             longtitude: response.body.features[0].center[0],
//         });
//         }
//     });
// };

// module.exports = geocode;


const request = require("request");

const geocode = (address, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw`;

    request({ url: geocodeUrl, json: true }, (error, response) => {
        if (error) {
            callback("Error occurred while getting the location of address", undefined);
        } else if (response.body.message) {
            callback(`Error from geocode token: ${response.body.message}, undefined`);
        } else if (response.body.features.length === 0) {
            callback("Address not found", undefined);
        } else {
            const latitude = response.body.features[0].center[1];
            const longitude = response.body.features[0].center[0];
            callback(undefined, { latitude, longitude });
        }
    });
};

module.exports = geocode;