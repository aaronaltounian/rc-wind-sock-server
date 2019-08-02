const express = require('express');
const { retrieve, create } = require('../controllers/PlaneController');
const router = express.Router();

router.get('/planes', retrieve);
router.post('/add-plane', create)

module.exports = router;