import React from "react";
import PropTypes from "prop-types";

const checkboxFieldGroup = ({
  name,
  id,
  value,
  label,
  error,
  type,
  onChange,
  checked
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label>{name}</label>
      {error ? <div className="error-message">{error}</div> : null}
    </div>
  );
};

checkboxFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

checkboxFieldGroup.defaultProps = {
  type: "checkbox"
};

export default checkboxFieldGroup;
