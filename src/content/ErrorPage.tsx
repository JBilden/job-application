import { languages } from '../languagePicker/helper/languageHelper';

export interface ErrorProps {
  lang: languages;
}

// Default page if URL can't be matched to any content.
function ErrorPage({ lang }: ErrorProps) {

  const renderSwitch = ():JSX.Element => {
    switch(lang) {
      case "de":
        return (
          <div className="ErrorPage">
            Falsche URL
          </div>
        );
      case "uk":
        return (
          <div className="ErrorPage">
            Wrong URL
          </div>
          );
      default:
        throw Error("Language not supported.");
    }
  }

  return (
    <div className="ErrorPage">
      {renderSwitch()}
    </div>
  );
}

export default ErrorPage;
