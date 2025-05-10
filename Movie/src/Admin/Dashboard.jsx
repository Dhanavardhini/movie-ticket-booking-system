import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import axios from 'axios';

export default function Dashboard() {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalBookings, setTotalBookings] = useState(0);

    useEffect(() => {
       
        axios.get('http://localhost/moviebackend/controllers/api/User/Get/user.php')
            .then(response => {
                console.log('Users Response:', response.data);
                const count = response.data.length;
                setTotalUsers(count);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

        
        axios.get('http://localhost/moviebackend/controllers/api/User/Get/totalbook.php') 
            .then(response => {
                console.log('Bookings Response:', response.data);
                const count = response.data.length;
                setTotalBookings(count);
            })
            .catch(error => {
                console.error('Error fetching booking data:', error);
            });
    }, []);

    return (
        <>
            <main className="main-content">
                <div className="container">
                    <section className="summary-cards">
                        <div className="card1">
                            <h2>User Details</h2>
                            <p><FaAngleDoubleDown /></p>
                        </div>
                        <div className="card1">
                            <h2>Booking Details</h2>
                            <p><FaAngleDoubleDown /></p>
                        </div>

                        <div className="card2">
                            <h3>Total Users</h3>
                            <p>{totalUsers}</p>
                        </div>
                        <div className="card2">
                            <h3>Total Bookings</h3>
                            <p>{totalBookings}</p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
