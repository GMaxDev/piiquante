const express = require('express')
const mongoose = require('mongoose')

const route_user = require('./routes/route_user')
const Sauces = require('./models/model_sauce');

//on se connecte à la base de donnée
mongoose.connect('mongodb+srv://GMaxDev:VtUflowp6X4kSJ6N@cluster0.dn1raoi.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


//on initialise express
const app = express()

//middleware permettant d'accéder à l'API depuis n'importe où, d'ajouter des headers et d'envoyer des requêtes avec certaines méthode
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next()
});

//------------------------------

app.use('/api/auth/signup', route_user)

module.exports = app