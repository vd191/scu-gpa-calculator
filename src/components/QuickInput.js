import React, {Component} from 'react';

import {CountContext} from '../contexts/Count';
import {InputGroup, FormGroup} from "@blueprintjs/core";

export default class QuickInput extends Component {
  render() {
    return (
      <div>

        <CountContext.Consumer>

          {({updateTotal, updateNumber}) =>
            <div>
              <button onClick={() => updateTotal('f')}> ADD 1 FAIL UNIT</button>
              <button onClick={() => updateTotal('p')}> ADD 1 PASS UNIT</button>
              <button onClick={() => updateTotal('c')}> ADD 1 CREDIT UNIT</button>
              <button onClick={() => updateTotal('d')}> ADD 1 DISTINCTION UNIT</button>
              <button onClick={() => updateTotal('hd')}> ADD 1 HIGH DISTINCTION UNIT</button>

              <h1> INPUT NUMBER </h1>

              <FormGroup
                helperText="Helper text with details..."
                label="PASS"
                labelFor="p"
                labelInfo="(required)"
              >
                <InputGroup id="p" type="number" onChange={updateNumber} placeholder="Number of Pass "  />
              </FormGroup>
            </div>
          }

        </CountContext.Consumer>


      </div>

    );
  }
}

