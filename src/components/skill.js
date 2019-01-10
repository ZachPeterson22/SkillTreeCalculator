import React, { Component } from "react";
import "../styles/skill.css";

class Skill extends Component {
  addPoints(name) {
    this.props.addPoint(name);
    // console.log(this.props.skill.currentPts);
  }

  render() {
    // console.log("Skill: ");
    // console.log(this.props);
    let className = "box " + this.props.skill.name;
    return (
      <div
        className={className}
        onClick={this.addPoints.bind(this, this.props.skill.name)}
      >
        <div>{this.props.skill.name}</div>
        <div>
          {this.props.skill.currentPts} / {this.props.skill.maxPts}
        </div>
      </div>
    );
  }
}

export default Skill;
