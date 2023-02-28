import { createContext } from 'react';
import { InstanceComponentProps } from '../components/instance-component';

export const instanceContext = createContext(
  {} as {
    instanceArray: InstanceComponentProps[];
    addInstance: (newInstance: InstanceComponentProps) => void;
    removeInstance: (id: number) => void;
  }
);
