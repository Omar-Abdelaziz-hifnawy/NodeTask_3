// const request = require("request");

// const weatherForecast = (latitude , longtitude , callback) => {
//     const weatherApi = `https://api.weatherapi.com/v1/current.json?key=dfc81ece8ea24d8ba7a181549231607&q=${latitude},${longtitude}`
//     request({url : weatherApi , json : true } , (error , response) => {
//         if (error) {
//             callback ('unable to connect weater service' , undefined)
//         } else if (response.body.error) {
//             callback (`Error from weather api token ${response.body.error.message}` , undefined)
//         } else {
//             callback (undefined , `You are in : ${response.body.location.name} , It's : ${response.body.current.condition.text} , and temp : ${response.body.current.temp_c}`)
//         }
//     })
// }

// module.exports = weatherForecast ;



const request = require("request");

const weatherForecast = (latitude, longtitude, callback) => {
    const weatherApi = "https://api.weatherapi.com/v1/current.json?key=dfc81ece8ea24d8ba7a181549231607&q="+ latitude + "," + longtitude
        request({ url: weatherApi, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect weather service', undefined);
        } else if (response.body.error) {
            callback(`Error from weather API Token: ${response.body.error.message}, undefined`)
        } else {
            const locationName = response.body.location.name;
            const conditionText = response.body.current.condition.text;
            const temperatureC = response.body.current.temp_c;
            const data = `You are in: ${locationName}, It's: ${conditionText}, and temp: ${temperatureC}`
            callback(undefined, data);
        }
    });
};

module.exports = weatherForecast;