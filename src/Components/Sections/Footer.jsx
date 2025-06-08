import React from "react";
import { Link } from "react-router-dom";

const LinkText = ({ link, text }) => {
  return (
    <Link
      className="hover:text-teal-300 text-slate-300"
      to={link}
      target="_blank"
    >
      {text}
    </Link>
  );
};

const Footer = () => {
  return (
    <p className="text-sm text-slate-400 text-justify px-2 max-w-md">
      Coded in{" "}
      <LinkText
        link={"https://code.visualstudio.com/"}
        text="Visual Studio Code"
      />{" "}
      by yours truly. Built with{" "}
      <LinkText link={"https://react.dev/"} text={"React.js"} /> and{" "}
      <LinkText link={"https://tailwindcss.com/"} text={"Tailwind CSS"} />{" "}
      deployed with <LinkText link={"https://vercel.com/"} text={"Vercel"} />.
      All text is set in the <LinkText link={'https://fonts.google.com/specimen/Inter?query=inter'} text={'Inter'} /> typeface.
    </p>
  );
};

export default Footer;
