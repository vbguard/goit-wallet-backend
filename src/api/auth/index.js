const express = require('express');

const loginHandler = require('./handlers/login');
const signUpHandler = require('./handlers/signUp');
const userLogout = require('./handlers/logout');

const router = express.Router();

router.post('/login', loginHandler);
router.post('/sign-up', signUpHandler);
router.get('/logout', userLogout);

module.exports = router;

/**
 * @swagger
 *
 * /api/auth/sign-up:
 *    post:
 *     tags:
 *       - Public Routes
 *     parameters:
 *            - in: body
 *              name: email
 *              description: User email
 *              required: true
 *              schema:
 *                type: string
 *                format: email
 *            - in: body
 *              name: password
 *              description: User password
 *              required: true
 *              schema:
 *                type: string
 *                format: password
 *            - in: body
 *              name: name
 *              description: User name
 *              required: true
 *              schema:
 *                type: string
 *     responses:
 *       200:
 *         description: Return json with user object
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 * /api/auth/login:
 *    post:
 *     tags:
 *       - Public Routes
 *     parameters:
 *            - in: body
 *              name: email
 *              description: User email
 *              required: true
 *              schema:
 *                type: string
 *                format: email
 *            - in: body
 *              name: password
 *              description: User password
 *              required: true
 *              schema:
 *                type: string
 *                format: password
 *     responses:
 *       200:
 *         description: Return json with user access jwt token
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *                user:
 *                  type: object
 * /api/auth/logout:
 *    get:
 *     tags:
 *       - Public Routes
 *     responses:
 *       200:
 *         description: Return json message "User successfully logout"
 */
