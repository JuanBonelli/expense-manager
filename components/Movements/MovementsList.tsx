import React, { ReactElement } from "react";
import Card from "../Card";

interface Category {
  id: number;
  name: "WANT" | "NEED" | "SAVING" | "NONE";
}

interface Account {
  id: number;
  name: string;
  description: string;
}

interface Movement {
  id: number;
  account: Account;
  title: string;
  amount: string;
  category: Category;
  creationDate: string;
  description: string;
}

const MovementsList = (): ReactElement => {
  var movements: Movement[] = [
    {
      id: 1,
      account: {
        id: 1,
        name: "Cuenta Sueldo",
        description: "Hexagon Consulting SRL",
      },
      amount: "35.200,00 ARS",
      category: {
        id: 1,
        name: "WANT",
      },
      creationDate: "Marzo 14, 2025",
      title: "Esquirla del Amanecer",
      description: "Cuarto libro de la saga “El Archivo de las Tormentas",
    },
    {
      id: 2,
      account: {
        id: 2,
        name: "Cuenta Sueldo",
        description: "Hexagon Consulting SRL",
      },
      amount: "66.000,00 ARS",
      category: {
        id: 2,
        name: "NEED",
      },
      creationDate: "Marzo 14, 2025",
      title: "Aire Acondicionado",
      description: "Pagado con Tarjeta de Crédito Galicia. Cuota 1 de 15",
    },
  ];

  var movementsCards: ReactElement[] = [];
  movements.forEach((movement: Movement) => {
    movementsCards.push(
      <Card
        key={movement.id}
        id={movement.id}
        navigationUrl={`/account/${movement.account.id}/movements/${movement.id}`}
        title={movement.title}
        subtitle={movement.amount}
        status={movement.category.name}
      />,
    );
  });

  return <div className="flex w-full flex-col gap-4">{movementsCards}</div>;
};

export default MovementsList;
