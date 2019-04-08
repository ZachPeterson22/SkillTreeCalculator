import React, { Component } from "react";
import SkillTree from "./skillTree";
import "../styles/tree.css";

class Tree extends Component {

  render() {
    return <div className="Skill">
      {
        this.props.trees.map((tree) => (
        <SkillTree
          handlePoints={this.props.handlePoints}
          key={tree.id}
          tree={tree}
        />
        ))
      }
    </div>
  }
}

export default Tree;
