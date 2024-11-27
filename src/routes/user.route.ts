import express from "express";
import { getListUser } from "../controllers/user.controller";

const router = express.Router();

router.get("", getListUser);

export default router;
