import React from "react";
import clsx from "clsx";
const Input = React.forwardRef(
  ({ placeholder, value, onChange, name, id, label,variant,type }, ref) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <div className="relative w-[100%]">
          <input
            className={clsx(
              "outline-1 outline-gray-400 p-5 ",
              {
                " outline-gray-400 p-4 w-full text-new border xl:w-[670px] ": variant === "headerInput",
                " outline-gray-400 p-[27px] w-[321px] bg-white rounded-[16px]": variant === "footerInput",
              },
               )}
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            type={type}
          />
        </div>
      </div>
    );
  }
);
export default Input;
