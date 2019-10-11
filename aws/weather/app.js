const request = require('request');
let apiKey = '238ed647450a92fd70dfc2ea7009280a';
let city = 'Zaporizhzhya';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
// request(url, function(err, response, body) {
//     err && console.log(err);

//     //console.log('body:', JSON.stringify(body));
//     //console.log(`temperature ${body.main.temp}`);
//     let weather = JSON.parse(body);
//     let message = `It's ${weather.main.temp} degrees by °C in ${weather.name}!`;
//     console.log(message);

// });
const request = require('request');
let apiKey = '';
let city = 'Zaporizhzhya';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
var temp = '11111';
exports.handler = async (event) => {
     request(url, function(err,response,body) {
        err && console.log(err);
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in °C in ${weather.name}!`;
        console.log(body);
        console.log(weather);
        console.log(message);
        temp = message;
        
    });
    // const response = {
    //     statusCode: 200,
    //     body: temp,
    // };
    // return response;
    
};