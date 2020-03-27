const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
const request = require('request');
const moment = require('moment');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('cert/selfsigned.key', 'utf8');
var certificate = fs.readFileSync('cert/selfsigned.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };


const app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
// Création du serveur Express


// Configuration du serveur
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// Sessions / cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({ secret: "Your secret key" }));

// Weather API
let apiKey = '3cfe554bf79498902f33af0ed6e4cf60';
let city = 'toulouse';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

// Connexion à la base de donnée SQlite
const db_name = path.join(__dirname, "data", "pedibus.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connexion réussie à la base de données 'pedibus.db'");
});


// Création de la table Deplacements (Deplacement_ID, Titre, Auteur, Commentaires)
const sql_create_dep = `CREATE TABLE IF NOT EXISTS Deps (
  dep_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  date DATE NOT NULL
);`;

const sql_create_mb = `CREATE TABLE IF NOT EXISTS Membres(
  membre_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  mail VARCHAR(100) NOT NULL,
  nom VARCHAR(100) NOT NULL,
  prenom VARCHAR(100) NOT NULL,
  mdp VARCHAR(100) NOT NULL
);`;

const sql_create_venir = `CREATE TABLE IF NOT EXISTS Venir(
  membre_ID INTEGER,
  dep_ID INTEGER,
  participe BOOLEAN,
  FOREIGN KEY (membre_ID)
       REFERENCES Membres (membre_ID),
  FOREIGN KEY (dep_ID)
       REFERENCES Deps (dep_ID),
  CONSTRAINT PK_Venir PRIMARY KEY(membre_ID,dep_ID)
);`;



db.run(sql_create_dep, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'Deps'");
});

db.run(sql_create_mb, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'Membres'");
});

db.run(sql_create_venir, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'Venir'");
});



// app.listen(3000, () => {
//   console.log("Serveur démarré (http://localhost:3000/) !");
// });

// Démarrage du serveur
httpsServer.listen(3000, () => {
  console.log("Serveur démarré (http://localhost:3000/) !");
});




// GET /inscription
app.get('/inscription', function (req, res) {
  res.render('inscription', { model: {}, message: " " });
});

// POST /inscription
app.post('/inscription', function (req, res) {
  const sql1 = "SELECT * FROM Membres WHERE mail = ?";
  const mel = req.body.mail;
  const sql2 = "INSERT INTO Membres (mail, nom, prenom, mdp) VALUES (?, ?, ?, ?)";
  const mb = [req.body.mail, req.body.nom, req.body.prenom, req.body.mdp];
  if (!req.body.mail || !req.body.nom || !req.body.prenom || !req.body.mdp) {
    res.status("400");
    res.render('inscription', { model: {}, message: "Remplir tous les champs" });
  } else {
    db.get(sql1, mel, (err, rows) => {
      if (rows != null) {
        res.render('inscription', {
          model: {}, message: "Cet utilisateur existe déjà. Connectez-vous ou utilisez une autre adresse mail"
        });
      } else {
        db.run(sql2, mb, err => {
          if (err) {
            return console.error(err.message);
          }
        });
        db.get(sql1, mel, (err, rows) => {
          console.log(rows);
          var newUser = { id: rows.membre_ID, password: rows.mdp };
          req.session.user = newUser;
          res.redirect('/');
        });
      }
    });
  }
});


// Vérifie si l'utilisateur est connecté
function checkSignIn(req, res, next) {
  if (req.session.user) {
    next();     //If session exists, proceed to page
  } else {
    var err = new Error("Not logged in!");
    console.log(req.session.user);
    next(err);  //Error, trying to access unauthorized page!
  }
}

// GET /connexion
app.get('/connexion', function (req, res) {

  // Ajouter date
const sqlInsertDate = "INSERT INTO Deps (date) VALUES (?)";
const sqlSelectDate = "SELECT date FROM Deps";
var tomorrow;
var dateExiste = 0;


db.all(sqlSelectDate, [], (err, rows) => {
  console.log(rows);
  for (i = 0; i < 5; i++) {
    tomorrow = moment().add(i, 'day').format('DD/MM/YYYY');
    console.log(tomorrow);
    rows.forEach(row => {
      console.log(row);
      console.log("row.date: " + row.date);
      if (row.date == tomorrow) {
        dateExiste = 1;
        console.log(dateExiste);
      };
    });
    if (!dateExiste) {
      db.run(sqlInsertDate, tomorrow, err => {
        if (err) {
          return console.error(err.message);
        }

      });
    }
    dateExiste = 0;
  }

});
  res.render('connexion', { model: {}, message: " " });
});

// POST /connexion
app.post('/connexion', function (req, res) {
  const sql1 = "SELECT * FROM Membres WHERE mail = ?";
  const mel = req.body.mail;
  if (!req.body.mail || !req.body.mdp) {
    res.render('connexion', { model: {}, message: "Entrez le mail ET le mot de passe" });
  } else {
    db.get(sql1, mel, (err, rows) => {
      if (rows == null) {
        res.render('connexion', {
          model: {}, message: "Entrez des identifiants valides"
        });
      } else {
        if (rows.mail === req.body.mail && rows.mdp === req.body.mdp) {
          var user = { id: rows.membre_ID, password: rows.mdp }
          req.session.user = user;
          res.redirect('/');
        } else {
          res.render('connexion', { model: {}, message: "Entrez des identifiants valides." });
        }
      }
      
    
    });

  }
});

app.get('/deconnexion', function (req, res) {
  req.session.destroy(function () {
    console.log("user logged out.")
  });
  res.redirect('/connexion');
});


// GET /
app.get("/", checkSignIn, (req, res) => {
  const sql1 = "SELECT * FROM Deps, Membres, Venir WHERE Deps.dep_ID = Venir.dep_ID AND Venir.membre_ID = Membres.membre_ID";
  const sql2 = "SELECT DISTINCT date,dep_ID FROM Deps WHERE date BETWEEN ? AND ? ORDER BY date";
  const sql3 = "SELECT * FROM Membres WHERE membre_ID = ?";
  
  const id = req.session.user.id;

  const now = moment().format('DD/MM/YYYY');
  const end = moment().add('4', 'day').format('DD/MM/YYYY');
  const d = [now, end];

  var weatherToulouse;
  var resSQL1;
  var resSQL2;
  var resSQL3;

  db.all(sql1, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    resSQL1 = rows;
  });
  db.all(sql2, d, (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    resSQL2 = rows;
  });

  db.get(sql3, id, (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    resSQL3 = rows;
  });

  // Execution de la requete pour récuperer la météo
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', err);
    } else {
      let weatherOutput = JSON.parse(body)
      weatherToulouse = {
        temperature: Math.round(`${weatherOutput.main.temp}`),
        main: `${weatherOutput.weather[0].main}`,
        description: `${weatherOutput.weather[0].description}`,
        icon: `${weatherOutput.weather[0].icon}`
      };
      res.render("index", { modelAll: resSQL1, modelDist: resSQL2, modelUser: resSQL3, model: weatherToulouse });
    }
  });
});


// GET /compte
app.get("/compte", checkSignIn, (req, res) => {
  const id = req.session.user.id;
  const sql = "SELECT * FROM Deps, Membres, Venir WHERE Deps.dep_ID = Venir.dep_ID AND Venir.membre_ID = Membres.membre_ID AND Membres.membre_ID = ?";
  db.all(sql, id, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("compte", { model: row });
  });
});

// GET /participer/:id
app.get("/participer/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT dep_ID, date FROM Deps WHERE dep_ID = ?";
  db.get(sql, id, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);
    res.render("participer", { model: row });
  });
});

// POST /participer/:id
app.post("/participer/:id", (req, res) => {
  const depid = req.params.id;
  const mbid = req.session.user.id;
  const existe = [mbid, depid];
  const venir = [1, mbid, depid];
  console.log(venir);
  const sql1 = "SELECT * FROM Venir WHERE membre_ID = ? AND dep_ID = ?";
  const sql2 = "INSERT INTO Venir (participe, membre_ID, dep_ID) VALUES (?, ?, ?)";
  const sql3 = "UPDATE Venir SET participe = ? WHERE membre_ID = ? AND dep_ID = ?";
  db.get(sql1, existe, (err, row) => {
    if (row != null) {
      db.run(sql3, venir, err => {
        if (err) {
          return console.error(err.message);
        }
        res.redirect("/");
      });
    } else {
      db.run(sql2, venir, err => {
        if (err) {
          return console.error(err.message);
        }
        res.redirect("/");
      });
    }
  });
});

// GET /annuler/:id
app.get("/annuler/:id", (req, res) => {
  const venir = [req.session.user.id, req.params.id, 1];
  console.log(venir);
  const sql = "SELECT nom, prenom, date, Deps.dep_ID FROM Membres JOIN Venir ON Membres.membre_ID=Venir.membre_ID JOIN Deps ON Deps.dep_ID=Venir.dep_id WHERE Membres.membre_ID=? AND Deps.dep_ID=? AND participe = ? ";

  db.get(sql, venir, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("annuler", { model: row });

  });
});

// POST /annuler/:id
app.post("/annuler/:id", (req, res) => {
  const id = req.params.id;
  const venir = [0, id, req.session.user.id];
  const sql = "UPDATE Venir SET participe = ? WHERE dep_ID = ? AND membre_ID = ?";
  db.run(sql, venir, err => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/compte");
  });
});


app.use('/', function (err, req, res, next) {
  console.log(err);
  //User should be authenticated! Redirect him to log in.
  res.redirect('/connexion');
});

app.get("/enfant", (req, res) => {
  res.render("objet-enfant");
});
