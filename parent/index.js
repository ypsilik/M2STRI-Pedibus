var ws = require("nodejs-websocket");
var idf = 0;

var server = ws.createServer(function (conn) {
	ws.idf = idf++;
	console.log("Nouvelle connexion : " + ws.idf);

	conn.on("text", function (msg) {
		console.log("" + msg); // Reception du message du client
	});
	// Fermeture de connexion
	conn.on("close", function (code, reason) {
		console.log("Connexion fermée");
	});
	// En cas d'erreur
	conn.on("error", function (err) {
		console.log(err);
	});

	conn.send(ws.idf + ""); // Envoi de l'identifiant au client

}).listen(8002);

console.log("Serveur démarré (http://192.168.0.22:8002/) !");
