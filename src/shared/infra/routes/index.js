const {Router} = require('express')

const usersRoutes = require('../../../modules/users/infra/routes/Users.routes')

const routes = Router()

routes.use('/users', usersRoutes);



module.exports = routes

