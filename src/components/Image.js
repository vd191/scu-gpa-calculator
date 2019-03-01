import React, {Component} from 'react';
import Src from "../images/src.jpg";


export default class Image extends Component {
  render() {
    return  (
      <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={Src} alt="img" />
    );
  }
}