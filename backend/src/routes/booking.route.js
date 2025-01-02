import express from "express";
import {
  createBooking,
  deleteBooking,
  getAllBooking,
  getUnavailableSlots,
  updateBooking,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.get("/", getAllBooking);
router.post("/", createBooking);
router.get("/unavailable-slots", getUnavailableSlots);

router.delete("/:id", deleteBooking);
router.put("/:id", updateBooking);

export default router;
