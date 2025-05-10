import React, { useState, useEffect } from "react";
import axios from "axios";
import './twowheel.css'; 

function Ed() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    phone: "",
    count: "",
    mname: "",
    mtype: "",
    time: "",
    price: "",
    status: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post(
          "http://localhost/moviebackend/controllers/api/User/Get/getticket.php",
          { mtype: "action" },
          { headers: { "Content-Type": "application/json" } }
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditFormData(user);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
    setEditFormData({
      name: "",
      phone: "",
      count: "",
      mname: "",
      mtype: "",
      time: "",
      price: "",
      status: "",
    });
  };

  const handleSaveClick = async () => {
    try {
      await axios.post(
        "http://localhost/moviebackend/controllers/api/admin/put/ticket.php",
        { id: editUserId, ...editFormData },
        { headers: { "Content-Type": "application/json" } }
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editUserId ? { ...user, ...editFormData } : user
        )
      );
      alert("User updated successfully");
      handleCancelClick();
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Failed to update user");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(
        "http://localhost/moviebackend/controllers/api/admin/delete/ticket.php",
        { id },
        { headers: { "Content-Type": "application/json" } }
      );
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="ud">
      <div className="containeruser">
        <table className="users-table"style={{ backgroundColor: 'white' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Tickets</th>
              <th>Movie Name</th>
              <th>Movie Type</th>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                {editUserId === user.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="phone"
                        value={editFormData.phone}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="count"
                        value={editFormData.count}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="mname"
                        value={editFormData.mname}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="mtype"
                        value={editFormData.mtype}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        name="time"
                        value={editFormData.time}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="price"
                        value={editFormData.price}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="status"
                        value={editFormData.status}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <button onClick={handleSaveClick}>Save</button>
                      <button onClick={handleCancelClick}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.count}</td>
                    <td>{user.mname}</td>
                    <td>{user.mtype}</td>
                    <td>{user.time}</td>
                    <td>{user.price}</td>
                    <td>{user.status}</td>
                    <button
                        className="edit-btn"
                        onClick={() => handleEditClick(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                  
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ed;
