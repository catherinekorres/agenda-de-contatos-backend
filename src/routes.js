const express = require('express');

const UserController = require('./controllers/UserController');
const ContactController = require('./controllers/ContactController');
const EmailController = require('./controllers/EmailController');
const TelephoneController = require('./controllers/TelephoneController');
const TelephoneTypeController = require('./controllers/TelephoneTypeController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserController.show);
routes.put('/users/:user_id', UserController.update);

routes.get('/telephone-types', TelephoneTypeController.index);
routes.post('/telephone-types', TelephoneTypeController.store);
routes.get('/telephone-types/:telephone_type_id', TelephoneTypeController.show);
routes.put('/telephone-types/:telephone_type_id', TelephoneTypeController.update);
routes.delete('/telephone-types/:telephone_type_id', TelephoneTypeController.delete);

routes.get('/users/:user_id/contacts', ContactController.index);
routes.post('/users/:user_id/contacts', ContactController.store);
routes.get('/users/:user_id/contacts/:contact_id', ContactController.show);
routes.put('/users/:user_id/contacts/:contact_id', ContactController.update);
routes.delete('/users/:user_id/contacts/:contact_id', ContactController.delete);

routes.get('/users/:user_id/contacts/:contact_id/emails', EmailController.index);
routes.post('/users/:user_id/contacts/:contact_id/emails', EmailController.store);
routes.get('/users/:user_id/contacts/:contact_id/emails/:email_id', EmailController.show);
routes.put('/users/:user_id/contacts/:contact_id/emails/:email_id', EmailController.update);
routes.delete('/users/:user_id/contacts/:contact_id/emails/:email_id', EmailController.delete);

routes.get('/users/:user_id/contacts/:contact_id/telephones', TelephoneController.index);
routes.post('/users/:user_id/contacts/:contact_id/telephones', TelephoneController.store);
routes.get('/users/:user_id/contacts/:contact_id/telephones/:telephone_id', TelephoneController.show);
routes.put('/users/:user_id/contacts/:contact_id/telephones/:telephone_id', TelephoneController.update);
routes.delete('/users/:user_id/contacts/:contact_id/telephones/:telephone_id', TelephoneController.delete);

module.exports = routes;