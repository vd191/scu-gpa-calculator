import React, {Component} from 'react';


export const CountContext = React.createContext();

export class CountProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fail: 0,
      pass: 0,
      credit: 0,
      distinction: 0,
      highDistinction: 0,
      totalUnit: 0,

      totalPoint: 0,
      creditPoint: 0,

      gpa: 0,

    };

    this.updateNumber = this.updateNumber.bind(this);

  }

  async updateNumber(event, unit) {
    const value = parseInt(event.target.value);
    console.log(event.keyCode);
    console.log(value);

    if(value){
      switch (unit) {
        case "f":
          await this.setState({fail:  value});
          await this.updateGPA();
          break;
        case "p":
          await this.setState({pass:  value});
          await this.updateGPA();
          break;
        case "c":
          await this.setState({credit:  value});
          await this.updateGPA();
          break;
        case "d":
          await this.setState({distinction:  value});
          await this.updateGPA();
          break;
        case "hd":
          await this.setState({highDistinction:  value});
          await this.updateGPA();
          break;
        default:
          console.log('Nothing to do');
          break;
      }

      }else {
      switch (unit) {
        case "f":
          await this.setState({fail:  0});
          await this.updateGPA();
          break;
        case "p":
          await this.setState({pass:  0});
          await this.updateGPA();
          break;
        case "c":
          await this.setState({credit:  0});
          await this.updateGPA();
          break;
        case "d":
          await this.setState({distinction:  0});
          await this.updateGPA();
          break;
        case "hd":
          await this.setState({highDistinction:  0});
          await this.updateGPA();
          break;
        default:
          console.log('Nothing to do');
          break;
      }

    }
  }


  async updateGPA() {
    // get state
    const {
      fail,
      pass,
      credit,
      distinction,
      highDistinction,
    } = this.state;

    // Sum Credit Point = total unit * 12
    const creditPoint = 12 * (fail + pass + credit + distinction + highDistinction);

    // Sum TotalPoint  = 12 * Unit number * UnitWeight
    const totalPoint = 12 * ((fail * 0) + (pass * 4) + (credit * 5) + (distinction * 6) + (highDistinction * 7));

    // GPA = TotalPoint / Credit Point
    const gpa = totalPoint / creditPoint;

    // Set state
    this.setState({
      gpa: gpa,
      totalUnit: creditPoint / 12,
      creditPoint: creditPoint,
      totalPoint: totalPoint,

    });
  }


  render() {
    return (
      <CountContext.Provider value={{
        fail: this.state.fail,
        pass: this.state.pass,
        credit: this.state.credit,
        distinction: this.state.distinction,
        highDistinction: this.state.highDistinction,
        creditPoint: this.state.creditPoint,
        totalPoint: this.state.totalPoint,
        totalUnit: this.state.totalUnit,
        gpa: this.state.gpa,
        updateTotal: this.updateTotal,
        updateNumber: this.updateNumber,
      }}>

        {this.props.children}

      </CountContext.Provider>

    );
  }


}