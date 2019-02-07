import React from "react";

const Checkbox = ({
  id,
  type = "checkbox",
  name,
  checked = false,
  onChange
}) => (
  <input
    id={id}
    type={type}
    name={name}
    defaultChecked={checked}
    onChange={onChange}
  />
);

export default Checkbox;
