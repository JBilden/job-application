import { useState } from 'react';
import './App.css';
import ErrorPage from './content/ErrorPage';
import { languages } from './languagePicker/helper/languageHelper';

import Home from './content/Home';
import Impressum from './content/Impressum';
import JobApplication from './content/JobApplication';
import LanguagePicker from './languagePicker/LanguagePicker';
import Resume from './content/Resume';
import Features from './content/Features';
import ThemeSwitch from './content/themeSwitch/ThemeSwitch';
import Navigation from './navigation/Navigation';

function App() {

  const [lightTheme, setLightTheme] = useState(true);

  const [language, setLanguage] = useState<languages>("de");

  // Every Content Tab will be displayed in the Main Navigation.
  const CONTENT_TABS = [
    {
      value: "Startseite",
      valueDE: "Startseite",
      valueUK: "Home",
      component: (
        <Home lang={ language } key="home" />
      )
    },
    {
      value: "Bewerbung",
      valueDE: "Bewerbung",
      valueUK: "Job Application",
      component: (
        <JobApplication lang={ language } key="jobapplication" />
      ),
    },
    {
      value: "Lebenslauf",
      valueDE: "Lebenslauf",
      valueUK: "Resume",
      component: (
        <Resume lang={ language } key="resume" />
      ),
    },
    {
      value: "Features",
      valueDE: "Features",
      valueUK: "Features",
      component: (
        <Features lang={ language } key="features" />
      )
    }
  ]

  // Entries will be displayed in the footer section.
  const CONTENT_FOOTER = [
    {
      value: "Impressum",
      valueDE: "Impressum",
      valueUK: "Impressum",
      component: (
        <Impressum lang={ language } key="impressum"/>
      ),
    }
  ]
  
  // Return value of given URL or false in case URL is not supported.
  const checkForAllowedURL = (value: string): string | boolean => {
    if(CONTENT_TABS.concat(CONTENT_FOOTER).map((tab) => { return tab.value }).includes(value)){
      return value;
    } else if(value === ""){
      return "Startseite";
    }
    return false;
  }

  // Used to check which, if any, tab should be highlighted.
  const checkForTabsURL = (value: string | boolean): string | boolean => {
    if(typeof value === "string" && CONTENT_TABS.map((tab) => { return tab.value }).includes(value)){
      return value;
    }
    return false;
  }

  const [currentTab, setCurrentTab] = useState<string | boolean>(checkForAllowedURL(window.location.pathname.substring(1)));

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    window.history.pushState(null, "", '/' + value)
  }

  return (
    <div className="App">
      <div className="Utils-Wrapper">
        <LanguagePicker language={ language } setLanguage={ setLanguage }/>
        <ThemeSwitch lightTheme={ lightTheme } setLightTheme={ setLightTheme } />
      </div>
      <header>
        {language === "de"? 
          <h2>Willkommen auf der Bewerbungsseite von Julian Bilden</h2>
          : 
          <h2>Welcome to the Job Application Site of Julian Bilden</h2>}
      </header>
      <Navigation 
      navigationTabs={
        CONTENT_TABS.map((tab) => (
          {label:language === "de"? tab.valueDE: tab.valueUK, value: tab.value}
        ))
      } 
      active={checkForTabsURL(currentTab)} 
      onChange={handleTabChange} />
      <div className="Content">
        {currentTab === "" ? handleTabChange("Startseite") : null}
        {CONTENT_TABS.concat(CONTENT_FOOTER).map((tab) => {
          return (tab.value === currentTab) && tab.component
        })}
        {(typeof currentTab === "boolean") && !currentTab && <ErrorPage lang={ language } />}
      </div>
      <footer> 
        <div>
          {CONTENT_FOOTER.map((c) => {
            return (<span onClick={(e) => handleTabChange(c.value)}>{c.value} </span>)
          })}
        </div>
        <a href="https://github.com/JBilden">GitHub</a>
      </footer>
      
      </div>
  );
}

export default App;
