import { NavigationTab } from "./NavigationTab";

export interface NavigationProps {
  navigationTabs: NavigationTab[];
  active: string | boolean;
  onChange: (value: any) => void;
}

// Horizontal Navigation adding a Tab for each entity in the nacigationTabs list.
function Navigation({ navigationTabs, active, onChange }: NavigationProps) {

  const onClick = (e: React.MouseEvent<HTMLLIElement>, value: string) => {
    e.preventDefault();
    onChange(value);
  }

  const className = "NavigationTab";

  return (
    <ul className="NavigationList">
      {navigationTabs.map((tab, index) => {
        return <li className={tab.value === active? className + " active": className} id={tab.value + index} onClick={(e) => onClick(e, tab.value)}>{tab.label}</li>
      })}
    </ul>
  );
}

export default Navigation;
