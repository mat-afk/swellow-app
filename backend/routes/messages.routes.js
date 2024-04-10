import express from "express";

import protectRoute from "../middleware/protectRoute.js";
import sendMessage from "../controllers/messages/send.messages.controller.js";
import getMessages from "../controllers/messages/get.messages.controller.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
