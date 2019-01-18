import React, { Component } from "react";
import Skill from "./skill";
import "../styles/skillTree.css";

class Tree extends Component {
  addPoints(name) {
    this.props.addPoint(name);
  }

  render() {
    let skillItems;
    let pointCalc = this.props.tree.points * 25;
    let style = {};

    if (this.props.tree.points <= 22) {
      style = {
        width: "calc(280px - 4px)",
        height: "calc(" + pointCalc + "px - 4px)"
      };
    } else if (this.props.tree.points > 22) {
      style = {
        width: "calc(280px - 4px)",
        height: "calc(550px - 4px)"
      };
    }

    if (this.props.tree) {
      skillItems = this.props.tree.skill.map(skill => {
        return (
          <Skill
            addPoint={this.addPoints.bind(this)}
            key={skill.name}
            skill={skill}
          />
        );
      });
    }
    return (
      <div className="skillTree">
        <div className="neutral" style={style} />
        {skillItems}
      </div>
    );
  }
}

export default Tree;
