const express = require("express");
// const mysql = require("mysql");

const app = express();
const PORT = 3001;

const db = require("./models");

const {User} = require('./models');

app.get('/select', (req,res) => {
    User.findAll({where: {
        firstName: 'Duy Trung'
    }}).then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/insert', (req,res) => {
    User.create({
        firstName: 'John Stones',
        age: 19,
    }).catch(err => {
        if (err) {
            console.log(err);
        }
    })
    res.send("insert");
});

app.get('/delete', (req,res) => {
    User.destroy({where: {id: 5}})
    res.send('delete');
});

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
  });
});
