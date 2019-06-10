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
 */
/**
 * @swagger
 *
 * /api/auth/login:
 *    post:
 *     tags:
 *       - Public Routes
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - email
 *              - password
 *             properties:
 *               email:
 *                  type: string
 *                  example: "user@user.com"
 *               password:
 *                  type: string
 *                  example: "userPassword"
 *     responses:
 *       200:
 *         description: Return json with User data create
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 *                  example: {"id": "5c9962d4dee9ba402c2a86f9","email": "test@test.test","name": "Test Name"}
 *                token:
 *                 type: string
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iLCJuYW1lIjoiVGVzdCBTdXBlIiwiaWF0IjoxNTUzNTU2MzA2LCJleHAiOjE1NTM1NjYzMDZ9.I2V0TAlpJQdLz0x03gpfJpEPhR17MBvIyFzI3WuVXY4"
 */

/**
 * @swagger
 *
 * /api/auth/logout:
 *    get:
 *     tags:
 *       - Public Routes
 *     responses:
 *       200:
 *         description: Return json message "User successfully logout"
 */
