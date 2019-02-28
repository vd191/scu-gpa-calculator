import React, {Component} from 'react';
import {Callout, Card, Elevation} from "@blueprintjs/core";

import {CountContext} from '../contexts/Count';


export default class Summary extends Component {
  render() {
    return (
      <div>

        <CountContext.Consumer>

          {({gpa, creditPoint, totalUnit, totalPoint, fail, pass, credit, distinction, highDistinction}) =>
            <div>

              <Callout  intent="warning" icon="none">
                <h3>YOUR GPA: {gpa} </h3>
              </Callout>


                <p>Total Point: {totalPoint} Credit Point: {creditPoint} </p>
                <p>FAIL UNIT: {fail} PASS UNIT: {pass}</p>
                <p>CREDIT UNIT: {credit} DISTINCTION UNIT: {distinction} </p>
                <p>HIGH DISTINCTION UNIT: {highDistinction} </p>
                <p>TOTAL UNIT: {totalUnit} </p>


            </div>
          }

        </CountContext.Consumer>


      </div>

    );
  }
}

