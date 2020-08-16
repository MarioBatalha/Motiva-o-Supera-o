const express = require('express');

const controllerOngs = require('./controllers/controllerOngs');
const controllerIncidents = require('./controllers/controllerIncidents');
const controllerProfile = require('./controllers/controllerProfile');
const controllerSession = require('./controllers/controllerSession');

const routes = express.Router();

//Session
routes.post('/sessions', controllerSession.create);


//Ongs routes
routes.get('/ongs', controllerOngs.index);
routes.post('/ongs', controllerOngs.create);

//Profile
routes.get('/profile', controllerProfile.index);

//Incidents routes
routes.post('/incidents', controllerIncidents.create)
routes.get('/incidents', controllerIncidents.index)
routes.delete('/incidents/:id', controllerIncidents.delete)

module.exports = routes;