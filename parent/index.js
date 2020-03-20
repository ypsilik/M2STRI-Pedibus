var ws = require("nodejs-websocket");
var server = ws.createServer(function (conn) {
	console.log("Nouvelle connexion");
	conn.on("text", function (msg) {
		console.log("Texte reçu : " + msg);
	});
	// Fermeture de connexion
	conn.on("close", function (code, reason) {
		console.log("Connexion fermée");
	});
	// En cas d'erreur
	conn.on("error", function (err) {
		console.log(err);
	});
}).listen(8002);

console.log("Serveur démarré (http://192.168.0.22:8002/) !");
