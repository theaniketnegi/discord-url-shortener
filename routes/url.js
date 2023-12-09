const express = require('express');
const {shortenURL} = require('../controllers/url');

const router = express.Router();

router.post('/', shortenURL);

module.exports = router;