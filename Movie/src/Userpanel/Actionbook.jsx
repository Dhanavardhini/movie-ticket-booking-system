import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./bookform.css";

function Booked() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    count: "",
    mname: "",
    mtype: "",
    time: "",
    price: 0,
    status:""
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { ticket_price = 0, movie_name = '', movie_type = '' } = location.state || {};

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      mname: movie_name,
      mtype: movie_type,
    }));
  }, [movie_name, movie_type]);

  useEffect(() => {
    if (formData.count && ticket_price) {
      const calculatedPrice = Number(formData.count) * ticket_price;
      setFormData((prevData) => ({
        ...prevData,
        price: calculatedPrice,
      }));
    }
  }, [formData.count, ticket_price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/moviebackend/controllers/api/User/post/ticket.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data.message);
      alert("Movie tickets booked successfully!");
      navigate("/bookaction");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div className="whole">
      <div className="vr-body">
        <div className="vr-container">
          <h1 className="vr-title">Movie Ticket Booking Form</h1>
          <form className="vr-form" onSubmit={handleSubmit}>
            <div className="vr-form-group">
              <label className="vr-label">Name:</label>
              <input
                className="vr-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="vr-form-group">
              <label className="vr-label">Phone Number:</label>
              <input
                className="vr-input"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="vr-form-group">
              <label className="vr-label">Number of Tickets:</label>
              <input
                className="vr-input"
                type="number"
                name="count"
                value={formData.count}
                onChange={handleChange}
                required
              />
            </div>

            <div className="vr-form-group">
              <label className="vr-label">Movie Title:</label>
              <input
                className="vr-input"
                type="text"
                name="mname"
                value={formData.mname}
                onChange={handleChange}
                required
                disabled
              />
            </div>

            <div className="vr-form-group">
              <label className="vr-label">Movie Type:</label>
              <input
                className="vr-input"
                type="text"
                name="mtype"
                value={formData.mtype}
                onChange={handleChange}
                required
                disabled
              />
            </div>

            <div className="vr-form-group">
              <label className="vr-label">Show Time:</label>
              <input
                className="vr-input"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="vr-form-group">
              <label className="vr-label">Total Price:</label>
              <input
                className="vr-input"
                type="text"
                value={formData.price || "N/A"}
                disabled
              />
            </div>

            <button className="vr-submit-btn" type="submit">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booked;


