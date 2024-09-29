import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    spanish: {
        id: "ES",
        text: ES
    },
    portuguese: {
        id: "PTBR",
        text: PTBR
    }
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const LanguageContext = createContext(languages.english); // Inicializamos con inglés por defecto

export default LanguageContext;