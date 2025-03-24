import Heading from "@/components/Heading";
import MovementCreationForm from "@/components/Movements/MovementCreationForm";
import MovementForm from "@/components/Movements/MovementCreationForm";

import React from "react";

const NewMovement = () => {
  return (
    <section className="flex h-full flex-col p-8">
      <Heading
        title="Nuevo Movimiento"
        subtitle="Formulario de Creación"
        showBackButton
        size="default"
      />

      <div className="mt-4 grow">
        <MovementCreationForm />
      </div>
    </section>
  );
};

export default NewMovement;
