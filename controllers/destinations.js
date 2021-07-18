import { Destination } from "../models/destination.js"

export {
  newDestination,
}

function newDestination(req, res) {
  Destination.find({})
  .then(destinations =>{
      res.render("destinations/new", { title: "New Destination", destinations: destinations})
  })
  .catch(err => {
      console.log(err)
  })
}