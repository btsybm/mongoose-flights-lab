import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
  router
}

router.get('/new', flightsCtrl.new)