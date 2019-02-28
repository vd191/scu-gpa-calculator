import React, {Component} from 'react';

import {CountProvider} from './contexts/Count';

import QuickInput from './components/QuickInput';
import Summary from './components/Summary';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      units: [
        {name: "Object Oriented Programming", grade: "Credit", credit: 12},
        {name: "Website Development 2", grade: "Pass", credit: 12},
      ]
    }
  }

  render() {
    const {} = this.state;
    return (
      <CountProvider>
        <div className="App">

          <Summary />
          <QuickInput/>

        </div>
      </CountProvider>

    );
  }
}

export default App;



