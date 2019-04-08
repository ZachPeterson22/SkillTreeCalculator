import React, { Component } from "react";
import Skill from "./skill";
import "../styles/skillTree.css";

class Tree extends Component {

  getStyle = (points) => {
    let pointCalc = points * 25;
    let style = {};

    if (points <= 22) {
      style = {
        width: "calc(280px - 4px)",
        height: "calc(" + pointCalc + "px - 4px)"
      };
    } else if (points > 22) {
      style = {
        width: "calc(280px - 4px)",
        height: "calc(550px - 4px)"
      };
    }
    return style;
  }

  render() {
    const { points, skill } = this.props.tree;

    return (
      <div className="skillTree">
        <div className="neutral" style={this.getStyle(points)} />
        {
          skill.map((skill) => (
            <Skill
              handlePoints={this.props.handlePoints}
              key={skill.name}
              skill={skill}
            />
          ))
        }
      </div>
    );
  }
}

export default Tree;
