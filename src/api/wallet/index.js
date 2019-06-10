const express = require('express');
const getAllHandler = require('./handlers/getAll');
const createHandler = require('./handlers/create');

const router = express.Router();

router.get('/transactions', getAllHandler);
router.post('/transactions', createHandler);

module.exports = router;
/**
 * @swagger
 *
 * /api/wallets/transactions:
 *    post:
 *     tags:
 *       - Protected Routes
 *     parameters:
 *            - in: body
 *              name: id
 *              description: User id from front-end
 *              required: true
 *              schema:
 *                type: string
 *            - in: body
 *              name: date
 *              description: transaction creation date
 *              required: true
 *              schema:
 *                type: date
 *                format: date
 *            - in: body
 *              name: type
 *              description: type transaction ('+' or '-')
 *              required: true
 *              schema:
 *                type: string
 *            - in: body
 *              name: category
 *              description: category transaction (e.g. 'Irregular Income')
 *              required: true
 *              schema:
 *                type: string
 *            - in: body
 *              name: comments
 *              description: comment about transaction
 *              schema:
 *                type: string
 *            - in: body
 *              name: amount
 *              description: transaction amount
 *              required: true
 *              schema:
 *                type: number
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

 *    get:
 *     tags:
 *       - Protected Routes
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
