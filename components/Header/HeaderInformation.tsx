import React from "react";

interface Header {
  title: string;
  subtitle: string;
}

const headerInformation = ({ title, subtitle }: Header) => {
  return (
    <div className="absolute top-14 left-1/2 z-10 flex w-fit -translate-x-1/2 transform flex-col items-end">
      <span className="text-center text-5xl font-bold text-nowrap text-slate-200 ">
        {title}
      </span>
      <span className="text-center text-3xl font-bold text-slate-900">
        {subtitle}
      </span>
    </div>
  );
};

export default headerInformation;
