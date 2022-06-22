import { Dispatch, SetStateAction } from 'react';
import deFlag from "./flagIcons/Flag_of_Germany.svg";
import ukFlag from "./flagIcons/Flag_of_the_United_Kingdom.svg";
import { languages } from './helper/languageHelper';

export interface LanguagePickerProps {
  language: languages;
  setLanguage: Dispatch<SetStateAction<languages>>;
}

// Displayes Flags. Clicking will change the color and appearance to show what languague is chosen.
function LanguagePicker({language, setLanguage }: LanguagePickerProps) {

  return (
    <div className="Language-Picker">
      <img src={deFlag}className={ language==="de"? "SVGFlag selected": "SVGFlag"} onClick={ (e) => setLanguage("de") } alt="Deutsch" title="Deutsch" />
      <img src={ukFlag} className={ language==="uk"? "SVGFlag selected": "SVGFlag"} onClick={ (e) => setLanguage("uk") } alt="English" title="English" />
    </div>
  );
}

export default LanguagePicker;
