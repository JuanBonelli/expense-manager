import AccountFooter from "@/components/Account/AccountFooter";
import Header from "@/components/Header/Header";
import Heading from "@/components/Heading";
import ProgressBar from "@/components/ProgressBar";
import React from "react";

interface Account {
  accountId: number;
}

const Account = ({params} : {params: {accountId: Account['accountId']}}) => {
  console.log("ACCOUNT ID: ", params.accountId)
  return (
    <section className="flex h-full flex-col">
      <Header title="1,000,000.00" subtitle="ARS" showControls={true} />
      <div className="flex h-full flex-col gap-4 p-8 pt-0">
        <div className="flex flex-col gap-2">
          <Heading
            title="Necesidades"
            subtitle="Luz, Gas, Internet, Salud, Educación"
            size="small"
          />
          <ProgressBar progress={0.2} total="500,000.00 ARS" showTotal={true} />
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            title="Ahorros"
            subtitle="Plazos Fijos, Dólares, Inversiones"
            size="small"
          />
          <ProgressBar
            progress={0.75}
            total="300,000.00 ARS"
            showTotal={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            title="Gustos"
            subtitle="Shopping, Accesorios, Ropa"
            size="small"
          />
          <ProgressBar progress={0.5} total="200,000.00 ARS" showTotal={true} />
        </div>

        <AccountFooter accountId={params.accountId} />
      </div>
    </section>
  );
};

export default Account;
