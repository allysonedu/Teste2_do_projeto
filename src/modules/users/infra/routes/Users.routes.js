const {Router} = require('express')

const { celebrate, Segments, Joi } = require('celebrate');


const UsersController = require ('../controllers/UsersController')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.get('/', usersController.getAllUsers)

usersRoutes.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required('Name is required'),
    email: Joi.string().email().required('Email is required'),
    whatsapp: Joi.string().required('Whatsapp is required'),
    password: Joi.string().min(6).required('Password is required'),
    type: Joi.boolean().required('type is required'),
    username: Joi.string().required('username is required'),
  },
}),
usersController.createUsers)

usersRoutes.put('/', usersController.updateUsers)

usersRoutes.delete('/', usersController.deleteUsers)

module.exports = usersRoutes 