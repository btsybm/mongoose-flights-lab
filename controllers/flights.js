import { Flight } from '../models/flight.js'

export {
  newFlight as new,
  create,
  index,
  show,
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { 
      title: 'Flight Details', 
      flight: flight,
    })
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save()
    .then(result => res.redirect('/flights'))
    .catch(err => {
      console.log(err)
      res.redirect('/flights/new')
    })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
}