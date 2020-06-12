const express = require('express')
const router = express.Router()

const db = require('./db')
const { returnNutrition } = require('./db')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/select/:id', (req, res) => {
  const id = Number(req.params.id)
  //   db.getSelections(id) // tbd
  //     .then(selections => { // tbd
  //       res.render('picker', {}) // tbd
  //     })

  res.render('picker', {})
  // .catch(err => {
  //   res.status(500).send('DATABASE ERROR: ' + err.message)
  // })
})

let nutrition = {
  serving_size: 0,
  energy: 0,
  protein: 0,
  fat_total: 0,
  sat_fat: 0,
  carbs: 0,
  sugars: 0,
  dietary_fiber: 0,
  sodium: 0
}

router.post('/sandwich', (req, res) => {
//   const id = Number(req.params.id)
//   const body = req.params.body
//   console.log(body)
//   db.getFave(id)
  const sub = req.body
  // console.log(sub)
  returnNutrition(sub)
    .then(data => {
      data.forEach(item => {
        nutrition.serving_size += item.serving_size
        nutrition.energy += item.energy
        nutrition.protein += item.protein
        nutrition.fat_total += item.fat_total
        nutrition.sat_fat += item.sat_fat
        nutrition.carbs += item.carbs
        nutrition.sugars += item.sugars
        nutrition.dietary_fiber += item.dietary_fiber
        nutrition.sodium += item.sodium
      })
      res.render('display', nutrition)
    })
  //     .then(user => {
})
// .catch(err => {
//   res.status(500).send('DATABASE ERROR: ' + err.message)
// })
// })

module.exports = router
