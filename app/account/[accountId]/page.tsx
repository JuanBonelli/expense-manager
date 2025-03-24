import React from "react";

import AccountFooter from "@/components/Account/AccountFooter";
import Header from "@/components/Header/Header";
import Heading from "@/components/Heading";

import { Progress } from "@/components/ui/progress";

interface Account {
  params: {
    accountId: number;
  };
}

const Account = async ({ params }: Account) => {
  const {accountId} = await params;

  return (
    <section className="flex h-full flex-col">
      <Header title="958,000.00" subtitle="ARS" showControls={true} />
      <div className="flex h-full flex-col gap-4 p-8 pt-0">
        <div className="flex flex-col gap-2">
          <Heading
            title="Necesidades"
            subtitle="Luz, Gas, Internet, Salud, Educación"
            size="small"
          />

          <Progress value={25} />
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            title="Ahorros"
            subtitle="Plazos Fijos, Dólares, Inversiones"
            size="small"
          />
          <Progress value={75} />
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            title="Gustos"
            subtitle="Shopping, Accesorios, Ropa"
            size="small"
          />
          <Progress value={50} />
        </div>

        <AccountFooter accountId={accountId} />
      </div>
    </section>
  );
};

export default Account;
