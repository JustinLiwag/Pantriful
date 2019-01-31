import React from "react";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
  <input type={type} name={name} defaultChecked={checked} onChange={onChange} />
);

export default Checkbox;