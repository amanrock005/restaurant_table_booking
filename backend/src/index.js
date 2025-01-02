import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import bookingRoutes from "./routes/booking.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/bookings", bookingRoutes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
  connectDB();
});
