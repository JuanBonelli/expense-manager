"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface AccountFooter {
  accountId: number;
}

const AccountFooter = ({ accountId }: AccountFooter) => {
  console.log("FOOTER ACCOUNT ID: ", accountId);
  return (
    <div className="mt-auto flex h-fit w-full flex-col gap-4">
      <Button variant={"default"}>
        <Link href={`/account/${accountId}/new`} className="h-full w-full">Agregar Movimiento</Link>
      </Button>

      <Button variant={"outline"}>
        <Link href={`/account/${accountId}/movements`} className="h-full w-full">Ver Movimientos</Link>
      </Button>
    </div>
  );
};

export default AccountFooter;
