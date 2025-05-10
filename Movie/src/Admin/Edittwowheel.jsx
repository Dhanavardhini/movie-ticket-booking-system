import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './twowheel.css'; 

function Edittwowheel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    phone: '',
    count: '',
    mname: '',
    mtype: '',
    time: '',
    price: '',
    status: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post(
          'http://localhost/moviebackend/controllers/api/User/Get/getticket.php',
          { mtype: 'kids' },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
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

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditFormData({
      name: user.name,
      phone: user.phone,
      count: user.count,
      mname: user.mname,
      mtype: user.mtype,
      time: user.time,
      price: user.price,
      status: user.status,
    });
  };

  const handleCancelClick = () => {
    setEditingUserId(null);
    setEditFormData({
      name: '',
      phone: '',
      count: '',
      mname: '',
      mtype: '',
      time: '',
      price: '',
      status: '',
    });
  };

  const handleSaveClick = async () => {
    try {
      await axios.post(
        'http://localhost/moviebackend/controllers/api/admin/put/ticket.php',
        {
          id: editingUserId,
          ...editFormData,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setUsers(
        users.map((user) =>
          user.id === editingUserId ? { ...user, ...editFormData } : user
        )
      );
      alert('User updated successfully');
      handleCancelClick();
    } catch (err) {
      console.error('Error updating user:', err);
      alert('Failed to update user');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(
        'http://localhost/moviebackend/controllers/api/admin/delete/ticket.php',
        { id },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setUsers(users.filter((user) => user.id !== id));
      alert('User deleted successfully');
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('Failed to delete user');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="ud">
      <div className="containeruser">
        <table className="users-table">
          <thead>
            <tr className="table-row">
              <th className="table-header">Name</th>
              <th className="table-header">Phone</th>
              <th className="table-header">Tickets</th>
              <th className="table-header">Movie Name</th>
              <th className="table-header">Movie Type</th>
              <th className="table-header">Time</th>
              <th className="table-header">Price</th>
              <th className="table-header">Status</th>
              <th className="table-header">Actions</th>
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
                        type="text"
                        name="phone"
                        value={editFormData.phone}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="number"
                        name="count"
                        value={editFormData.count}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="text"
                        name="mname"
                        value={editFormData.mname}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="text"
                        name="mtype"
                        value={editFormData.mtype}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                       <input
                         type="time"
                         name="time"
                         value={editFormData.time}
                          onChange={handleInputChange}
                         />
                        </td>

                    <td className="table-cell">
                      <input
                        type="text"
                        name="price"
                        value={editFormData.price}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        type="text"
                        name="status"
                        value={editFormData.status}
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
                  </>
                ) : (
                  <>
                    <td className="table-cell">{user.name}</td>
                    <td className="table-cell">{user.phone}</td>
                    <td className="table-cell">{user.count}</td>
                    <td className="table-cell">{user.mname}</td>
                    <td className="table-cell">{user.mtype}</td>
                    <td className="table-cell">{user.time}</td>
                    <td className="table-cell">{user.price}</td>
                    <td className="table-cell">{user.status}</td>
                    <td className="table-cell">
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
                    </td>
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

export default Edittwowheel;
