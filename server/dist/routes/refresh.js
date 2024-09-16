"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const handleRefresh = require('../controllers/refreshTokenController');
const refreshRoute = express.Router();
// POST requests allow you to send data in the body of the request, which is the standard way to submit credentials for authentication. This keeps the credentials out of the URL and out of browser history.
refreshRoute.get('/', handleRefresh);
module.exports = refreshRoute;
//# sourceMappingURL=refresh.js.map