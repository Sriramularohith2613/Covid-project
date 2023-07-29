// Input.js
import React from 'react';



function Input({ label, type, name }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} required />
    </div>
  );
}

export default Input;