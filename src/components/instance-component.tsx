import { FC } from 'react';
import './instance-component.css';

const DEFAULT_SIZE = {
  WIDTH: '300px',
  HEIGHT: '200px',
};

const DEFAULT_POSITION = {
  TOP: '10px',
  LEFT: '25px',
};

export type InstanceComponentProps = {
  id: number;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  Content?: FC;
};

function InstanceComponent(props: InstanceComponentProps) {
  const { Content, width, height, top, left, bottom, right } = props;

  const position = {
    newTop: top ? top : bottom ? 'auto' : DEFAULT_POSITION.TOP,
    newBottom: top ? 'auto' : bottom ? bottom : 'auto',
    newLeft: left ? left : right ? 'auto' : DEFAULT_POSITION.LEFT,
    newRight: left ? 'auto' : right ? right : 'auto',
  };

  const style = {
    width: width ? width : DEFAULT_SIZE.WIDTH,
    height: height ? height : DEFAULT_SIZE.HEIGHT,
    top: top ? top : position.newTop,
    left: left ? left : position.newLeft,
    bottom: bottom ? bottom : position.newBottom,
    right: right ? right : position.newRight,
  };

  return (
    <div className="instance-component" style={style}>
      {Content && <Content />}
    </div>
  );
}

export default InstanceComponent;
