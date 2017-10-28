import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import Store from './store';

@observer  // 装饰器， 整个 APP 组件是一个观察者，只要 @observable(被观察的属性) 变化，整个组件都会更新
class App extends React.Component {
  render() {
    return (
      <div className="index">
        <p>{this.props.store.decorated}</p>
        <input
          defaultValue={this.props.store.name}
          onChange={(event) => this.props.store.name = event.currentTarget.value}
        />
      </div>
    );
  }
}

const store = new Store();

ReactDOM.render(
  <App store={store} />, // 把整个 Store 树用属性传给组件调用
  document.body.appendChild(document.createElement('div'))
);
