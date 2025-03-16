import React from "react";
import Heading from "../Heading";
import AccountList from "./AccountList";

const AccountContent = () => {
  return (
    <div className="p-8 pt-0">
      <Heading
        title="Tus Cuentas"
        subtitle="Seleccione una Cuenta"
        size="default"
      />
      <AccountList />
    </div>
  );
};

export default AccountContent;
