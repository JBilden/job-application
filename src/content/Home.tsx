import { languages } from '../languagePicker/helper/languageHelper';

export interface HomeProps {
  lang: languages;
}

// Home Page. First small introduction and overview what to find on here.
function Home({ lang }: HomeProps) {

  const renderSwitch = ():JSX.Element => {
    switch(lang) {
      case "de":
        return (
          <div>
            <h2>Startseite</h2>
            <div>
              Ich habe diese Seite zum Üben und für mein Portfolio erstellt.<br />
              Aktuell bin ich auf der Suche nach einer Stelle als JavaScript/TypeScript Frontend-, Backend- oder Fullstack-Entwickler.<br />
              Mit einem Klick auf den Tabs oben kommen Sie zu meinem Bewerbungsschreiben und Lebenslauf.<br />
              Im letzten Tab finden Sie noch eine Übersicht der Features die ich auf dieser Seite programmiert habe. Zusätzlich gibt es noch eine Übersicht an Features die ich in Zukunft hinzufügen möchte.<br />
              <br />
              Den Sourcecode finden Sie <a href="https://github.com/JBilden">hier</a>.
            </div>
          </div>
          );
      case "uk":
        return (
          <div>
            <h2>Home</h2>
            <div>
              I created this site for practice and for my portfolio.<br />
              Currently I am looking for a job as a JavaScript/TypeScript frontend, backend or fullstack developer.<br />
              Clicking on the tabs above will take you to my letter of appliction and resume.<br />
              In the last tab you will find an overview of the features I hve programmed on this site. Additionally there is an overview of features I would like to add in the future.<br />
              <br />
              You can find the sourcecode <a href="https://github.com/JBilden">here</a>.
            </div>
          </div>
          );
      default:
        throw Error("Language not supported.");
    }
  }

  return (
    <div className="Home">
      {renderSwitch()}
    </div>
  );
}

export default Home;
