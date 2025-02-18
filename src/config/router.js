const express = require('express');
const http = require('http');
const UserRouter = require('../components/User/router');
const AuthRouter = require('../components/Auth/router');


module.exports = {
/**
     * @function
     * @param {express.Application} app
     * @summary init Application router
     * @returns void
     */
  init(app) {
    const router = express.Router();

    /**
         * Forwards any requests to the /v2/users URI to AuthRouter.
         * @name /v2/users
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
    app.use('/v2/users', AuthRouter);
    /**
         * Forwards any requests to the /v2/users URI to AuthRouter.
         * @name /v1/users
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
    app.use('/v1/users', UserRouter);

    /**
         * @description No results returned mean the object is not found
         * @function
         * @inner
         * @param {callback} middleware - Express middleware.
         */
    app.use((req, res) => {
      res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
         * @function
         * @inner
         * @param {express.Router}
         */
    app.use(router);

 },
};
