import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Card {
  id: string;
  title: string;
  subtitle: string;
  creationDate: string;
  navigationUrl: string;
  categoryId: string;
}

const Card = ({
  id,
  navigationUrl,
  title,
  subtitle,
  creationDate,
  categoryId,
}: Card) => {
  const getStatusColor = (categoryId: string): string => {
    var color: string = "";

    switch (categoryId) {
      case "67d83429e136294661cfb462":
        color = "bg-pink-600";
        break;
      case "67d834bce136294661cfb468":
        color = "bg-green-600";
        break;
      case "67d834b4e136294661cfb466":
        color = "bg-blue-600";
        break;
      default:
        color = "bg-slate-200";
        break;
    }

    return color;
  };

  const formatDate = (creationDate: string): string => {
    if (creationDate) {
      const date = new Date(creationDate);

      return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
        .format(date)
        .toString();
    }

    return "";
  };

  const formatCurrency = (amount: string): string => {
    if (!isNaN(parseInt(amount))) {
      const numberAmount = parseInt(amount);
      return Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "ARS",
      })
        .format(numberAmount)
        .toString();
    }

    return amount;
  };

  return (
    <Link key={id} href={navigationUrl}>
      <section className="relative flex h-fit w-full items-center justify-between rounded-lg bg-white p-4 shadow-sm shadow-black/5">
        <div
          className={`absolute left-0 h-full w-2 rounded-tl-lg rounded-bl-lg ${getStatusColor(
            categoryId,
          )}`}
        ></div>
        <div className="ml-2 flex flex-col">
          <span className="text-xs font-normal text-slate-400">
            {formatDate(creationDate)}
          </span>
          <span className="font-semibold text-slate-900">{title}</span>
          <span className="text-sm font-medium text-slate-500">
            {formatCurrency(subtitle)}
          </span>
        </div>

        <ChevronRightIcon className="h-5 text-slate-500" />
      </section>
    </Link>
  );
};

export default Card;
