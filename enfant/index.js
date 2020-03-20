// Liste des modules
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const request = require('request');
// const ejs = require ("ejs") - pas besoin express le fait tout seul

const app = express();

// Configuration du module ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); // <--- paramétrage du middleware

// Weather API
let apiKey='3cfe554bf79498902f33af0ed6e4cf60';
let city='toulouse';
let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;




app.listen(8001, () => {
	console.log("Serveur démarré (http://192.168.0.22:8001/) !");
});
// request(url, function (err, response, body) {
// OUTPUT BODY : {
//   "coord": {
//     "lon": 1.44,
//     "lat": 43.6
//   },
//   "weather": [
//     {
//       "id": 500,
//       "main": "Rain",
//       "description": "light rain",
//       "icon": "10d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 286.29,
//     "feels_like": 282.08,
//     "temp_min": 283.71,
//     "temp_max": 288.71,
//     "pressure": 1030,
//     "humidity": 76
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 5.7,
//     "deg": 150
//   },
//   "rain": {
//     "1h": 0.25
//   },
//   "clouds": {
//     "all": 75
//   },
//   "dt": 1584445430,
//   "sys": {
//     "type": 1,
//     "id": 6467,
//     "country": "FR",
//     "sunrise": 1584424942,
//     "sunset": 1584468160
//   },
//   "timezone": 3600,
//   "id": 2972315,
//   "name": "Toulouse",
//   "cod": 200
// }
//   });

app.get("/", (req,res) => {
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', err);
        } else {
            let weatherOutput = JSON.parse(body)
            const weatherToulouse = {
                temperature: Math.round(`${weatherOutput.main.temp}`),
                main: `${weatherOutput.weather[0].main}`,
                description: `${weatherOutput.weather[0].description}`,
                icon: `${weatherOutput.weather[0].icon}`
            };
            res.render("index", { model: weatherToulouse});    
        }
    }); 
});
// console.log(res);
// 	res.render("index");
// });
app.get("/about",(req,res) => {
    
	res.render("about");
});
app.get("/data",(req,res) => {
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', err);
        } else {
            let weatherOutput = JSON.parse(body)
            const weatherToulouse = {
                temperature: Math.round(`${weatherOutput.main.temp}`),
                main: `${weatherOutput.weather[0].main}`,
                description: `${weatherOutput.weather[0].description}`,
                icon: `${weatherOutput.weather[0].icon}`
            };
            res.render("child-objet", { model: weatherToulouse});    
        }
    });
});