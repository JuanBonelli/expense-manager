import React, { ReactElement } from "react";
import { Account } from "@/utils/types";
import Card from "../Card";

const AccountList = ({ accounts }: { accounts: Account[] }): ReactElement => {
  var cards: ReactElement[] = [];

  accounts.forEach((account: Account) => {
    cards.push(
      <Card
        key={account._id}
        id={account._id}
        navigationUrl={`/account/${account["_id"]}`}
        title={account.name}
        subtitle={account.description}
        status="NONE"
      />,
    );
  });

  return <div className="mt-8 flex w-full flex-col gap-4">{cards}</div>;
};

export default AccountList;
