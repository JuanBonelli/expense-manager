import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Card {
  id: string;
  title: string;
  subtitle: string;
  navigationUrl: string;
  status: "NONE" | "NEED" | "WANT" | "SAVING";
}

const Card = ({ id, navigationUrl, title, subtitle, status }: Card) => {
  const getStatusColor = (
    status: "NONE" | "NEED" | "WANT" | "SAVING",
  ): string => {
    var color: string = "";

    switch (status) {
      case "NEED":
        color = "bg-slate-950";
        break;
      case "WANT":
        color = "bg-slate-800";
        break;
      case "SAVING":
        color = "bg-slate-600";
        break;
      default:
        color = "bg-slate-300";
        break;
    }

    return color;
  };

  return (
    <Link key={id} href={navigationUrl}>
      <section className="relative flex h-fit w-full items-center justify-between rounded-lg border-1 border-slate-200 bg-slate-100 px-4 py-2">
        <div
          className={`absolute left-0 h-full w-2 rounded-tl-lg rounded-bl-lg ${getStatusColor(
            status,
          )}`}
        ></div>
        <div className="ml-2 flex flex-col">
          <span className="font-semibold text-slate-600">{title}</span>
          <span className="text-sm font-medium text-slate-500">{subtitle}</span>
        </div>

        <ChevronRightIcon className="h-5 text-slate-500" />
      </section>
    </Link>
  );
};

export default Card;
