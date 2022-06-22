import { languages } from '../languagePicker/helper/languageHelper';

export interface ImpressumProps {
  lang: languages;
}

// Impressum Page.
function Impressum({ lang }: ImpressumProps) {

  const renderSwitch = ():JSX.Element => {
    switch(lang) {
      case "de":
        return (
          <div className="Impressum">
            <h2>Impressum</h2>
            Kommt bald.
          </div>
        );
      case "uk":
        return (
          <div className="Impressum">
            <h2>Impressum</h2>
            Comming soon.
          </div>
          );
      default:
        throw Error("Language not supported.");
    }
  }

  return (
    <div className="Impressum">
      {renderSwitch()}
    </div>
  );
}

export default Impressum;