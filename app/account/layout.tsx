import React, { ReactElement } from "react";

const AccountLayout = ({ children }: { children: ReactElement }) => {
  return (
    <article className="h-full">
      {/* <Header title="Juan Bonelli" subtitle="" showControls={false} /> */}
      {children}
    </article>
  );
};

export default AccountLayout;
