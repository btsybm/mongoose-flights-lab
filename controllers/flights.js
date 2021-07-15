import { Flight } from '../models/flight.js'

export {
  newFlight as new
}

function newFlight(req, res) {
  res.render('flights/new');
}