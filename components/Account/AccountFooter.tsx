"use client";

import Link from "next/link";
import React from "react";

interface AccountFooter {
  accountId: number;
}

const AccountFooter = ({accountId} : AccountFooter) => {
  console.log("FOOTER ACCOUNT ID: ", accountId)
  return (
    <div className="mt-auto flex h-fit w-full flex-col gap-4">
      <Link
        href={`/account/${accountId}/new`}
        className="w-full rounded-lg bg-slate-400 py-2 text-center text-slate-200"
      >
        Agregar Movimiento
      </Link>
      <Link
        href={`/account/${accountId}/movements`}
        className="w-full rounded-lg border-2 border-slate-400 bg-transparent py-2 text-center text-slate-400"
      >
        Ver Movimientos
      </Link>
    </div>
  );
};

export default AccountFooter;
