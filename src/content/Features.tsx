import { languages } from '../languagePicker/helper/languageHelper';

export interface FeaturesProps {
  lang: languages;
}

// Small overview of all Features and planed future Features.
function Features({ lang }: FeaturesProps) {

  const renderSwitch = ():JSX.Element => {
    switch(lang) {
      case "de":
        return (
          <div>
            <h2>Features</h2>
            Sprachenauswahl<br />
            Light-/Darkmode<br />
            3D Navigation Tabs inspiriert von <a href="https://www.youtube.com/watch?v=MmdKeypSxE8">Online Tutorials</a> auf YouTube.<br />
            <br />
            Zukünftige Features:<br />
            Beispiel Firestore Integration<br />
          </div>
        );
      case "uk":
        return (
          <div>
            <h2>Features</h2>
            Language Selection<br />
            Light-/Darkmode<br />
            3D Navigation tabs inspiried by <a href="https://www.youtube.com/watch?v=MmdKeypSxE8">Online Tutorials</a> on YouTube.<br />
            <br />
            Future Features:<br />
            Example Firestore Integration<br />
          </div>
          );
      default:
        throw Error("Language not supported.");
    }
  }

  return (
    <div className="Features">
      {renderSwitch()}
    </div>
  );
}

export default Features;
