import React, { ReactElement } from "react";
import { Account } from "@/utils/types";
import Card from "../Card";
import { Button } from "../ui/button";

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
        creationDate={''}
        categoryId="NONE"
      />,
    );
  });

  return (
    <div className="mt-4 flex w-full flex-col gap-4">
      {cards} <Button variant={"secondary"}>Nueva Cuenta</Button>{" "}
    </div>
  );
};

export default AccountList;
