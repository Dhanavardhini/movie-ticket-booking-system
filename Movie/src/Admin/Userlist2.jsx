import axios from 'axios';
import './userlist.css';
import React, { useEffect, useState } from 'react';

function Userslist2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost/vechilebackend/controllers/api/User/Get/four.php');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditFormData(user);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(
        `http://localhost/vechilebackend/controllers/api/admin/put/fourupdate.php`,
        editFormData
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUserId ? { ...user, ...editFormData } : user
        )
      );
      setEditingUserId(null);

      alert('User updated successfully');
    } catch (err) {
      console.error('Error updating user:', err);
      alert('Failed to update user');
    }
  };

  const handleCancelClick = () => {
    setEditingUserId(null);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost/vechilebackend/controllers/api/admin/delete/four.php`,
        { id }
      );
      if (response.data.message === "success") {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        alert("User deleted successfully");
      } else {
        throw new Error(response.data?.message || "Unknown error occurred");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="ud">
      <div className="containeruser">
        <table className="users-table">
          <thead>
            <tr className="table-row">
              <th className="table-header">Name</th>
              <th className="table-header">Email</th>
              <th className="table-header">Phone</th>
              <th className="table-header">Number of Days</th>
              <th className="table-header">Pickup Location</th>
              <th className="table-header">From Date</th>
              <th className="table-header">To Date</th>
              <th className="table-header">Price</th>
              <th className="table-header">Actions</th>
              <th className="table-header">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="table-row" key={user.id}>
                {editingUserId === user.id ? (
                  <>
                    <td className="table-cell">
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="email"
                        name="email"
                        value={editFormData.email}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="text"
                        name="phone"
                        value={editFormData.phone}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="number"
                        name="number_of_days"
                        value={editFormData.number_of_days}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="text"
                        name="pickup_location"
                        value={editFormData.pickup_location}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="date"
                        name="from_date"
                        value={editFormData.from_date}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="date"
                        name="to_date"
                        value={editFormData.to_date}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="number"
                        name="price"
                        value={editFormData.price}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <button className="save-btn" onClick={handleSaveClick}>
                        Save
                      </button>
                      <button className="cancel-btn" onClick={handleCancelClick}>
                        Cancel
                      </button>
                    </td>
                    <td className="table-cell">
                      <input
                        type="text"
                        name="status"
                        value={editFormData.status}
                        onChange={handleInputChange}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="table-cell">{user.name}</td>
                    <td className="table-cell">{user.email}</td>
                    <td className="table-cell">{user.phone}</td>
                    <td className="table-cell">{user.number_of_days}</td>
                    <td className="table-cell">{user.pickup_location}</td>
                    <td className="table-cell">{user.from_date}</td>
                    <td className="table-cell">{user.to_date}</td>
                    <td className="table-cell">{user.price}</td>
                    <td className="table-cell">
                      <button
                        className="edit-btn"
                        title="Edit user"
                        onClick={() => handleEditClick(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        title="Delete user"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td className="table-cell">{user.status}</td>
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

export default Userslist2;





