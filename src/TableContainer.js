import React, { useState } from "react";

const TableContainer = () => {
  const [users, setUsers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: "", email: "", role: "" });
    setIsAdding(false);
  };

  const handleEditUser = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setNewUser(users[index]);
  };

  const handleSaveEditUser = () => {
    const updatedUsers = [...users];
    updatedUsers[currentIndex] = newUser;
    setUsers(updatedUsers);
    setNewUser({ name: "", email: "", role: "" });
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex-1  p-5  border-black">
        <div className="flex justify-center py-5">
          <h1 className=" border-black text-center text-3xl  font-bold border-b-2 w-fit">
            AIT GLOBAL DATA
          </h1>
        </div>
        <div className="flex justify-between mb-5">
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
          <div className="flex  border-black ">
            <h1 className="  border-black pt-2 px-3 bg-black text-white mr-3 rounded-lg font-bold">
              Search The Data
            </h1>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="ml-auto border p-2"
            />
          </div>
        </div>

        {(isAdding || isEditing) && (
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newUser.name}
              onChange={handleInputChange}
              className="mr-2 border p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleInputChange}
              className="mr-2 border p-2"
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={newUser.role}
              onChange={handleInputChange}
              className="mr-2 border p-2"
            />
            {isEditing ? (
              <button
                onClick={handleSaveEditUser}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save Edit
              </button>
            ) : (
              <button
                onClick={handleAddUser}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            )}
          </div>
        )}

        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="text-center py-2 px-4 border-b">{user.name}</td>
                <td className="text-center py-2 px-4 border-b">{user.email}</td>
                <td className="text-center py-2 px-4 border-b">{user.role}</td>
                <td className="text-center py-2 px-4 border-b">
                  <button
                    onClick={() => handleEditUser(index)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableContainer;
