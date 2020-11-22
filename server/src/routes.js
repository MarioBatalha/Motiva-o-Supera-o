const express = require('express');

const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const controllerCompany = require('./controllers/controllerCompany');
const controllerCompanyProfile = require('./controllers/controllerCompanyProfile');
const controllerFreelancer = require('./controllers/controllerFreelancer');
const controllerFreelancerProfile = require('./controllers/controllerFreelancerProfile');
const controllerAdmin = require('./controllers/controllerAdmin');
const controllerAdminProfile = require('./controllers/controllerAdminProfile');
const controllerRequest = require('./controllers/controllerRequest');
const controllerSession = require('./controllers/controllerSession');


//Session
routes.post('/sessions', controllerSession.create);
routes.post('/sessions', controllerSessionFreelancer.create);
 

//Routes
routes.get('/company', controllerCompany.index);

routes.post('/company', celebrate({
    [Segments.BODY]: Joi.object().keys({
        firstname: Joi.string().required(),
        nickname: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co', 'ao'] } }),
        password: Joi.string().required().alphanum().min(6),
        checkPassword: Joi.ref('password'),
        country: Joi.string().required(),
    })
}), controllerCompany.create);

//Routes profile and validation

routes.get('/profile', controllerCompanyProfile.index);

//Routes admin
routes.post('/admin', controllerAdmin.create);

routes.get('/admin', controllerAdminProfile.index);

//Freelancer routes
routes.post('/freelancer', celebrate({
    [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string().required(),
        nickName: Joi.string().required(),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co', 'ao'] } }),
        password: Joi.string().required().alphanum().min(6),
        checkPassword: Joi.ref('password'),
        degree: Joi.string().required(),
        country: Joi.string().required(),
        phone: Joi.number().required().min(12)
    })
}), controllerFreelancer.create);

routes.get('/freelancer', controllerFreelancer.index);

routes.get('/freelancer', controllerFreelancerProfile.index);

//Request Routes

routes.post('/request', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        category: Joi.string().required(),
        lifetime: Joi.string().required(),
        description: Joi.string().required().min(50),
        budget: Joi.number().required(),
        promotionalCode: Joi.string().required(),
    })
}), controllerRequest.create);

routes.get('/request', controllerRequest.index);

routes.delete('/request/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), controllerRequest.delete);




module.exports = routes;
