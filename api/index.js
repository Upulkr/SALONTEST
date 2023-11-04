import express from "express";
import mongoose from "mongoose";
import bookingRouter from "./routes/booking.route.js";
import path from "path";
// import dotenv from "dotenv";


// dotenv.config();
const mongo = 'mongodb+srv://saloontoronto:saloontoronto@booking.makscrx.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(mongo)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


const __dirname = path.resolve()
const app = express();


app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/api/auth", bookingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error"
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
