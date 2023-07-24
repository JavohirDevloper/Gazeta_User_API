const express = require("express");
const { postDesc, getDesc, patchDesc, deleteDesc } = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/desc/", isLoggedIn, postDesc);
router.get("/desc/", isLoggedIn, getDesc);
router.patch("/desc/:id", isLoggedIn, patchDesc);
router.delete("/desc/:id", isLoggedIn, deleteDesc);

module.exports = router;
