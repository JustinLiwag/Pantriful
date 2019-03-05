import React from "react";

const Checkbox = ({
  id,
  type = "checkbox",
  name,
  checked = false,
  onChange
}) => (
    <li>
        <input 
            id={id}
            type={type}
            name={name}
            defaultChecked={checked}
            onChange={onChange}
        />
        <label htmlFor={id}>{name}</label>
    </li>
);

export default Checkbox;
