const {Router} = require('express')

const UsersController = require ('../controllers/UsersController')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.get('/', usersController.getAllUsers)

usersRoutes.post('/', usersController.createUsers)

usersRoutes.put('/', usersController.updateUsers)

usersRoutes.delete('/', usersController.deleteUsers)

module.exports = usersRoutes 