"use client";

import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { ReactElement } from "react";

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
        titleProperties = "text-base text-slate-500";
        break;
      case "large":
        titleProperties = "text-2xl text-slate-900";
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

  const getSubtitleProperties = (
    size: "small" | "large" | "default",
  ): string => {
    var subtitleProperties: string = "";

    switch (size) {
      case "small":
        subtitleProperties = "text-sm text-slate-400";
        break;
      case "large":
        subtitleProperties = "text-xl text-slate-700";
        break;
      case "default":
        subtitleProperties = "text-base text-slate-400";
        break;
      default:
        subtitleProperties = "";
        break;
    }

    return subtitleProperties;
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <span className={`${getTitleProperties(size)} font-bold`}>{title}</span>
        <span className={`${getSubtitleProperties(size)}`}>{subtitle}</span>
      </div>

      <div
        className={`items-center gap-2 ${showBackButton ? "flex" : "hidden"}`}
      >
        <button
          onClick={onClickCallback}
          className={`${showActionButton ? 'flex' : 'hidden'} flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-400`}
        >
          {actionButtonIcon}
        </button>

        <Link
          href={"javascript:history.back()"}
          className={`${showBackButton ? 'flex' : 'hidden'} flex h-12 w-12 items-center justify-center rounded-2xl border-1 border-slate-400 bg-transparent`}
        >
          <XMarkIcon className="h-6 text-slate-400" />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
