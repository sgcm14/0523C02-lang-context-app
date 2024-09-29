import "./App.css";
import React, { useState } from "react";
import LanguageContext, { languages } from "./context";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [language, setLanguage] = useState(languages.english);

  const changeLanguage = (lang) => {
    //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
