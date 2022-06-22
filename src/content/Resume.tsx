import { languages } from '../languagePicker/helper/languageHelper';

export interface ResumeProps {
  lang: languages;
}

// Resume in Website format using a table for structure.
function Resume({ lang }: ResumeProps) {

  const renderSwitch = ():JSX.Element => {
    switch(lang) {
      case "de":
        return (
          <div>
            <h2>Lebenslauf</h2>

            <table>
              <tr><td>Name:</td><td>Julian Bilden</td></tr>
              <tr><td>Geburtsdatum:</td><td>03.09.1992</td></tr>
              <tr><td>Geburtsort:</td><td>Berlin</td></tr>
              <tr><td>Familienstand:</td><td>ledig</td></tr>
              <tr><td>E-Mail:</td><td>julian.bilden@gmail.com</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Bildungsweg</th></tr>
              <tr><td>2013 - 2021</td><td>Informatik an der Technischen Universität Berlin<br />
                                      Abschluss: Informtik Bachelor of Science</td></tr>
              <tr><td>2012 - 2013</td><td>Wirtschaftsmathematik an der Technischen Universität Berlin</td></tr>
              <tr><td>2005  -2012</td><td>Kopernikus Oberschule<br />
                                      Abschluss: allgemeine Hochschulreife</td></tr>
              <tr><td>1999 - 2005</td><td>Grundschule am Rüdesheimer Platz</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Berufliche Laufbahn</th></tr>
              <tr><td>Juni 2012 - April 2016</td><td>Selbstständiges Kleingewerbe<br />
                                                      Designer von kleineren Werbeanzeigen für Zeitschriften</td></tr>
              <tr><td>September 2018 - August 2019</td><td>Evangelische Lindenkirchengemeinde<br />
                                                            Hausmeister</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Kenntnisse &amp; Fähigkeiten</th></tr>
              <tr><td>Sprachen</td><td>Deutsch Muttersprache<br />
                                        English gut in Wort und Schrift</td></tr>
              <tr><td>Programmiersprachen</td><td>Grundkenntnisse in den meisten herkömmlichen 	Programmiersprachen wie Java, Python, C, C++, C#,
                                                    PHP und JavaScript<br />
                                                  Erste Erfahrungen mit Typescript, Cloud Firestore und ReactJS</td></tr>
              <tr><td>PC-Kenntnisse</td><td>Grundkenntnisse in HTML und CSS<br />
                                            Grundkenntnisse in Git<br />
                                            Grundkenntnisse in Unity3D und Blender<br />
                                            Grundkenntnisse in OpenOffice</td></tr>
              <tr><td>Führerscheine</td><td>Klasse A<br />
                                            Klasse B</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Hobbies</th></tr>
              <tr><td></td><td>Programmierung und Anwendung von Mikrokontrollern<br />
                                Bouldern<br />
                                Handwerken mit Metall und Holz<br />
                                3D Druck</td></tr>
            </table>
          </div>
        );
      case "uk":
        return (
          <div>
            <h2>Lebenslauf</h2>
  
            <table>
              <tr><td>Name:</td><td>Julian Bilden</td></tr>
              <tr><td>Date of Birth:</td><td>03.09.1992</td></tr>
              <tr><td>Birthplace:</td><td>Berlin</td></tr>
              <tr><td>Marital status:</td><td>Single</td></tr>
              <tr><td>E-mail:</td><td>julian.bilden@gmail.com</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Educational path</th></tr>
              <tr><td>2013 - 2021</td><td>Computer Science at Technische Universität Berlin<br />
                                      Degree: Bachelor of Science in Computer Science</td></tr>
              <tr><td>2012 - 2013</td><td>Wirtschaftsmathematik an der Technischen Universität Berlin</td></tr>
              <tr><td>2005  -2012</td><td>Secondary school: Kopernikus Oberschule<br />
                                      Degree: General University Entrance Qualification</td></tr>
              <tr><td>1999 - 2005</td><td>Primary school: Grundschule am Rüdesheimer Platz</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Professional career</th></tr>
              <tr><td>Juni 2012 - April 2016</td><td>Independent small business<br />
                                                      Designer of smaller advertisements for magazines</td></tr>
              <tr><td>September 2018 - August 2019</td><td>Evangelische Lindenkirchengemeinde<br />
                                                            Janitor</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Knowledge &amp; Skills</th></tr>
              <tr><td>Languages</td><td>German native language<br />
                                        English good in spoken and written</td></tr>
              <tr><td>Programming languages</td><td>Basic knowledge of most conventional programming languages such as Java, Python, C, C++, C#,
                                                    PHP and JavaScript<br />
                                                    First experiences with Typescript, Cloud Firestore and ReactJS</td></tr>
              <tr><td>PC skills</td><td>Basic knowledge of HTML and CSS<br />
                                        Basic knowledge of Git<br />
                                        Basic knowledge of Unity3D und Blender<br />
                                        Basic knowledge of OpenOffice</td></tr>
              <tr><td>Driving licences</td><td>Class A (Motorbikes)<br />
                                                Class B (Cars)</td></tr>
              <tr className={ "empty" }></tr>
              <tr><th>Hobbies</th></tr>
              <tr><td></td><td>Programming and usage of microcontrollers<br />
                                Bouldering<br />
                                Crafting with metal and wood<br />
                                3D printing</td></tr>
            </table>
          </div>
        );
      default:
        throw Error("Language not supported.");
    }
  }

  return (
    <div className="Resume">
      {renderSwitch()}
    </div>
  );
}

export default Resume;
