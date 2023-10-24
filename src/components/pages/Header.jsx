// import * as Lucide from "lucide-react";
// import { useState } from "react";
function Header() {
  // const [mode, setMode] = useState("moon");
  // const handleMode = () => {
  //   if (mode === "moon") setMode("sun");
  //   else setMode("moon");
  // };
  return (
    <div className="d-flex justify-content-between mt-3">
      <h1 className="logo">C Lokesh Kumar Reddy</h1>
      {/* <div onClick={handleMode} className="mode">{
        mode === "moon" ? <Lucide.MoonIcon></Lucide.MoonIcon> : <Lucide.SunIcon></Lucide.SunIcon>}</div> */}
    </div>
  );
}

export default Header;
