import { Trash2 } from "lucide-react";
import { axiosInstance } from "@/lib/axios";

export default function Sidenav({ setIsSidebarOpen, setBookings, bookings }) {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleDeleteBooking = async (id) => {
    console.log(id);
    try {
      const response = await axiosInstance.delete(`/bookings/${id}`);
      alert(response?.data?.message);
      setBookings(bookings.filter((booking) => booking.id !== id));
      window.location.reload();
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  console.log(bookings);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 bg-white w-96 h-full shadow-lg p-6">
        <button
          onClick={closeSidebar}
          className="absolute top-2 right-2 text-xl text-red-500"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">All Bookings</h2>
        <ul className="space-y-2">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <li
                key={booking._id}
                className="border-b py-2 flex justify-between"
              >
                <div>
                  <p>{`Name: ${booking.fullName}`}</p>
                  <p>{`Email: ${booking.email}`}</p>
                  <p>{`Guests: ${booking.guest}`}</p>
                  <p>{`Date: ${booking.bookingDate}`}</p>
                  <p>{`Time: ${booking.bookingTime}`}</p>
                </div>
                <button
                  onClick={() => handleDeleteBooking(booking._id)}
                  className="text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))
          ) : (
            <p>No bookings available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
