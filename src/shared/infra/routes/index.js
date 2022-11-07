const {Router} = require('express');

const assistedRoutes = require('../../../modules/assisted_registration/infra/routes/Assisted.routes');

const registrationRoutes = require('../../../modules/donation_registration/infra/routes/Registration.routes');

const typeRoutes = require('../../../modules/donation_type/infra/routes/Type.routes');

const familyRoutes = require('../../../modules/family_composition/infra/routes/Family.routes');

const transactionsRoutes = require('../../../modules/transactions/infra/routes/transactions.routes');
const sessionsRoutes = require('../../../modules/users/infra/routes/sessions.routes');

const usersRoutes = require('../../../modules/users/infra/routes/Users.routes')

const routes = Router()

routes.use('/users', usersRoutes);

routes.use('/login', sessionsRoutes);

routes.use('/assisted_registration', assistedRoutes);

routes.use('/donation_registration', registrationRoutes);

routes.use('/donation_type', typeRoutes);

routes.use('/family_composition',familyRoutes);

routes.use('/transactions', transactionsRoutes);





module.exports = routes

