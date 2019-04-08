import React, { Component } from "react";
import "../styles/skill.css";

class Skill extends Component {

  render() {
    const { name, activeClass, currentPts, maxPts } = this.props.skill;
    let className = "box " + name;
    return (
      <div
        className={className}
        id={this.props.skill.currentPts}
        onClick={this.props.handlePoints.bind(this, name)}
      >
        <div className={activeClass} />
        <div className="skill-text">{name}</div>
        <div className="skill-text">
          {currentPts} / {maxPts}
        </div>
      </div>
    );
  }
}

export default Skill;
