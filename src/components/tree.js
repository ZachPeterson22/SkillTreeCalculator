import React, { Component } from "react";
import SkillTree from "./skillTree";
import "../styles/tree.css";

class Tree extends Component {
  addPoints(name) {
    this.props.addPoint(name);
  }

  render() {
    // console.log("Trees: ");
    // console.log(this.props);
    let trees;
    if (this.props.trees) {
      trees = this.props.trees.map(tree => {
        return (
          <SkillTree
            addPoint={this.addPoints.bind(this)}
            key={tree.id}
            tree={tree}
          />
        );
      });
    }
    return <div className="Skill">{trees}</div>;
  }
}

export default Tree;
