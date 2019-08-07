import { Router } from 'express'

import UserController from './controller/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/user', UserController.store)

export default routes