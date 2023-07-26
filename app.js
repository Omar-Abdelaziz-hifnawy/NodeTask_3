// const request = require("request") ;
// const geocode = require('./weatherData/mapbox')
// const weatherApi = require('./weatherData/weatherApi')
// const address = process.argv[2]

// geocode(address , (error,data) => {
//     console.log('ERROR : ' , error )
//     console.log('DATA  : ' , data  )

//     if (data) {
//         weatherApi(data.latitude , data.longtitude , (error,data) => {
//             console.log('ERROR : ' , error )
//             console.log('DATA  : ' , data  )
//         })
//     } else (
//         console.log('the country is wrong')
//     )
// })


const geocode = require('./weatherData/mapbox');
const weatherApi = require('./weatherData/weatherApi');

const address = process.argv[2];

if (!address) {
    console.log("ERROR : Please provide an address.");
} else {
    geocode(address, (error, data) => {
        if (error) {
            console.log("ERROR: ", error);
        } else {
            console.log("DATA: ", data);
            weatherApi(data.latitude, data.longitude, (error, data) => {
                if (error) {
                    console.log("ERROR: ", error);
                } else {
                    console.log("DATA: ", data);
                }
            });
        }
    });
}
