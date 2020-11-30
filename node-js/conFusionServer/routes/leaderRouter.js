const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

const resourceName = 'leader';

leaderRouter.route('/')
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

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send details of the ${resourceName} ${req.params.leaderId} to you!`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /${resourceName}s/${req.params.leaderId}`);
    })
    .put((req, res, next) => {
        res.write(`Updating the ${resourceName}: ${req.params.leaderId}` + '\n');
        res.end(`Will update the ${resourceName}: ${req.body.name} with details: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting ${resourceName}: ${req.params.leaderId}`);
    });

module.exports = leaderRouter;
