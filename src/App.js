import React, {Component} from 'react';

import {CountProvider} from './contexts/Count';

import QuickInput from './components/QuickInput';
import Summary from './components/Summary';
import Image from './components/Image';

import './App.css';

class App extends Component {

  render() {
    return (
      <CountProvider>
        <div className="App">

          <div className="image">
            <Image/>
          </div>


          <div className="content">
            <div style={{marginBottom: 50}}>
              <h1 style={{margin: 0}}> GPA Calculator </h1>
              <h2 style={{margin: 0, marginBottom: 10}}> Southern Cross University </h2>
              <p> The GPA is a numerical calculation that summarises your academic performance during a single study
                period or for the duration of your enrolment in your course. The GPA is recorded on your academic
                transcript and Australian Higher Education Graduate Statement (AHEGS).</p>
            </div>

            <QuickInput/>

            <div style={{marginTop: 20}}>
              <Summary/>
            </div>
          </div>


        </div>
      </CountProvider>

    );
  }
}

export default App;



