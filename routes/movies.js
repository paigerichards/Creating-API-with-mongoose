const express = require('express');
const Movie = require('../models/movie');

const router = express.Router()


router
// SHOW (like rails). Getting request to render page info
.route('/movies/:id')
.get((req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies)
    })
    .catch((error) => {
      res.status(500).json({ error: error})
    })
})

//UPDATE
.put('/movies/:id',(req, res) => {
  const id = req.params.id
  const newMovie = req.body
  Movie.findByIdAndUpdate(id, newMovie)
    .then(() => {
      res.json(newMovie)
    })
    .cathc((error) => {
      res.status(404).json({ error })
    })
})
//POST
.post((req, res) => {
  const newMovie = req.body
  Movie.create(newMovie)
  .then((movie) => {
    res.json(movie)
  })
  .catch((error) => {
    res.status(500).json({ error: error})
  })
})

//DESTROY
.delete((req, res) => {

})


// Handle the id param
router
.param('id',(req, res, next, id) => {
  req.itemQuery = Movie.findById(id)
  next()
})

module.exports = router
