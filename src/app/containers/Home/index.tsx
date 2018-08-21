import * as React from 'react';
import { Button } from 'antd';

const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Home}>
        <img src={require('./barbar.png')} />
        <p>Hello!</p>
        <Button type="primary">Hello World!</Button>
      </div>
    );
  }
}

export { Home }
