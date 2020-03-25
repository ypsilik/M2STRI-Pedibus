var mymap = L.map('mapid').setView([43.604652, 1.444209], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVkaWJ1cy1tMiIsImEiOiJjazd5a3djMTIwMmZvM3RwNHNuZGpxaHB6In0.cM0yMBv50KSmwpVfhYfp3A', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  minZoom: 12,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

// Liste des waypoints
var w1 = L.marker([43.608876, 1.445496]).setZIndexOffset(1000).addTo(mymap);
w1.bindPopup("<b>Jeanne d'arc</b>").openPopup();
var w2 = L.marker([43.61085, 1.442728]).setZIndexOffset(1000).addTo(mymap);
w2.bindPopup("<b>Concorde</b>").openPopup();
var w3 = L.marker([43.61172, 1.438587]).setZIndexOffset(1000).addTo(mymap);
w3.bindPopup("<b>A. Bernard</b>").openPopup();
var w4 = L.marker([43.615837, 1.437299]).setZIndexOffset(1000).addTo(mymap);
w4.bindPopup("<b>Pont des minimes</b>").openPopup();
var w5 = L.marker([43.618042, 1.43657]).setZIndexOffset(1000).addTo(mymap);
w5.bindPopup("<b>Eglise des minimes</b>").openPopup();
var w6 = L.marker([43.623308, 1.434424]).setZIndexOffset(1000).addTo(mymap);
w6.bindPopup("<b>Banqué</b>").openPopup();
var w7 = L.marker([43.62685, 1.433694]).setZIndexOffset(1000).addTo(mymap);
w7.bindPopup("<b>Barrière de paris</b>").openPopup();
var w8 = L.marker([43.630391, 1.432772]).setZIndexOffset(1000).addTo(mymap);
w8.bindPopup("<b>Charlas</b>").openPopup();
var w9 = L.marker([43.632736, 1.43157]).setZIndexOffset(1000).addTo(mymap);
w9.bindPopup("<b>Jules ferry</b>").openPopup();
var w10 = L.marker([43.621677, 1.435357]).setZIndexOffset(1000).addTo(mymap);
w10.bindPopup("<b>Minimes claude nougaro</b>").openPopup();

//ROUTE pour les chemins 
var controlRoute = L.Routing.control({
  router: L.Routing.mapbox('pk.eyJ1IjoicGVkaWJ1cy1tMiIsImEiOiJjazd5a3djMTIwMmZvM3RwNHNuZGpxaHB6In0.cM0yMBv50KSmwpVfhYfp3A', { profile: 'mapbox/walking' }),
  waypoints: [
    { latLng: L.latLng(43.608876, 1.445496), name: "Jeanne d'arc" },
    { latLng: L.latLng(43.61085, 1.442728), name: "Concorde" },
    { latLng: L.latLng(43.61172, 1.438587), name: "A. Bernard" },
    { latLng: L.latLng(43.615837, 1.437299), name: "Pont des minimes" },
    { latLng: L.latLng(43.618042, 1.43657), name: "Eglise des minimes" },
    { latLng: L.latLng(43.621677, 1.435357), name: "Minimes claude nougaro" },
    { latLng: L.latLng(43.623308, 1.434424), name: "Banqué" },
    { latLng: L.latLng(43.62685, 1.433694), name: "Barrière de paris" },
    { latLng: L.latLng(43.630391, 1.432772), name: "Charlas" },
    { latLng: L.latLng(43.632736, 1.43157), name: "Jules ferry" }
  ],
  language: 'fr',
  draggableWaypoints: false,
  addWaypoints: false,
  summaryTemplate: '<h2>Itinéraire Jeanne d\'arc <-> Ecole élémentaire Jules ferry</h2><h3>{distance}, {time}</h3>'
}).addTo(mymap);
L.control.locate().addTo(mymap);