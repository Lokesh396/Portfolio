import NavBar from "./pages/NavBar";
import Header from "./pages/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Footer from "./pages/Footer";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about");
  }, []);
  return (
    <>
      <Header></Header>
      <div className="d-flex1 gap-3">
        <Profile></Profile>
        <div className="w-100">
          <div className=" navbar d-flex justify-content-end">
            <NavBar></NavBar>
          </div>
          <div className="overflow-auto">

          <Outlet />
          </div>
          {/* <Resume></Resume> */}
          {/* <About></About> */}
          {/* <Contact></Contact> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
