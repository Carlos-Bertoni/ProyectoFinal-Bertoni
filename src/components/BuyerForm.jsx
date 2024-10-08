// src/components/BuyerForm.jsx
import React, { useState } from 'react';

const BuyerForm = ({ onConfirm }) => {
  const [buyerData, setBuyerData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerData({ ...buyerData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};

    if (!buyerData.name) formErrors.name = 'El nombre es obligatorio';
    if (!buyerData.email) {
      formErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(buyerData.email)) {
      formErrors.email = 'El email no es válido';
    }
    if (!buyerData.phone) {
      formErrors.phone = 'El celular es obligatorio';
    } else if (!/^\d+$/.test(buyerData.phone)) {
      formErrors.phone = 'El celular debe contener solo números';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onConfirm(buyerData); // Llamamos a la función para confirmar la compra
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={buyerData.name}
          onChange={handleInputChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={buyerData.email}
          onChange={handleInputChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <label>Celular</label>
        <input
          type="text"
          name="phone"
          value={buyerData.phone}
          onChange={handleInputChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>
      <button type="submit">Finalizar compra</button>
    </form>
  );
};

export default BuyerForm;
