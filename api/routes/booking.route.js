import express from "express";
import { booking } from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/booking", booking);

export default router;
