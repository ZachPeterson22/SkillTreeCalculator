import React, { Component } from "react";
import Skill from "./skill";
import "../styles/skillTree.css";

class Tree extends Component {
  addPoints(name) {
    this.props.addPoint(name);
  }

  render() {
    // console.log("Tree: ");
    // console.log(this.props);
    let skillItems;
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
    return <div className="skillTree">{skillItems}</div>;
  }
}

export default Tree;
