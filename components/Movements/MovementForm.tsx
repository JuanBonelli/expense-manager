import React from "react";
import { InputForm } from "../InputForm";

interface MovementForm {
  editable : boolean;
}

const MovementForm = ({editable}: MovementForm) => {
  return (
    <section className="h-full w-full flex flex-col gap-4">
      <InputForm editable={editable}/>
      <InputForm editable={editable}/>
      <InputForm editable={editable}/>
      <InputForm editable={editable}/>
      <InputForm editable={editable}/>
    </section>
  );
};

export default MovementForm;
