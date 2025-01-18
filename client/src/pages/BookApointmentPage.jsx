import { useState } from "react";

const BookAppointmentPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        appointmentDate: "",
        appointmentTime: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.phone || !formData.appointmentDate || !formData.appointmentTime) {
            alert("Please fill in all required fields.");
            return;
        }
        // Simulate form submission success
        setIsSubmitted(true);
        console.log("Form Submitted", formData);

        // Reset form data
        setFormData({
            username: "",
            phone: "",
            appointmentDate: "",
            appointmentTime: "",
            message: "",
        });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Book an Appointment</h2>
            {isSubmitted && <p className="text-green-500 text-center mb-4">Your appointment has been booked!</p>}
            <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Date of Appointment */}
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="appointmentDate">Appointment Date</label>
                    <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Time of Appointment */}
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="appointmentTime">Appointment Time</label>
                    <input
                        type="time"
                        id="appointmentTime"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Message */}
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="message">Description (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Any specific details or requests"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Book Appointment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookAppointmentPage;
