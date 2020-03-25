const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Création du serveur Express
const app = express();

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

// Démarrage du serveur
app.listen(3000, () => {
  console.log("Serveur démarré (http://localhost:3000/) !");
});


app.get('/inscription', function (req, res) {
  res.render('inscription', { model: {}, message: " " });
});

app.post('/inscription', function (req, res) {
  const sql1 = "SELECT * FROM Membres WHERE mail = ?";
  const mel = req.body.mail;
  const sql2 = "INSERT INTO Membres (mail, nom, prenom, mdp) VALUES (?, ?, ?, ?)";
  const mb = [req.body.mail, req.body.nom, req.body.prenom, req.body.mdp];
  if (!req.body.mail || !req.body.nom || !req.body.prenom || !req.body.mdp) {
    res.status("400");
    res.send("Invalid details!");
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


function checkSignIn(req, res, next) {
  if (req.session.user) {
    next();     //If session exists, proceed to page
  } else {
    var err = new Error("Not logged in!");
    console.log(req.session.user);
    next(err);  //Error, trying to access unauthorized page!
  }
}


app.get('/connexion', function (req, res) {
  res.render('connexion',{ model: {}, message: " " });
});

app.post('/connexion', function (req, res) {
  const sql1 = "SELECT * FROM Membres WHERE mail = ?";
  const mail = req.body.mail;
  if (!req.body.mail || !req.body.mdp) {
    res.render('connexion', { model: {}, message: "Entrez le mail ET le mot de passe" });
  } else {
    db.get(sql1, mail, (err,rows) => {
      if (rows.mail === req.body.mail && rows.mdp === req.body.mdp) {
        var user = { id: rows.membre_ID, password: rows.mdp }
        req.session.user = user;
        res.redirect('/');
      } else {
        res.render('connexion', { model: {}, message: "Invalid credentials!" });
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
  // res.send("Bonjour le monde...");
  //res.render("index");
  const sql1 = "SELECT * FROM Deps, Membres, Venir WHERE Deps.dep_ID = Venir.dep_ID AND Venir.membre_ID = Membres.membre_ID ORDER BY date";
  const sql2 = "SELECT DISTINCT date,dep_ID FROM Deps";
  var resSQL1;
  db.all(sql1, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    resSQL1 = rows;;
  });
  db.all(sql2, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("index", { modelAll: resSQL1, modelDist: rows });
  });
});


// GET /compte
app.get("/compte", checkSignIn,  (req, res) => {
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
  const sql = "SELECT * FROM Venir WHERE dep_ID = ?";
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
  const sql3 = "UPDATE Venir SET participe = ? WHERE dep_ID = ? AND membre_ID = ?";
  db.get(sql1, existe, (err,row) => {
    if(row != null){
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
  const id = req.params.id;
  const venir = [req.session.user.id, id, 1];
  console.log(venir);
  const sql = "SELECT * FROM Venir WHERE dep_ID = ? AND membre_ID = ? AND participe = ?";
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
  const venir = [0,id,req.session.user.id];
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





// GET /create
app.get("/create", (req, res) => {
  res.render("create", { model: {} });
});

// POST /create
app.post("/create", (req, res) => {
  const sql = "INSERT INTO Livres (Titre, Auteur, Commentaires) VALUES (?, ?, ?)";
  const book = [req.body.Titre, req.body.Auteur, req.body.Commentaires];
  db.run(sql, book, err => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/livres");
  });
});

// GET /edit/5
app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM Livres WHERE Livre_ID = ?";
  db.get(sql, id, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("edit", { model: row });
  });
});

// POST /edit/5
app.post("/edit/:id", (req, res) => {
  const id = req.params.id;
  const book = [req.body.Titre, req.body.Auteur, req.body.Commentaires, id];
  const sql = "UPDATE Livres SET Titre = ?, Auteur = ?, Commentaires = ? WHERE (Livre_ID = ?)";
  db.run(sql, book, err => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/livres");
  });
});

// GET /delete/5
app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM Livres WHERE Livre_ID = ?";
  db.get(sql, id, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("delete", { model: row });
  });
});

// POST /delete/5
app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM Livres WHERE Livre_ID = ?";
  db.run(sql, id, err => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/livres");
  });
});