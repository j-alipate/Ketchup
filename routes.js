const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
    db.getUsers()
    .then(users => {
      res.render('index', { users: username })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/select/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getSelections(id) //tbd
    .then(selections => { //tbd
      res.render('picker', { }) //tbd
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/sandwich/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getFave(id)
    .then(user => {
      res.render('display', { sub: sub })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router