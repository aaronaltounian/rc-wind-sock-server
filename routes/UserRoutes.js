const express = require("express");
const {create, display} = require( "../controllers/UserController");
const router = express.Router();

router.post("/api/users", create);
router.get("/api/users", display);
module.exports = router;
