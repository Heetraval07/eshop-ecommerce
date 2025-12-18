import React from "react";

const Button = ({
  text,
  bgColor,
  textColor,
  handler = () => {},
  disabled = false,
}) => {
  const baseClasses =
    "duration-300 py-2 px-8 rounded-full relative z-10 inline-flex items-center justify-center text-sm font-semibold";
  const enabledClasses = "cursor-pointer hover:scale-105";
  const disabledClasses = "cursor-not-allowed opacity-60";

  return (
    <button
      type="button"
      onClick={disabled ? undefined : handler}
      disabled={disabled}
      className={`${bgColor} ${textColor} ${baseClasses} ${
        disabled ? disabledClasses : enabledClasses
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
