var ws = require("nodejs-websocket");

var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('cert/selfsigned.key', 'utf8');
// var certificate = fs.readFileSync('cert/selfsigned.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};

// var httpsServer = https.createServer(credentials);
// httpsServer.listen(8003);
var options = {
	secure: true,
	key: fs.readFileSync('cert/selfsigned.key'),
	cert: fs.readFileSync('cert/selfsigned.crt')
}

var idf = 0;

var server = ws.createServer(options, function (conn) {
	conn.nickname = 0;
	if (conn.nickname == 0 ) {
		conn.nickname = idf++;
		conn.sendText("" + conn.nickname);
	};
	console.log("Nouvelle connexion : " + conn.nickname);
	conn.on("text", function (msg) {
			console.log("msg recu : " + msg); // Reception du message du client
			broadcast(msg);
		
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

function broadcast(msg) {
	server.connections.forEach(function (conn) {
		conn.sendText(msg)
		console.log(msg);
	})
}
console.log("Serveur démarré (http://127.0.0.1:8002/) !");
