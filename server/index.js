const express = require("express");
const bodyParser = require('body-parser') 
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Resende@123",
    database: "crud",
  });

  


  //Funções relacionada aos clientes 

  app.post("/createclient", (req, res) => {
    const dsnome= req.body.dsnome;
    const idtipo = req.body.idtipo;
    const cdvendedor =req.body.cdvendedor;
    const dslim= req.body.dslim;
    
  db.query(
      "INSERT INTO clients (dsnome, idtipo, cdvendedor, dslim) VALUES (?,?,?,?)",
      [dsnome, idtipo, cdvendedor, dslim],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Inserted");
        }
      }
    );
  });


app.get("/client", (req, res) => {
    db.query("SELECT * FROM clients", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/updatecliente", (req, res) => {
    const id = req.body.cdcl;
    const dsnome = req.body.dsnome;
    const idtipo = req.body.idtipo;
    const cdvendedor = req.body.cdvendedor;
    const dslim = req.body.dslim;

    const sqlUpdate = "UPDATE clients SET dsnome = ?, idtipo = ?, cdvendedor = ?, dslim = ?  WHERE cdcl = ?";

    db.query(sqlUpdate, [dsnome,idtipo, cdvendedor, dslim, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result)
        }
      }
    );
  });



  app.delete("/deleteclient/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM clients WHERE cdcl = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  // Funções relacionadas aos vendedores 
  app.post("/createseller", (req, res) => {
    const dsnome = req.body.dsnome;
    const cdtab = req.body.cdtab;
    const dtnasc = req.body.dtnasc;
    
  db.query(
      "INSERT INTO seller (dsnome, cdtab, dtnasc) VALUES (?,?,?)",
      [dsnome, cdtab, dtnasc],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Inserted");
        }
      }
    );
  });


app.get("/seller", (req, res) => {
    db.query("SELECT * FROM seller", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/updateseller", (req, res) => {
    const id = req.body.cdvend;
    const dsnome = req.body.dsnome;
    const cdtab = req.body.cdtab;
    const dtnasc = req.body.dtnasc;
    const sqlUpdate = "UPDATE seller SET dsnome = ?, cdtab =?, dtnasc =?  WHERE cdvend = ?";

    db.query(sqlUpdate, [dsnome,cdtab, dtnasc, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result)
        }
      }
    );
  });

  app.delete("/deleteseller/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM seller WHERE cdvend = ?", id, (err, result) => {
      if (err) {
        console.log(err);
        
      } else {
        res.send(result);
      }
    });
  });


app.listen(3001, () => {
    console.log("Server running, on 3001!");
  });