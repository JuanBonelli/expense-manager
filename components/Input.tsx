
import React from "react";

interface Input {
  editable: boolean;
}

const Input = ({editable} : Input) => {
  return (
    <input
      readOnly={!editable}
      className="h-8 w-full rounded-lg border-2 border-slate-200 bg-slate-100 pl-2 text-sm text-slate-500"
      type="text"
      placeholder="Placeholder"
      // value={}
    />
  );
};

export default Input;
