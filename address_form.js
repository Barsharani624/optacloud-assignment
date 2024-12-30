// components/AddressForm.js
import React, { useState } from 'react';

const AddressForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    house: '',
    apartment: '',
    category: 'Home',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="house"
        placeholder="House/Flat/Block No."
        value={formData.house}
        onChange={handleChange}
      />
      <input
        name="apartment"
        placeholder="Apartment/Road/Area"
        value={formData.apartment}
        onChange={handleChange}
      />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Friends & Family">Friends & Family</option>
      </select>
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
