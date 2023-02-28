import { FC, useContext, useEffect, useState } from 'react';

import './applet-component.css';
import { instanceContext } from '../shared/contexts';

export type Applet = {
  id: number;
  title: string;
  content?: {
    component: FC;
    isWindow: boolean;
    width?: string;
    height?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  minWidth: string;
  maxWidth?: string;
  width: string;
};

function AppletComponent({ applet }: { applet: Applet }) {
  const { id, title, minWidth, width, content } = applet;

  const [isToggled, setIsToggled] = useState(false);
  const { addInstance, removeInstance } = useContext(instanceContext);

  useEffect(() => {
    manageComponentOnDesktop();
  }, [isToggled]);

  const manageComponentOnDesktop = () => {
    isToggled && content
      ? addInstance({
          id,
          Content: content.component,
          width: content.width,
          height: content.height,
          top: content.top,
          bottom: content.bottom,
          left: content.left,
          right: content.right,
        })
      : removeInstance(id);
  };

  const style = {
    minWidth,
    width,
  };

  return (
    <div
      className="applet-component"
      style={style}
      onClick={() => setIsToggled(!isToggled)}
    >
      {title}
    </div>
  );
}

export default AppletComponent;
