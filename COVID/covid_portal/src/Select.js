// Select.js
import React from 'react';



function Select({ label, name, children }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} required>
        {children}
      </select>
    </div>
  );
}

export default Select;