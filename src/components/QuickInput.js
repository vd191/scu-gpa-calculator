import React, {Component} from 'react';

import {CountContext} from '../contexts/Count';
import {InputGroup, FormGroup} from "@blueprintjs/core";

import "./quick-input.css";

export default class QuickInput extends Component {
  render() {
    return (
      <div>
        <h2> QUICK INPUT </h2>
        <p> If all of your units are single-weighted units (12 credit points each), so you can quick calculate your GPA
        by putting the number of units you have done so far below.
        </p>

        <CountContext.Consumer>
          {({updateTotal, updateNumber}) =>
            <div className="quick-input">

              <div>
                <FormGroup label="FAIL">
                  <InputGroup type="number" placeholder="Number of Fail "
                              onKeyUp={(event) => updateNumber(event, 'f')}/>
                </FormGroup>
              </div>

              <div>
                <FormGroup label="PASS">
                  <InputGroup type="number" placeholder="Number of Pass "
                              onKeyUp={(event) => updateNumber(event, 'p')}/>
                </FormGroup>
              </div>

              <div>
                <FormGroup label="CREDIT">
                  <InputGroup type="number" placeholder="Number of Credit "
                              onKeyUp={(event) => updateNumber(event, 'c')}/>
                </FormGroup>
              </div>

              <div>
                <FormGroup label="DISTINCTION">
                  <InputGroup type="number" placeholder="Number of Distinction "
                              onKeyUp={(event) => updateNumber(event, 'd')}/>
                </FormGroup>
              </div>

              <div>
                <FormGroup label="HIGH DISTINCTION">
                  <InputGroup type="number" placeholder="Number of High Distinction "
                              onKeyUp={(event) => updateNumber(event, 'hd')}/>
                </FormGroup>
              </div>

            </div>
          }

        </CountContext.Consumer>


      </div>

    );
  }
}

