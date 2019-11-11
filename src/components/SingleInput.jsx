import React from 'react';
import './SingleInput.scss';

export function SingleInput({ label, name, type, value, onChange }) {
  return (
    <div className="single-input">
      <label className="single-input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="single-input-input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SingleInput;
