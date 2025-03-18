import React from "react";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Cog6ToothIcon, MoonIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Header {
  showControls: boolean;
  title: string;
  subtitle: string;
}

const HeaderControls = ({ visible }: { visible: Header["showControls"] }) => {
  const getControls = () => {
    return (
      <div className="absolute z-10 flex w-full items-center justify-between px-8 py-4">
        <Link href={'/account'} className="flex items-center gap-2">
          <span className="text-lg font-bold text-slate-700">Cuenta Sueldo</span>
          <ChevronDownIcon className="h-5 text-slate-700" />
        </Link>

        <div className="flex items-center gap-2">
          <MoonIcon className="h-5 text-slate-700" />
          <UserIcon className="h-5 text-slate-700" />
          <Cog6ToothIcon className="h-5 text-slate-700" />
        </div>
      </div>
    );
  };

  const getEmptyControls = () => {
    return <></>;
  };

  return visible ? getControls() : getEmptyControls();
};

export default HeaderControls;
