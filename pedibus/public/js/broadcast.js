function log(txt) {
    document.getElementById('log').innerHTML += txt + "<br>";
  }

var idf = 0;
if ('WebSocket' in window) {
  var ws = new WebSocket("wss://127.0.0.1:8002/");
  ws.connect = function() {
    
  };
  ws.onmessage = function (event) {
    console.log("JE SUIS CO :) ");
    if (idf == 0) {
        idf = event.data; // Récupération de l'identifiant
      } else {
        log("Alerte : " + event.data);
      }; 
      console.log("JE SUIS CO :) ");
  };
}