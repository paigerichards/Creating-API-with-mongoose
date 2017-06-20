const Movie = require('../models/movie')

Movie.create([
  {
    title: 'Finding Nemo',
    yearReleased: '2003',
    description: 'Fish lost in the ocean'
  },
  {
    title: 'Seven Pounds',
    yearReleased: '2000',
    description: 'Saves seven lives as he accidently killed 7 people'
  },
  {
    title: '21 jumpstreet',
    yearReleased: '2014',
    description: 'Two police officers impersonate highschoolers to catch a dealer'
  },
])
