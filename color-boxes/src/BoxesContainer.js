import React, {Component} from "react";
import Box from "./Box";
import "./Box.css";

import {choice} from "./helpers";


class BoxesContainer extends Component {

  static defaultProps = {
    numBoxes: 16,
    allColors: [
      "Aqua",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "Chocolate",
      "DodgerBlue",
      "Lavender",
      "LawnGreen",
      "Peru",
      "Plum",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Yellow",
      "YellowGreen"
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      boxes: Array.from({length: props.numBoxes}, () => choice(props.allColors))
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /** On button click: pick random box, change to random color. */

  handleClick(evt) {
    // get random box to change
    let idx = Math.floor(Math.random() * this.props.numBoxes);

    this.setState(st => {
      let boxes = [...st.boxes];
      boxes[idx] = choice(this.props.allColors);
      return {boxes};
    });
  }

  /** Show boxes and change button. */

  render() {
    const boxComponents = this.state.boxes.map((color, i) => (
        <Box key={i} color={color}/>
    ));

    return (
        <section className="BoxesContainer">
          {boxComponents}

          <p>
            <button onClick={this.handleClick}>Change a Box</button>
          </p>
        </section>
    );
  }
}


export default BoxesContainer