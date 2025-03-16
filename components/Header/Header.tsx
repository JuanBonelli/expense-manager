import React from "react";
import HeaderControls from "./HeaderControls";
import HeaderBackground from "./HeaderBackground";
import HeaderInformation from "./HeaderInformation";

interface Header {
  showControls: boolean;
  title: string;
  subtitle: string;
}

const Header = ({ showControls, title, subtitle }: Header) => {
  return (
    <header className="relative h-[150px] w-full overflow-hidden bg-slate-50">
      <HeaderControls visible={showControls} />
      <HeaderBackground />
      <HeaderInformation title={title} subtitle={subtitle} />
    </header>
  );
};

export default Header;
