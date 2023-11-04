import express from "express";
import mongoose from "mongoose";
import bookingRouter from "./routes/booking.route.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
app.use(cors({
    credentials:true
}));
app.use("/api/auth", bookingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message=err.message||"Internal Server error"
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
