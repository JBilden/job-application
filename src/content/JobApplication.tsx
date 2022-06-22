import { languages } from '../languagePicker/helper/languageHelper';

export interface JobApplicationProps {
  lang: languages;
}

// Job Application in Webside format.
function JobApplication({ lang }: JobApplicationProps) {

  const renderSwitch = ():JSX.Element => {
    switch(lang) {
      case "de":
        return (
          <div>
            <h2>Bewerbung</h2>
            <div>
              <h3>Warum sollten Sie mich einstellen?</h3>
              <br />
              Sehr geehrte Damen und Herren, <br />
              <br />
              ich bin auf der Suche nach einer JavaScript/TypeScript Frontend-, Backend- oder Fullstack-Developer Stelle. HTML und CSS habe ich bereits in der Grundschulzeit gelernt und anschließend habe ich in der Mittelstufe meine Fähigkeiten der Webentwicklung um PHP erweitert. In derselben Zeit habe ich erste Erfahrungen mit Datenbanken durch MySQL gemacht.
              <br /><br />
              Im Studium lernte ich Java, was in den meisten praktisch orientierten Kursen genutzt wurde. Aber auch Python, C und JavaScript waren Teil des Studiums. JavaScript habe ich in dem Wahlpflichtmodul “Webtechnologien” und meinem universitätsinternen Praktikum gelernt, wodurch  ein nachhaltiges Interesse an der Programmiersprache geblieben ist. In meiner Abschlussarbeit habe ich neben Python und etwas C# hauptsächlich in C++ programmiert. Im Rahmen dieser Arbeit habe ich außerdem den Code für einen Mikrocontroller geschrieben und ihn selbstständig mit Sensoren und Aktoren ausgestattet.
              <br /><br />
              Selbstständigkeit habe ich als Sohn von Eltern mit einem eigenem Augenoptikerbetrieb von klein auf kennen gelernt. In meiner Schulzeit, als auch im Studium, war selbstständiges Arbeiten immer ein wichtiger Teil. Auch gehe ich aus Eigeninitiative meinen Interessen und Neugier nach. So habe ich im vergangenen Jahr z.B. erste Erfahrungen mit NodeJS gemacht, als ich mich mit APIs und Webhooks beschäftigt habe. Auch in meinem Hobby dem Bouldersport bin ich beim Klettern auf mich selber gestellt.
              <br /><br />
              Zwischen dem Klettern interagiere ich aber auch gerne mit anderen und tausche mich über Lösungen und Herangehensweisen zu Boulderproblemen aus. Genau so habe ich mich im Studium gerne bei Gruppenarbeiten mit eigenen Ideen eingebracht. Auch habe ich öfters dabei eine leitende und strukturierende Position eingenommen.
              <br /><br />
              Aktuell arbeite ich mit zwei Freunden an einer Management-Software, basierend auf Typescript , ReactJS und Cloud Firestore. Dabei lerne ich täglich gekonnter und schneller mit diesen Technologien umzugehen.
              <br /><br />
              Ich suche immer nach Möglichkeiten mein Wissen und meine Fähigkeiten zu erweitern und würde mich daher freuen Sie und Ihr Unternehmen kennen zu lernen und tatkräftig zu unterstützen. Sprechen Sie mich gerne an, damit wir einen Termin für ein persönliches Gespräch vereinbaren können.
              <br /><br />
              <br />
              Mit freundlichen Grüßen<br />
              <br />
              Julian Bilden
            </div>
          </div>
        );
      case "uk":
        return (
          <div>
            <h2>Job Application</h2>
            <div>
              <h3>Why should you hire me?</h3>
              <br />
              Dear ladies and gentlemen, <br />
              <br />
              I am looking for a JavaScript/Typescript frontend, backend or fullstack developer position. I already learned HTML and CSS in primary school and then expanded my web development skills with PHP in middle school. During the same time, I made my first experiences with databases using MySQL.
              <br /><br />
              During my studies, I learned Java, which was used in most practically oriented courses. Python, C and JavaScript were also part of my studies. I learned JavaScript in the elective module "Web Technologies" and my university-internal internship, which left me with a lasting interest in this programming language. In my thesis, I programmed mainly in C++ in addition to Python and some C#. As part of this work, I also wrote the code for a microcontroller and equipped it with sensors and actuators myself.
              <br /><br />
              As the son of parents with their own optician's business, I learned about independence from an early age. In my school years, as well as in my studies, independent work was always an important part. I also pursue my interests and curiosity on my own initiative. Last year, for example, I made my first experiences with NodeJS when I dealt with APIs and Webhooks. In my hobby of bouldering, I also rely on myself while climbing.
              <br /><br />
              In between climbing, I also like to interact with others and exchange solutions and approaches to bouldering problems. In the same way, I liked to contribute my own ideas to group work during my studies. I also often took on a leading and structuring position.
              <br /><br />
              I am currently working with two friends on a management software based on Typescript, ReactJS and Cloud Firestore. In the process, I am learning to use these technologies more skilfully and quicker every day.
              <br /><br />
              I am always looking for opportunities to expand my knowledge and skills and would therefore be happy to get to know you and your company and to actively support you. Please feel free to contact me so that we can arrange a personal meeting.
              <br /><br />
              <br />
              With kind regards<br />
              <br />
              Julian Bilden
            </div>
          </div>
        );
      default:
        throw Error("Language not supported.");
    }
  }

  return (
    <div className="JobApplication">
      {renderSwitch()}
    </div>
  );
}

export default JobApplication;
