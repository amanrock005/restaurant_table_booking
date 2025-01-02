import Booking from "../models/booking.model.js";

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Booking ID is required" });
    }
    const deleteBooking = await Booking.findByIdAndDelete(id);
    if (!deleteBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error("error deleting booking: ", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings", error: err });
  }
};

export const createBooking = async (req, res) => {
  const { fullName, guest, email, bookingDate, bookingTime } = req.body;
  if (!fullName || !guest || !email || !bookingDate || !bookingTime) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const parsedDate = new Date(bookingDate);
  if (isNaN(parsedDate.getTime())) {
    return res.status(400).json({ message: "Invalid booking date" });
  }

  try {
    const existingBooking = await Booking.findOne({ bookingDate, bookingTime });
    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "time slot already booked. Select a different slot" });
    }

    const booking = new Booking({
      fullName,
      guest,
      email,
      bookingDate: parsedDate,
      bookingTime,
    });

    await booking.save();

    res.status(201).json({ message: "Booking confirmed" });
  } catch (err) {
    res.status(500).json({ message: "server error. please try again later" });
  }
};

export const getUnavailableSlots = async (req, res) => {
  const { bookingDate } = req.query;
  console.log(bookingDate);

  if (!bookingDate) {
    return res.status(400).json({ message: "Booking date is required" });
  }

  try {
    const normalizedDate = new Date(bookingDate).toISOString().split("T")[0];

    const bookings = await Booking.find({ bookingDate: normalizedDate });
    const bookedSlots = bookings.map((booking) => booking.bookingTime);

    res.status(200).json({ bookedSlots });
  } catch (err) {
    console.error("Error fetching unavailable slots:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export const updateBooking = async (req, res) => {};
