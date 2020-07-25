import React, {Component} from "react";
import "./Coin.css";

/** Coin: simple & stateless: just show the name & image of current coin. */

class Coin extends Component {
  render() {
    return (
        <div className="Coin">
          <img src={this.props.info.imgSrc} alt={this.props.info.side} />
        </div>
    );
  }
}


export default Coin;