import React from "react";

interface ProgressBar {
  progress: string;
  total: string;
  showTotal: boolean;
}

const ProgressBar = ({ progress, total, showTotal }: ProgressBar) => {
  return (
    <div className="relative h-8 w-full rounded-lg border-1 border-slate-100 bg-slate-50">
      <div
        className={`h-full w-[calc(100%*${progress})] rounded-tl-lg rounded-bl-lg bg-slate-300`}
      ></div>
      {showTotal ? (
        <span className="absolute right-4 bottom-1 text-sm text-slate-500">
          {total}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProgressBar;
