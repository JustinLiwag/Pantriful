import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  error
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? <div className="error-message">{error}</div> : null}
    </div>
  );
};

TextFieldGroup.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
