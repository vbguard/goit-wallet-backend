const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');

const auth = require('./auth');
const wallet = require('./wallet');

const router = express.Router();

router.use('/auth', auth);
router.use('/wallets', isAuthenticated, wallet);

module.exports = router;

/**
 * @swagger
 *
 * /api/wallets/transaction:
 *    get:
 *     security:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 *     parameters:
 *            - in: path
 *              name: userId
 *              description: user ID must ending url(path) to fetch
 *              required: true
 *              schema:
 *                type: string
 *            - in: header
 *              name: Authorization
 *              description: Must present in Headers to access to this route. Example - "Authorization" "Bearer eyJhbGciOiJIUzI1N..."
 *              required: true
 *              schema:
 *                type: string
 *                example: "Bearer eyJhbGciOiJIUzI1NiIsInRkpXVCJ9.eyJpZCVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iXBlIiwiaWF0IjoxNTUzNTU3NzI0LCJleHAiOjE1NTM1Njc3MjR9.Yuqy_d1NheW5osTAdzjSUrgAurZtXIZMjQnpTTufzhs"
 *              style: simple
 *     tags:
 *       - Protected Routes
 *     responses:
 *       200:
 *         description: Return json with User datca create
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                finance:
 *                  type: object
 *                  example: {}
 *       400:
 *         description: If not correct data request
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  example: "Not found finance data with this user ID"
 *    post:
 *     security:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 *     parameters:
 *            - in: path
 *              name: userId
 *              description: user ID must ending url(path) to fetch
 *              required: true
 *              schema:
 *                type: string
 *            - in: header
 *              name: Authorization
 *              description: Must present in Headers to access to this route. Example - "Authorization" "Bearer eyJhbGciOiJIUzI1N..."
 *              required: true
 *              schema:
 *                type: string
 *                example: "Bearer eyJhbGciOiJIUzI1NiIsInRkpXVCJ9.eyJpZCVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iXBlIiwiaWF0IjoxNTUzNTU3NzI0LCJleHAiOjE1NTM1Njc3MjR9.Yuqy_d1NheW5osTAdzjSUrgAurZtXIZMjQnpTTufzhs"
 *              style: simple
 *     tags:
 *       - Protected Routes
 *     responses:
 *       200:
 *         description: Return json with User data create
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                finance:
 *                  type: object
 *                  example: {}
 *       400:
 *         description: If not correct data request
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  example: "Not found finance data with this user ID"
 */
