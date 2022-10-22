const express = require('express')
const { nextTick } = require('process')

const app = express()

app.use((req, res, next) =>{
    console.log('requete recu')
    next()
})

app.use((req, res, next) => {
    res.status(201)
    next()
})
app.use((req, res, next) => {
    res.json({message:'Requete recu'})
    next()
})

app.use((req, res) => {
    console.log('rep envoyé avec succès')
})

module.exports = app