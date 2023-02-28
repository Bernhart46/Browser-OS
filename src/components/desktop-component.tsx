import { useState } from 'react';
import { instanceContext } from '../shared/contexts';

import './desktop-component.css';
import InstanceComponent, {
  InstanceComponentProps,
} from './instance-component';
import PanelComponent from './panel-component';

function DesktopComponent() {
  const [instanceArray, setInstanceArray] = useState<InstanceComponentProps[]>(
    []
  );

  function addInstance(newInstance: InstanceComponentProps) {
    setInstanceArray((prev) => [...prev, newInstance]);
  }

  function removeInstance(id: number) {
    setInstanceArray(instanceArray.filter((instance) => instance.id !== id));
  }
  return (
    <instanceContext.Provider
      value={{ instanceArray, addInstance, removeInstance }}
    >
      <div className="desktop-component">
        {instanceArray.map((props) => (
          <InstanceComponent key={props.id} {...props} />
        ))}
        <PanelComponent />
      </div>
    </instanceContext.Provider>
  );
}

export default DesktopComponent;
