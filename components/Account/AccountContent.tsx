"use client";

import { Account } from "@/utils/types";
import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import AccountList from "./AccountList";

interface AccountResponse {
  data: Account[];
}

const AccountContent = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    getAccounts();
  }, []);

  const getAccounts = async () => {
    fetch("http://localhost:3000/api/account")
      .then((res: any) => res.json())
      .then((res: any) => {
        setAccounts(res.data);
      });
  };

  return (
    <div className="p-8 pt-0">
      <Heading
        title="Tus Cuentas"
        subtitle="Seleccione una Cuenta"
        size="default"
      />
      <AccountList accounts={accounts} />
    </div>
  );
};

export default AccountContent;
