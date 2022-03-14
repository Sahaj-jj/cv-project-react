import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>CV Maker</h1>
        </div>
        <Input data={{type: "text", text: "Name", id: "name"}} />
      </div>
    )
  }
}

export default App;
