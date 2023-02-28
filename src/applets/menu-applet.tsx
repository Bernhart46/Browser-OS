import { Applet } from '../components/applet-component';
import './menu-applet.css';

export const MenuApplet: Applet = {
  id: 0,
  title: 'Menu',
  minWidth: '50px',
  width: '50px',
  content: {
    component: MenuComponent,
    width: '500px',
    height: '350px',
    left: '0px',
    bottom: '50px',
    isWindow: false,
  },
};

export function MenuComponent() {
  return <div className="menu-component">menü</div>;
}
