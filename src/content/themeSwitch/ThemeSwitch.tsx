import { Dispatch, SetStateAction } from 'react';

export interface ThemeSwitchProps {
  lightTheme: boolean;
  setLightTheme: Dispatch<SetStateAction<boolean>>;
}

function LanguagePicker({lightTheme, setLightTheme }: ThemeSwitchProps) {


  const changeTheme = () => {
    if(!lightTheme) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
    
    
    setLightTheme(!lightTheme);
  }

  return (
    <button onClick={changeTheme} className="ThemeSwitch">{lightTheme? "Light Theme": "Dark Theme"}</button>
  );
}

export default LanguagePicker;
