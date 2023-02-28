import { MenuApplet } from '../applets/menu-applet';
import AppletComponent, { Applet } from './applet-component';
import './panel-component.css';

const AppletArray: Applet[] = [MenuApplet];

function PanelComponent() {
  return (
    <div className="panel-component">
      {AppletArray.map((applet) => (
        <AppletComponent key={applet.id} applet={applet} />
      ))}
    </div>
  );
}

export default PanelComponent;
