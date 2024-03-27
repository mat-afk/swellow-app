import express from "express";
import signup from "../controllers/auth/signup.auth.controller.js";
import login from "../controllers/auth/login.auth.controller.js";
import logout from "../controllers/auth/logout.auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
