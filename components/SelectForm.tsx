import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Master } from "@/utils/types";

interface SelectForm {
  label: string;
  name: string;
  placeholder: string;
  error: boolean;
  errorMessage: string;
  selectedKey: string;
  editable: boolean;
  options: Master[];
}

const SelectForm = ({
  label,
  placeholder,
  options,
  name,
  error = false,
  errorMessage,
  selectedKey,
  editable,
}: SelectForm) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name} className="mb-2 text-slate-900">
        {label}:
      </Label>
      <Select name={name} value={selectedKey} disabled={!editable}>
        <SelectTrigger
          className={`${error ? "border-1 border-red-900/40 text-red-900" : ""} w-full`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.length > 0 ? (
              options.map((option: Master) => (
                <SelectItem key={option._id} value={option._id}>
                  {option.name}
                </SelectItem>
              ))
            ) : (
              <></>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && (
        <p className="text-xs font-normal text-red-900"> {errorMessage} </p>
      )}
    </div>
  );
};

export default SelectForm;
