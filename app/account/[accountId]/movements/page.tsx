"use client";

import Heading from "@/components/Heading";
import MovementsList from "@/components/Movements/MovementsList";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";

const Movements = () => {
  const handleToggleFilters = () => {
    console.log("show filters ...");
  };
  return (
    <section className="h-full p-8 overflow-scroll">
      <Heading
        title="Movimientos"
        subtitle="Marzo"
        showBackButton={true}
        showActionButton={true}
        actionButtonIcon={<AdjustmentsHorizontalIcon className="h-6 text-slate-50" />}
        onClickCallback={handleToggleFilters}
        size="default"
      />

      <div className="mt-4">
        <MovementsList />
      </div>
    </section>
  );
};

export default Movements;
