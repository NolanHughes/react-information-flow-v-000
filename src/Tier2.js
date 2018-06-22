import React, { Component } from 'react'
import Tier3 from './Tier3'


export default class Tier2 extends Component {
  render() {
    return (
      <div className="tier2" onClick={this.props.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleClick={this.props.handleChildClick} color={this.props.childColor} />
        <Tier3 handleClick={this.props.handleChildClick} color={this.props.childColor} />
      </div>
    )
  }
}
