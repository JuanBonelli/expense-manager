"use client";

import React, { ReactElement } from "react";
import { Button } from "./ui/button";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface Heading {
  title: string;
  subtitle: string;
  onClickCallback?: () => void;
  showBackButton?: boolean;
  showActionButton?: boolean;
  actionButtonIcon?: ReactElement;
  size: "small" | "large" | "default";
}

const Heading = ({
  title,
  subtitle,
  onClickCallback,
  showBackButton = false,
  showActionButton = false,
  actionButtonIcon,
  size,
}: Heading) => {
  const getTitleProperties = (size: "small" | "large" | "default"): string => {
    var titleProperties: string = "";

    switch (size) {
      case "small":
        titleProperties = "text-base text-slate-700";
        break;
      case "large":
        titleProperties = "text-2xl text-slate-800";
        break;
      case "default":
        titleProperties = "text-xl text-slate-700";
        break;
      default:
        titleProperties = "";
        break;
    }

    return titleProperties;
  };


  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <span className={`${getTitleProperties(size)} font-bold`}>{title}</span>
        <span className={`text-slate-500 text-sm`}>{subtitle}</span>
      </div>

      <div
        className={`items-center gap-2 ${showBackButton ? "flex" : "hidden"}`}
      >
        <Button
          size={"icon"}
          onClick={onClickCallback}
          className={`${showActionButton ? "flex" : "hidden"}`}
        >
          {actionButtonIcon}
        </Button>

        <Button
          size={"icon"}
          variant={"outline"}
          className={`${showBackButton ? "flex" : "hidden"}`}
        >
          <XMarkIcon className="h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Heading;
