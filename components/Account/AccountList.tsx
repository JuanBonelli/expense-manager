import React, { ReactElement } from "react";
import Card from "../Card";

interface Account {
  id: number;
  name: string;
  description: string;
  type: "NONE" | "NEED" | "WANT" | "SAVING";
}

const AccountList = (): ReactElement => {
  var cards: ReactElement[] = [];

  const accounts: Account[] = [
    {
      id: 1,
      name: "Sueldo",
      description: "Hexagon Consulting SRL",
      type: "NONE",
    },
    {
      id: 2,
      name: "Freelance",
      description: "Diseño Gráfico",
      type: "NONE",
    },
  ];

  accounts.forEach((account: Account) => {
    cards.push(
      <Card
        key={account.id}
        id={account.id}
        navigationUrl={`/account/${account.id}`}
        title={account.name}
        subtitle={account.description}
        status={account.type}
      />,
    );
  });

  return <div className="mt-8 flex w-full flex-col gap-4">{cards}</div>;
};

export default AccountList;
