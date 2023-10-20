import NavBar from "./pages/NavBar";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
function Home() {
  return (
    <>
      <Header></Header>
      <div className="d-flex gap-3">
          <Profile></Profile>
          <div>
          <div className="d-flex justify-content-end">
        <NavBar></NavBar>
        </div>
          <Outlet/>
          <About></About>
          </div>
       
      </div>
    </>
  );
}

export default Home;
