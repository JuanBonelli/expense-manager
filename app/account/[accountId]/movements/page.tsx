"use client";

import Heading from "@/components/Heading";
import MovementsList from "@/components/Movements/MovementsList";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import React from "react";

const Movements = () => {
  const handleToggleFilters = () => {
    console.log("show filters ...");
  };

  return (
    <section className="h-full overflow-scroll p-8">
      <Heading
        title="Movimientos"
        subtitle="Marzo"
        showBackButton={true}
        showActionButton={true}
        actionButtonIcon={
          <AdjustmentsHorizontalIcon className="h-6 w-6 text-slate-50" />
        }
        actionWithDrawer={true}
        onClickCallback={handleToggleFilters}
        size="default"
      />

      <div className="mt-4 h-full">
        <MovementsList />
      </div>
    </section>
  );
};

export default Movements;
