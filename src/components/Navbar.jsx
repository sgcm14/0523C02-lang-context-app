import React, { useContext } from "react";
import LanguageContext, { languages } from "../context";

const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { text, id } = language;

  const handleChangeLanguage = () => {
    if (id === "EN") {
      changeLanguage(languages.spanish);
    } else if (id === "ES") {
      changeLanguage(languages.portuguese);
    } else {
      changeLanguage(languages.english);
    }
  };

  return (
    <div className="navbar">
      <p>{text.home}</p>
      <p>
        {text.current}: {id}
      </p>
      <button onClick={handleChangeLanguage}>{text.button}</button>
    </div>
  );
};

export default Navbar;
