import React, { useEffect, useState } from 'react';
import './mybook.css';

function Mybooking() {
  const [movieBookings, setMovieBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost/moviebackend/controllers/api/User/Get/getticket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mtype: 'kids' }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const movieData = await response.json();
        setMovieBookings(movieData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const renderTableRows = (bookings) => {
    if (bookings.length === 0) {
      return (
        <tr>
          <td colSpan="8">No bookings available</td>
        </tr>
      );
    }

    return bookings.map((booking, index) => (
      <tr key={index} className="vrs-table-row">
        <td className="vrs-table-cell" data-label="Name">{booking.name}</td>
        <td className="vrs-table-cell" data-label="Phone">{booking.phone}</td>
        <td className="vrs-table-cell" data-label="Count">{booking.count}</td>
        <td className="vrs-table-cell" data-label="Movie Name">{booking.mname}</td>
        <td className="vrs-table-cell" data-label="Movie Type">{booking.mtype}</td>
        <td className="vrs-table-cell" data-label="Time">{booking.time}</td>
        <td className="vrs-table-cell" data-label="Price">{booking.price}</td>
        <td className="vrs-table-cell" data-label="Status">
          {booking.status || booking.status}
        </td>
      </tr>
    ));
  };

  return (
    <div className="main-mybook">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="vrs-container">
        <h1 className="vrs-heading">Movie Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Count</th>
              <th className="vrs-table-cell">Movie Name</th>
              <th className="vrs-table-cell">Movie Type</th>
              <th className="vrs-table-cell">Time</th>
              <th className="vrs-table-cell">Price</th>
              <th className="vrs-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(movieBookings)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mybooking;
