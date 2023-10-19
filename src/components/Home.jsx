import NavBar from "./pages/NavBar";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";
import Profile from "./pages/Profile";
function Home() {
  return (
    <>
      <Header></Header>
      <div className="d-flex gap-3">
          <Profile></Profile>
        <div className="d-felx gap-3">
        <NavBar></NavBar>
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Home;
