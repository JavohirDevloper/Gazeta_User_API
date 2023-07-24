const express = require("express");
const {
  postRegisterUser,
  postLoginUser,
  patchUser,
  getMe,
  deleteMe,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/users/register", postRegisterUser);
router.post("/users/login", postLoginUser);
router.get("/users/me", isLoggedIn, getMe);
router.patch("/users/", isLoggedIn, patchUser);
router.delete("/users/", isLoggedIn, deleteMe);

module.exports = router;
