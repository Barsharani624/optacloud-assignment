// components/AddressManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressManagement = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Fetch addresses from the server
  useEffect(() => {
    axios.get('http://localhost:5000/addresses')
      .then((response) => setAddresses(response.data))
      .catch((error) => console.error('Error fetching addresses:', error));
  }, []);

  // Delete an address
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/addresses/${id}`)
      .then(() => setAddresses(addresses.filter((address) => address._id !== id)))
      .catch((error) => console.error('Error deleting address:', error));
  };

  // Select an address for delivery
  const handleSelect = (address) => {
    setSelectedAddress(address);
    alert(`Address Selected for Delivery: ${address.house}, ${address.apartment}`);
  };

  return (
    <div>
      <h2>Manage Your Addresses</h2>
      {addresses.length === 0 && <p>No saved addresses found.</p>}
      <ul>
        {addresses.map((address) => (
          <li key={address._id}>
            <div>
              <strong>{address.house}</strong>, {address.apartment} - <em>{address.category}</em>
            </div>
            <button onClick={() => handleSelect(address)}>Select for Delivery</button>
            <button onClick={() => handleDelete(address._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressManagement;

// GET /addresses
app.get('/addresses', async (req, res) => {
    try {
      const addresses = await Address.find();
      res.json(addresses);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching addresses' });
    }
  });

  
  // DELETE /addresses/:id
app.delete('/addresses/:id', async (req, res) => {
    try {
      await Address.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting address' });
    }
  });

  
  // Search Bar Component
const [searchTerm, setSearchTerm] = useState('');

const filteredAddresses = addresses.filter((address) =>
  `${address.house} ${address.apartment}`.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div>
    <input
      type="text"
      placeholder="Search addresses..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <ul>
      {filteredAddresses.map((address) => (
        <li key={address._id}>
          {/* Address details and buttons */}
        </li>
      ))}
    </ul>
  </div>
);
