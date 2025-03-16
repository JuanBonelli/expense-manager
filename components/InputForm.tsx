import React from "react";
import Input from "./Input";

interface InputForm {
    editable: boolean;
}

export const InputForm = ({editable} : InputForm) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-medium text-slate-500"> Label: </span>
      <Input editable={editable} />
    </div>
  );
};
