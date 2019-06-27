import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  label
}) => {
  return (
    <div className="mx-auto px-4">
      <label className="block text-left w-full mt-3 mb-2 text-gray-700 font-bold capitalize">{label}</label>
      <input
        className="w-full bg-white outline-none shadow border border-gray-border rounded-lg py-2 px-4 block appearance-none leading-normal"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
      {error ? <div className="text-red-400 font-bold text-left text-sm pl-2 pt-1">{error}</div> : null}
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
