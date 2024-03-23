import React from "react";
import clsx from "clsx";

const Button = ({ variant, children }) => {
  return (
    <button
      className={clsx("p-[10px] rounded-xl ", {
        "flex items-center gap-2 py-3 pl-[12px] pr-[45px] bg-primary text-btn2": variant === "primary",
        "bg-secondary": variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
