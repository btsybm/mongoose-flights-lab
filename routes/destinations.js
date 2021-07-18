import { Router } from 'express'
import * as destinationsCtrl from '../controllers/destinations.js'

export {
  router
}

const router = Router()

router.get("/new", destinationsCtrl.newDestination)
router.post("/", destinationsCtrl.create)