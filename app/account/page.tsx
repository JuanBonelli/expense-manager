import AccountContent from "@/components/Account/AccountContent";
import Header from "@/components/Header/Header";
import React from "react";

const AccountSelector = () => {
  return (
    <section className="flex h-full flex-col">
      <Header title="Juan Bonelli" subtitle="" showControls={false} />
      <AccountContent />
    </section>
  );
};

export default AccountSelector;
