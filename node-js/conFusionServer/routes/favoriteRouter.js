const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const cors = require('./cors');

const Favorites = require('../models/favorites');

const favoriteRouter = express.Router();
favoriteRouter.use(bodyParser.json());

favoriteRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .populate('user')
            .populate('dishes')
            .then((favorites) => {
                if (favorites && favorites.length > 0) {
                    userFavorites = favorites[0];
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(userFavorites);
                } else {
                    err = new Error(`No favorites found for the user ${req.user._id}`);
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .then((favorites) => {
                let userFavorites = null;
                if (favorites && favorites.length > 0) {
                    userFavorites = favorites[0];
                } else {
                    userFavorites = new Favorites({ user: req.user._id });
                }
                req.body.forEach(dish => {
                    if (userFavorites.dishes.indexOf(dish._id) === -1) {
                        userFavorites.dishes.push(dish._id);
                    }
                });
                userFavorites.save()
                    .then((favoritesSaved) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(favoritesSaved);
                    }, (err) => next(err));

            })
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorites.remove({ user: req.user._id })
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


favoriteRouter.route('/:dishId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .then((favorites) => {
                let userFavorites = null;
                if (favorites && favorites.length > 0) {
                    userFavorites = favorites[0];
                } else {
                    userFavorites = new Favorites({ user: req.user._id });
                }
                if (userFavorites.dishes.indexOf(req.params.dishId) === -1) {
                    userFavorites.dishes.push(req.params.dishId);
                }
                userFavorites.save()
                    .then((favoritesSaved) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(favoritesSaved);
                    }, (err) => next(err));

            })
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .then((favorites) => {
                let userFavorites = null;
                if (favorites && favorites.length > 0) {
                    userFavorites = favorites[0];
                    let dishIndex = userFavorites.dishes.indexOf(req.params.dishId);
                    if (dishIndex > -1) {
                        userFavorites.dishes.splice(dishIndex, 1);
                    }
                    userFavorites.save()
                        .then((favoritesSaved) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(favoritesSaved);
                        }, (err) => next(err));
                } else {
                    err = new Error(`No favorites found for the user ${req.user._id}`);
                    err.status = 404;
                    return next(err);
                }

            })
            .catch((err) => next(err));
    });

module.exports = favoriteRouter;
