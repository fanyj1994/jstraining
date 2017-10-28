import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <p>{this.props.text}</p>
        {/* 通过 props 将 action 传给相应的事件 */}
        <input defaultValue={this.props.name} onChange={this.props.onchange} />
      </div>
    );
  }
} 

export default MyComponent;
