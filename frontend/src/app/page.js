// "use client";

// import { axiosInstance } from "@/lib/axios";
// import { formatISO } from "date-fns";
// import { useEffect, useState } from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function Home() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     guest: "",
//     bookingDate: null,
//     bookingTime: "",
//   });
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [bookedSlots, setBookedSlots] = useState([]);

//   useEffect(() => {
//     setTimeSlots([
//       "12pm-1pm",
//       "1pm-2pm",
//       "2pm-3pm",
//       "3pm-4pm",
//       "4pm-5pm",
//       "5pm-6pm",
//       "6pm-7pm",
//       "7pm-8pm",
//       "8pm-9pm",
//       "9pm-10pm",
//       "10pm-11pm",
//     ]);
//   }, []);

//   useEffect(() => {
//     if (formData.bookingDate) {
//       console.log("Fetching booked slots for:", formData.bookingDate);
//       fetchBookedSlots(formData.bookingDate); // Trigger fetch when the date is set
//     }
//   }, [formData.bookingDate]);

//   const fetchBookedSlots = async (date) => {
//     try {
//       const response = await axiosInstance.get("/bookings/unavailable-slots", {
//         params: { bookingDate: formatISO(date).split("T")[0] },
//       });
//       console.log("booked slot res", response);
//       setBookedSlots(response.data.bookedSlots);
//     } catch (err) {
//       // console.error("Error fetching booked slots:", err);
//       setBookedSlots([]);
//     }
//   };

//   const handleDateChange = (date) => {
//     console.log(date);
//     setFormData({ ...formData, bookingDate: date });
//     fetchBookedSlots(date);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBooking = async () => {
//     const { bookingDate, guest, bookingTime, fullName, email } = formData;

//     if (!bookingDate || !guest || !bookingTime || !fullName || !email) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post("/bookings", {
//         fullName,
//         email,
//         guest,
//         bookingDate: formatISO(bookingDate),
//         bookingTime,
//       });
//       // console.log(response);
//       alert(response?.data?.message);
//     } catch (error) {
//       // console.error(error);
//       alert(error.response?.data?.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
//         Restaurant Table Booking
//       </h1>

//       <form className="w-full space-y-4">
//         <div>
//           <label className="block">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Enter your full name"
//             className="w-full p-2 mb-4 border rounded"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             className="w-full p-2 mb-4 border rounded"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Date</label>
//           <DatePicker
//             selected={formData.bookingDate}
//             onChange={handleDateChange}
//             minDate={new Date()}
//             maxDate={new Date(new Date().setDate(new Date().getDate() + 10))}
//             className="w-full p-2 mb-4 border rounded"
//             placeholderText="selecte from next 10 days"
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Guests</label>
//           <select
//             name="guest"
//             value={formData.guest}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           >
//             <option value="">Select Number of Guests</option>
//             {[...Array(20)].map((_, index) => (
//               <option key={index + 1} value={index + 1}>
//                 {index + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block">Time</label>
//           <select
//             name="bookingTime"
//             value={formData.bookingTime}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           >
//             <option value="">Select Time</option>
//             {timeSlots.map((slot) => (
//               <option
//                 key={slot}
//                 value={slot}
//                 disabled={bookedSlots.includes(slot)} // Disable booked slots
//               >
//                 {slot}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           type="button"
//           onClick={handleBooking}
//           className="w-full bg-blue-500 text-white py-2 rounded"
//         >
//           Book Table
//         </button>
//       </form>
//     </div>
//   );
// }

// before tash icon
// "use client";

// import { axiosInstance } from "@/lib/axios";
// import { formatISO } from "date-fns";
// import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function Home() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     guest: "",
//     bookingDate: null,
//     bookingTime: "",
//   });
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [bookedSlots, setBookedSlots] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for controlling sidebar visibility

//   useEffect(() => {
//     setTimeSlots([
//       "12pm-1pm",
//       "1pm-2pm",
//       "2pm-3pm",
//       "3pm-4pm",
//       "4pm-5pm",
//       "5pm-6pm",
//       "6pm-7pm",
//       "7pm-8pm",
//       "8pm-9pm",
//       "9pm-10pm",
//       "10pm-11pm",
//     ]);
//   }, []);

//   useEffect(() => {
//     if (formData.bookingDate) {
//       fetchBookedSlots(formData.bookingDate);
//     }
//   }, [formData.bookingDate]);

//   const fetchBookedSlots = async (date) => {
//     try {
//       const response = await axiosInstance.get("/bookings/unavailable-slots", {
//         params: { bookingDate: formatISO(date).split("T")[0] },
//       });
//       setBookedSlots(response.data.bookedSlots);
//     } catch (err) {
//       setBookedSlots([]);
//     }
//   };

//   const handleDateChange = (date) => {
//     setFormData({ ...formData, bookingDate: date });
//     fetchBookedSlots(date);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBooking = async () => {
//     const { bookingDate, guest, bookingTime, fullName, email } = formData;

//     if (!bookingDate || !guest || !bookingTime || !fullName || !email) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post("/bookings", {
//         fullName,
//         email,
//         guest,
//         bookingDate: formatISO(bookingDate),
//         bookingTime,
//       });

//       // Construct the booking confirmation message
//       const confirmationMessage = `
//         Booking Confirmed!\n
//         Name: ${fullName}\n
//         Email: ${email}\n
//         Number of Guests: ${guest}\n
//         Date: ${new Date(bookingDate).toLocaleDateString()}\n
//         Time: ${bookingTime}
//       `;

//       // Display the alert with booking details
//       alert(confirmationMessage);
//     } catch (error) {
//       alert(error.response?.data?.message);
//     }
//   };

//   // const handleBooking = async () => {
//   //   const { bookingDate, guest, bookingTime, fullName, email } = formData;
//   //   if (!bookingDate || !guest || !bookingTime || !fullName || !email) {
//   //     alert("Please fill in all fields.");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await axiosInstance.post("/bookings", {
//   //       fullName,
//   //       email,
//   //       guest,
//   //       bookingDate: formatISO(bookingDate),
//   //       bookingTime,
//   //     });
//   //     alert(response?.data?.message);
//   //   } catch (error) {
//   //     alert(error.response?.data?.message);
//   //   }
//   // };

//   const fetchBookings = async () => {
//     try {
//       const response = await axiosInstance.get("/bookings");
//       setBookings(response.data);
//       setIsSidebarOpen(true);
//     } catch (error) {
//       alert("Failed to fetch bookings");
//     }
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto flex flex-col items-center justify-center">
//       <div className="flex justify-between w-full mb-4">
//         <h1 className="text-2xl font-bold">Restaurant Table Booking</h1>
//         <button
//           onClick={fetchBookings}
//           className="bg-green-500 text-white py-2 px-4 rounded"
//         >
//           Get Bookings
//         </button>
//       </div>

//       {/* Side Navigation Panel */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
//           <div className="absolute right-0 top-0 bg-white w-96 h-full shadow-lg p-6">
//             <button
//               onClick={closeSidebar}
//               className="absolute top-2 right-2 text-xl text-red-500"
//             >
//               ×
//             </button>
//             <h2 className="text-xl font-semibold mb-4">All Bookings</h2>
//             <ul className="space-y-2">
//               {bookings.length > 0 ? (
//                 bookings.map((booking) => (
//                   <li key={booking.id} className="border-b py-2">
//                     <p>{`Name: ${booking.fullName}`}</p>
//                     <p>{`Email: ${booking.email}`}</p>
//                     <p>{`Guests: ${booking.guest}`}</p>
//                     <p>{`Date: ${booking.bookingDate}`}</p>
//                     <p>{`Time: ${booking.bookingTime}`}</p>
//                   </li>
//                 ))
//               ) : (
//                 <p>No bookings available.</p>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Form to handle new booking */}
//       <form className="w-full space-y-4">
//         {/* Your existing form fields... */}
//         <div>
//           <label className="block">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Enter your full name"
//             className="w-full p-2 mb-4 border rounded"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             className="w-full p-2 mb-4 border rounded"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Date</label>
//           <DatePicker
//             selected={formData.bookingDate}
//             onChange={handleDateChange}
//             minDate={new Date()}
//             maxDate={new Date(new Date().setDate(new Date().getDate() + 10))}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block">Guests</label>
//           <select
//             name="guest"
//             value={formData.guest}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           >
//             <option value="">Select Number of Guests</option>
//             {[...Array(20)].map((_, index) => (
//               <option key={index + 1} value={index + 1}>
//                 {index + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block">Time</label>
//           <select
//             name="bookingTime"
//             value={formData.bookingTime}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           >
//             <option value="">Select Time</option>
//             {timeSlots.map((slot) => (
//               <option
//                 key={slot}
//                 value={slot}
//                 disabled={bookedSlots.includes(slot)} // Disable booked slots
//               >
//                 {slot}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           type="button"
//           onClick={handleBooking}
//           className="w-full bg-blue-500 text-white py-2 rounded"
//         >
//           Book Table
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { axiosInstance } from "@/lib/axios";
import { formatISO } from "date-fns";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidenav from "@/components/ui/Sidenav";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guest: "",
    bookingDate: null,
    bookingTime: "",
  });
  const [timeSlots, setTimeSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for controlling sidebar visibility

  // Fetch and update time slots on load
  useEffect(() => {
    setTimeSlots([
      "12pm-1pm",
      "1pm-2pm",
      "2pm-3pm",
      "3pm-4pm",
      "4pm-5pm",
      "5pm-6pm",
      "6pm-7pm",
      "7pm-8pm",
      "8pm-9pm",
      "9pm-10pm",
      "10pm-11pm",
    ]);
  }, []);

  // Fetch booked slots whenever booking date changes
  useEffect(() => {
    if (formData.bookingDate) {
      fetchBookedSlots(formData.bookingDate);
    }
  }, [formData.bookingDate]);

  const fetchBookedSlots = async (date) => {
    try {
      const response = await axiosInstance.get("/bookings/unavailable-slots", {
        params: { bookingDate: formatISO(date).split("T")[0] },
      });
      setBookedSlots(response.data.bookedSlots);
    } catch (err) {
      setBookedSlots([]);
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, bookingDate: date });
    fetchBookedSlots(date);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the booking creation and show confirmation
  const handleBooking = async () => {
    const { bookingDate, guest, bookingTime, fullName, email } = formData;

    if (!bookingDate || !guest || !bookingTime || !fullName || !email) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axiosInstance.post("/bookings", {
        fullName,
        email,
        guest,
        bookingDate: formatISO(bookingDate),
        bookingTime,
      });

      const confirmationMessage = `
        Booking Confirmed!\n
        Name: ${fullName}\n
        Email: ${email}\n
        Number of Guests: ${guest}\n
        Date: ${new Date(bookingDate).toLocaleDateString()}\n
        Time: ${bookingTime}
      `;
      console.log(response);
      alert(confirmationMessage);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  // Fetch existing bookings
  const fetchBookings = async () => {
    try {
      const response = await axiosInstance.get("/bookings");
      console.log(response);
      setBookings(response.data);
      setIsSidebarOpen(true);
    } catch (error) {
      alert("Failed to fetch bookings");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto flex flex-col items-center justify-center">
      <div className="flex justify-between w-full mb-4">
        <h1 className="text-2xl font-bold">Restaurant Table Booking</h1>
        <button
          onClick={fetchBookings}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Get Bookings
        </button>
      </div>

      {/* Side Navigation Panel */}
      {isSidebarOpen && (
        <Sidenav
          setIsSidebarOpen={setIsSidebarOpen}
          setBookings={setBookings}
          bookings={bookings}
        />
      )}

      {/* Form to handle new booking */}
      <form className="w-full space-y-4">
        <div>
          <label className="block">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full p-2 mb-4 border rounded"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block">Date</label>
          <DatePicker
            selected={formData.bookingDate}
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={new Date(new Date().setDate(new Date().getDate() + 10))}
            className="w-full p-2 mb-4 border rounded"
            required
          />
        </div>

        <div>
          <label className="block">Guests</label>
          <select
            name="guest"
            value={formData.guest}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          >
            <option value="">Select Number of Guests</option>
            {[...Array(20)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block">Time</label>
          <select
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          >
            <option value="">Select Time</option>
            {timeSlots.map((slot) => (
              <option
                key={slot}
                value={slot}
                disabled={bookedSlots.includes(slot)} // Disable booked slots
              >
                {slot}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleBooking}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Book Table
        </button>
      </form>
    </div>
  );
}
