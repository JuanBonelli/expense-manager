"use client";

import Heading from "@/components/Heading";
import MovementForm from "@/components/Movements/MovementForm";
import { PencilIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface Category {
  id: number;
  name: "WANT" | "NEED" | "SAVING" | "NONE";
}

interface Account {
  id: number;
  name: string;
  description: string;
}

interface Movement {
  id: number;
  account: Account;
  title: string;
  amount: string;
  category: Category;
  creationDate: string;
  description: string;
}

const Movement = ({ params }: { params: { movementId: Movement["id"] } }) => {

  const [editable, setEditable] = useState(false);

  var movement: Movement = {
    id: 1,
    account: {
      id: 1,
      name: "Cuenta Sueldo",
      description: "Hexagon Consulting SRL",
    },
    amount: "35.200,00 ARS",
    category: {
      id: 1,
      name: "WANT",
    },
    creationDate: "Marzo 14, 2025",
    title: "Esquirla del Amanecer",
    description: "Cuarto libro de la saga “El Archivo de las Tormentas",
  };

  const toggleEditable = () => {
    setEditable(!editable);
  };

  return (
    <section className="p-8">
      <Heading
        title="Detalle de Movimiento"
        subtitle={movement.title}
        showBackButton={true}
        showActionButton={true}
        actionButtonIcon={editable ? <CheckCircleIcon className="h-6 text-slate-50" /> : <PencilIcon className="h-6 text-slate-50" />}
        onClickCallback={toggleEditable}
        size="default"
      />

      <div className="mt-4">
        <MovementForm editable={editable} />
      </div>
    </section>
  );
};

export default Movement;
