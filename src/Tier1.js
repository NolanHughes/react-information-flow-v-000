import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {
  constructor() {
      super()
      const initialColor = getRandomColor()
      const secondColor = getReducedColor(initialColor)
      const thirdColor = getReducedColor(secondColor)
      this.state = {
        color: initialColor,
        childColor: secondColor,
        grandchildColor: thirdColor
      }
    }

    handleClick = () => {
      const initialColor = getRandomColor()
      const secondColor = getReducedColor(initialColor)
      const thirdColor = getReducedColor(secondColor)
      this.setState({
        color: initialColor,
        childColor: secondColor,
        grandchildColor: thirdColor
      })
    }

    handleChildClick = (e) => {
      e.stopPropagation()
      const secondColor = getRandomColor()
      const thirdColor = getReducedColor(secondColor)
      this.setState({
        childColor: secondColor,
        grandchildColor: thirdColor
      })
    }

    handleGrandchildClick = (e) => {
      e.stopPropagation()
      const thirdColor = getRandomColor()
      this.setState({
        grandchildColor: thirdColor
      })
    }

    render() {
      return (
        <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
          <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
          <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandchildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
        </div>
      )
    }
}
