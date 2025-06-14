import React, {useEffect} from "react";
import { ActiveSectionProvider } from "../Components/context/ActiveSectionContext";
import Header from "../Components/Layout/Header";
import Body from "../Components/Layout/Body";
import { heroName } from "../Components/utils/data";

const Home = () => {
  useEffect(() => {
    window.document.title = `${heroName}`;
  }, []);
  return (
    <ActiveSectionProvider>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:gap-4 lg:justify-between ">
          <Header />
          <Body />
        </div>
      </div>
    </ActiveSectionProvider>
  );
};

export default Home;
