"use client";

import { Account } from "@/utils/types";
import Heading from "../Heading";
import AccountList from "./AccountList";

import React, { ReactElement, useEffect, useState } from "react";
import SkeletonList from "../SkeletonList";

interface AccountResponse {
  data: Account[];
}

const AccountContent = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAccounts();
  }, []);

  const getAccounts = async () => {
    setLoading(true);
    fetch("http://localhost:3000/api/account")
      .then((res: any) => res.json())
      .then((res: AccountResponse) => {
        setAccounts(res.data);
        setLoading(false);
      });
  };

  const getListControl = (): ReactElement => {
    return <AccountList accounts={accounts} />;
  };

  const getLoadingControl = (): ReactElement => {
    return <SkeletonList />;
  };

  return (
    <div className="p-8 pt-0">
      <Heading
        title="Tus Cuentas"
        subtitle="Seleccione una Cuenta"
        size="default"
      />

      {loading ? getLoadingControl() : getListControl()}
    </div>
  );
};

export default AccountContent;
