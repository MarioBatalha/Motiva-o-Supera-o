const express = require('express');
 const {celebrate, Segments, Joi} = require('celebrate')

const controllerOngs = require('./controllers/controllerOngs');
const controllerIncidents = require('./controllers/controllerIncidents');
const controllerProfile = require('./controllers/controllerProfile');
const controllerSession = require('./controllers/controllerSession');

const routes = express.Router();

//Session
routes.post('/sessions', controllerSession.create);


//routes ongs and validation
routes.get('/ongs', controllerOngs.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(9).max(12),
        city: Joi.string().required(),
        province: Joi.string().required(),
    })
}), controllerOngs.create);

//Routes profile and validation
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.string().required(),
    }).unknown(),
}), controllerProfile.index);

//Incidents routes
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required().max(100),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.string().required(),
    }).unknown(),
}), controllerIncidents.create)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), controllerIncidents.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id: Joi.number().required(),
    })
}), controllerIncidents.delete);

module.exports = routes;