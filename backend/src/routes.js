const { Router } = require('express');

const routes = new Router();

const SessionController = require('./app/controllers/SessionController');
const ClientController = require('./app/controllers/ClientController');
const ReasonController = require('./app/controllers/ReasonController');
const AboutController = require('./app/controllers/AboutController');

const authMiddleware = require('./app/midlewares/auth');

routes.post('/sessions', SessionController.store);

routes.post('/clients', ClientController.store);

routes.get('/reasons', ReasonController.index);

routes.get('/aboutus', AboutController.index);

routes.use(authMiddleware);

routes.get('/clients/:id', ClientController.show);
routes.get('/clients', ClientController.index);
routes.put('/clients/:id', ClientController.update);

module.exports = routes;
