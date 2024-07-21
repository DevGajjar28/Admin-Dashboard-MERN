const express = require('express');
const mongoose = require('mongoose');
const { getAdmins, getUserPerformance } = require("../controllers/management");

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

module.exports = router;
