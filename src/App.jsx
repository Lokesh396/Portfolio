import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />}></Route>
            <Route path="resume" element={<Resume />}></Route>
            <Route path="work" element={<Work />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
