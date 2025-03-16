import Heading from "@/components/Heading";
import MovementForm from "@/components/Movements/MovementForm";
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
        <MovementForm editable />
      </div>

      <button className="h-10 w-full rounded-lg bg-slate-400 text-slate-200">
        Crear
      </button>
    </section>
  );
};

export default NewMovement;
