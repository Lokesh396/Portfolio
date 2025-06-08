import React from "react";
import { ActiveSectionProvider } from "../Components/context/ActiveSectionContext";
import Header from "../Components/Layout/Header";
import Body from "../Components/Layout/Body";

const Home = () => {
  return (
    <ActiveSectionProvider>
      <div className="lg:flex lg:gap-4 lg:justify-between mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:pt-24">
        <Header />
        <Body className="md:w-[52%]" />
      </div>
    </ActiveSectionProvider>
  );
};

export default Home;
