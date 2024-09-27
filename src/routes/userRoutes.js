const express = require("express");
const { getAllusers, getUserById } = require("../controllers/userController");
const { model } = require("mongoose");
const router = express.Router();

router.get("/users", getAllusers);
router.get("/users/:id", getUserById);

module.exports = router;
