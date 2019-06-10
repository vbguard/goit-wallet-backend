const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');

const auth = require('./auth');
const wallet = require('./wallet');

const router = express.Router();

// Some config for swagger
// Register
/**
 * @swagger
 *
 * /api/auth/sign-up:
 *   post:
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
 *              - name
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                  type: string
 *               password:
 *                  type: string
 *     responses:
 *       200:
 *         description: Return plain user data
 *       400:
 *         description: If not correct data request
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: "some error text written here"
 */

// Login
/**
 * @swagger
 *
 * /api/login:
 *   post:
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
 *                  example: {}
 *                token:
 *                 type: string
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iLCJuYW1lIjoiVGVzdCBTdXBlIiwiaWF0IjoxNTUzNTU2MzA2LCJleHAiOjE1NTM1NjYzMDZ9.I2V0TAlpJQdLz0x03gpfJpEPhR17MBvIyFzI3WuVXY4"
 *       400:
 *         description: If not correct data request
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  example: "some error text here"
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
router.use('/auth', auth);
/**
 * @swagger
 *
 * /api/wallets/transactions:
 *   post:
 *     security:
 *        type: https
 *        scheme: bearer
 *        bearerFormat: JWT
 *     tags:
 *       - Protected Routes
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - email
 *              - password
 *             properties:
 *               id:
 *                  type: string
 *                  example: "some id"
 *               date:
 *                  type: string
 *                  example: "date"
 *               type:
 *                  type: string
 *                  example: "some id"
 *               category:
 *                  type: string
 *                  example: "category"
 *               comments:
 *                  type: string
 *                  example: "comments"
 *               amount:
 *                  type: number
 *                  example: "amount"
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          required: true
 *          schema:
 *             type: string
 *             example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iLCJuYW1lIjoiVGVzdCBTdXBlIiwiaWF0IjoxNTUzNTU3NzI0LCJleHAiOjE1NTM1Njc3MjR9.Yuqy_d1NheW5osTAdzjSUrgAurZtXIZMjQnpTTufzhs"
 *          description: When you login write token to localStorage. Example - Bearer eyJhbGciOiJIUzI1N...
 *     responses:
 *       200:
 *         description: Return json with this transaction
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                transactions:
 *                  type: object
 *   get:
 *     tags:
 *        - Protected Routes
 *     security:
 *        type: https
 *        scheme: bearer
 *        bearerFormat: JWT
 *     parameters:
 *        - in: header
 *          name: Authorization
 *          required: true
 *          schema:
 *             type: string
 *             example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iLCJuYW1lIjoiVGVzdCBTdXBlIiwiaWF0IjoxNTUzNTU3NzI0LCJleHAiOjE1NTM1Njc3MjR9.Yuqy_d1NheW5osTAdzjSUrgAurZtXIZMjQnpTTufzhs"
 *          description: When you login write token to localStorage. Example - Bearer eyJhbGciOiJIUzI1N...
 *     responses:
 *       200:
 *         description: Return json with all transactions (data) and total balance
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                total balance:
 *                  type: string
 *                data:
 *                  type: object
 */
router.use('/wallets', isAuthenticated, wallet);

module.exports = router;
