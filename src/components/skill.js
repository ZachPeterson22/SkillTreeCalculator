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
    // for(let i = 0; i < this.props.skill.activeClasses)
    return (
      <div
        className={className}
        id={this.props.skill.currentPts}
        onClick={this.addPoints.bind(this, this.props.skill.name)}
      >
        <div className={this.props.skill.activeClass} />
        <div className="skill-text">{this.props.skill.name}</div>
        <div className="skill-text">
          {this.props.skill.currentPts} / {this.props.skill.maxPts}
        </div>
      </div>
    );
  }
}

export default Skill;
