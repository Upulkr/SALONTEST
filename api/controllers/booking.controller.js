import Booking from "../models/booking.model.js";

export const booking = async (req, res, next) => {
  console.log(req.body);

  const { name, email, phone, date, time } = req.body;

  const newBooking = new Booking({ name, email, phone, date, time });

  try {
    await newBooking.save();
    res.status(201).json("Booking is created successfully");
  } catch (error) {
    next(error);
  }
};
