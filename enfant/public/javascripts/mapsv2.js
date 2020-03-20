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

//https://api.mapbox.com/direction/v5/mapbox/walking/{x];{y}?access_token=
// var marker = L.marker([43.604652, 1.444209]).addTo(mymap);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(mymap);}
// mymap.on('click', onMapClick);

//ROUTE pour les chemins 
var controlRoute = L.Routing.control({
    router: L.Routing.mapbox('pk.eyJ1IjoicGVkaWJ1cy1tMiIsImEiOiJjazd5a3djMTIwMmZvM3RwNHNuZGpxaHB6In0.cM0yMBv50KSmwpVfhYfp3A',{profile:'mapbox/walking'} ),
    // waypoints: [
    //   L.latLng(43.608876, 1.445496),
    //   L.latLng(43.61085, 1.442728),
    //   L.latLng(43.61172, 1.438587),
    //   L.latLng(43.615837, 1.437299),
    //   L.latLng(43.618042, 1.43657),
    //   L.latLng(43.621677, 1.435357),
    //   L.latLng(43.623308, 1.434424),
    //   L.latLng(43.62685, 1.433694),
    //   L.latLng(43.630391, 1.432772),
    //   L.latLng(43.632736, 1.43157),
    // ],
    waypoints: [
      {latLng: L.latLng(43.608876, 1.445496), name: "Jeanne d'arc"},
      {latLng: L.latLng(43.61085, 1.442728), name: "Concorde"},
      {latLng: L.latLng(43.61172, 1.438587), name: "A. Bernard" },
      {latLng: L.latLng(43.615837, 1.437299), name: "Pont des minimes"},
      {latLng: L.latLng(43.618042, 1.43657), name: "Eglise des minimes"},
      {latLng: L.latLng(43.621677, 1.435357), name: "Minimes claude nougaro"},
      {latLng: L.latLng(43.623308, 1.434424), name: "Banqué"},
      {latLng: L.latLng(43.62685, 1.433694), name: "Barrière de paris"},
      {latLng: L.latLng(43.630391, 1.432772), name: "Charlas"},
      {latLng: L.latLng(43.632736, 1.43157), name: "Jules ferry"}
      // L.Routing.Waypoint(L.latLng(43.608876, 1.445496), "TOTO"),
      // L.Routing.Waypoint(L.latLng(43.61085, 1.442728), "TOTO")

    ],
    language:'fr',
    draggableWaypoints: false,
    addWaypoints: false,
    summaryTemplate: '<h2>Itinéraire Jeanne d\'arc <-> Ecole élémentaire Jules ferry</h2><h3>{distance}, {time}</h3>'
   
  })
  .addTo(mymap);

  L.control.locate().addTo(mymap);


  if('WebSocket' in window) {
    var ws = new WebSocket("ws://192.168.0.22:8002/");
    // Indication de l'état
    // var rs = document.getElementById('rs');
    // //Lors de l'ouverture de connexion
    // // Attente obligatoire de la connexion avant envoi de message
    ws.onopen; // = function() {
    //     rs.innerHTML = this.readyState;
    //   };
      ws.onmessage; // = function(e) {
        // Ajout au journal du contenu du message
        // rs.innerHTML = this.readyState;
      // };
  }


// Action QD la localisation a marchée
  function onLocationFound(e) {
    L.marker(e.latlng).addTo(mymap).bindPopup("Problème Problème !!!").openPopup();
    document.body.style.background = '#e74c3c';
    // TEST ENVOI MSG TO SERVEUR
        // TEST ENVOI MSG TO SERVEUR
        
            ws.send("Problème Problème !!!");
}

mymap.on('locationfound', onLocationFound);