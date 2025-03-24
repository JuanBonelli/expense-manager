import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputForm {
  label: string;
  name: string;
  error: boolean;
  errorMessage?: string;
  placeholder: string;
  value?: string;
  type?: string;
  editable: boolean;
}

export const InputForm = ({
  label,
  placeholder,
  name,
  type = "text",
  error,
  errorMessage,
  value,
  editable,
}: InputForm) => {
  return (
    <div className="flex flex-col gap-1">
      <Label aria-required htmlFor={name} className="mb-2 text-slate-900">
        {label}:
      </Label>
      <Input
        className={`${error ? "border-1 border-red-900/40 text-red-900" : ""} text-sm`}
        disabled={!editable}
        type={type}
        name={name}
        id={name}
        value={value ? value : ''}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-xs font-normal text-red-900"> {errorMessage} </p>
      )}
    </div>
  );
};
