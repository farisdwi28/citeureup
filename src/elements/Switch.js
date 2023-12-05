import React from "react";
import { Switch } from "@material-tailwind/react";

const Toggle = ({ label, value, onChange, className }) => {
  return (
      <div className="flex items-center py-2">
        <p className="my-auto w-[200px] font-medium text-xl w-64 ">
          {label}
        </p>
        <div>
          <Switch
            className={className}
            id="green"
            color="green"
            defaultChecked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        </div>
      </div>
  );
};

export default Toggle;
