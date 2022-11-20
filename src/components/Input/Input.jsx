import React from "react";

const Input = ({
  inputType,
  inputClassName,
  inputPlaceholder,
  inputName,
  labelName,
  inputValue,
  setInputValue,
}) => {
  return (
    <>
      <input
        type={inputType}
        className={inputClassName}
        placeholder={inputPlaceholder}
        value={inputValue}
        name={inputName}
        id={labelName}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
};

export default Input;
