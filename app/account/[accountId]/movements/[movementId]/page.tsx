"use client";

import Heading from "@/components/Heading";
import MovementForm from "@/components/Movements/MovementCreationForm";
import MovementDetailForm from "@/components/Movements/MovementDetailForm";
import { Movement } from "@/utils/types";

import { PencilIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Movements = ({ params }: { params: { movementId: number} }) => {

  const [editable, setEditable] = useState(false);

  var movement: Movement = {
    _id: '6asdfsd142513sdf',
    accountId: '24213213',
    amount: "35200",
    categoryId: '67d83429e136294661cfb462',
    title: "Esquirla del Amanecer",
    description: "Cuarto libro de la saga “El Archivo de las Tormentas",
    createdAt: new Date().toString()
  };

  const toggleEditable = () => {
    setEditable(!editable);
  };

  return (
    <section className="flex h-full flex-col p-8">
      <Heading
        title="Detalle de Movimiento"
        subtitle={movement.title}
        showBackButton={true}
        showActionButton={true}
        actionButtonIcon={editable ? <CheckCircleIcon className="h-6 text-slate-50" /> : <PencilIcon className="h-6 text-slate-50" />}
        actionWithDrawer={false}
        onClickCallback={toggleEditable}
        size="default"
      />

      <div className="mt-4 grow">
        <MovementDetailForm movement={movement} editable={editable} />
      </div>
    </section>
  );
};

export default Movements;


