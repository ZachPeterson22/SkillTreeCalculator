import React, { Component } from "react";
import Tree from "./components/tree";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      trees: [
        {
          skill: []
        }
      ]
    };
  }

  componentWillMount() {
    this.resetTrees();
  }

  resetTrees() {
    this.setState({
      totalPoints: 50,
      trees: [
        {
          id: "Tree 1",
          points: 0,
          skill: [
            {
              name: "First",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Second",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Third",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Fourth",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Fifth",
              currentPts: 0,
              maxPts: 1,
              activeClass: "default"
            },
            {
              name: "Sixth",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Seventh",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Eighth",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Ninth",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Tenth",
              currentPts: 0,
              maxPts: 1,
              activeClass: "default"
            }
          ]
        },
        {
          id: "Tree 2",
          points: 0,
          skill: [
            {
              name: "First2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Second2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Third2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Fourth2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Fifth2",
              currentPts: 0,
              maxPts: 1,
              activeClass: "default"
            },
            {
              name: "Sixth2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Seventh2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Eighth2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Ninth2",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Tenth2",
              currentPts: 0,
              maxPts: 1,
              activeClass: "default"
            }
          ]
        },
        {
          id: "Tree 3",
          points: 0,
          skill: [
            {
              name: "First3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Second3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Third3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Fourth3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Fifth3",
              currentPts: 0,
              maxPts: 1,
              activeClass: "default"
            },
            {
              name: "Sixth3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Seventh3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Eighth3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Ninth3",
              currentPts: 0,
              maxPts: 5,
              activeClass: "default"
            },
            {
              name: "Tenth3",
              currentPts: 0,
              maxPts: 1,
              activeClass: "default"
            }
          ]
        }
      ]
    });
  }

  handlePoints(name) {
    let tempStorage = this.state.trees;
    let tree = tempStorage.find(i => i.skill.find(x => x.name === name));
    let skill = tree.skill.find(x => x.name === name);
    if (skill.currentPts < skill.maxPts) {
      tree.points++;
      skill.currentPts++;
      this.changeTreeClass(tree);
      this.changeClass(skill);
    }
    this.setState({ tempStorage });
  }

  changeTreeClass(tree) {
    // for when i color tree based on skills
  }

  changeClass(skill) {
    if (skill.maxPts === 1) {
      if (skill.activeClass === "default") {
        skill.activeClass = "default-single";
      }
    } else {
      if (skill.activeClass === "default") {
        skill.activeClass = "a";
      } else if (skill.activeClass === "a") {
        skill.activeClass = "b";
      } else if (skill.activeClass === "b") {
        skill.activeClass = "c";
      } else if (skill.activeClass === "c") {
        skill.activeClass = "d";
      } else if (skill.activeClass === "d") {
        skill.activeClass = "e";
      }
    }
    return skill;
  }

  render() {
    return (
      <div className="App">
        <Tree
          addPoint={this.handlePoints.bind(this)}
          trees={this.state.trees}
        />
        <div className="resetBtn" onClick={this.resetTrees.bind(this)}>
          RESET SKILL POINTS
        </div>
      </div>
    );
  }
}

export default App;
