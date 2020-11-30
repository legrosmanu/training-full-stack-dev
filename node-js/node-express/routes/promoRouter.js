const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

const resourceName = 'promotion';

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send all the ${resourceName}s to you!`);
    })
    .post((req, res, next) => {
        res.end(`Will add the ${resourceName}: ${req.body.name} with details: ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /${resourceName}s`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting all ${resourceName}s`);
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send details of the ${resourceName} ${req.params.promoId} to you!`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /${resourceName}s/${req.params.promoId}`);
    })
    .put((req, res, next) => {
        res.write(`Updating the ${resourceName}: ${req.params.promoId}` + '\n');
        res.end(`Will update the ${resourceName}: ${req.body.name} with details: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting ${resourceName}: ${req.params.promoId}`);
    });

module.exports = promoRouter;
