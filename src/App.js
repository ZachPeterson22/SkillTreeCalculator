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
          skill: [
            {
              name: "First",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Second",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Third",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Fourth",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Fifth",
              currentPts: 0,
              maxPts: 1
            },
            {
              name: "Sixth",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Seventh",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Eighth",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Ninth",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Tenth",
              currentPts: 0,
              maxPts: 1
            }
          ]
        },
        {
          id: "Tree 2",
          skill: [
            {
              name: "First2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Second2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Third2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Fourth2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Fifth2",
              currentPts: 0,
              maxPts: 1
            },
            {
              name: "Sixth2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Seventh2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Eighth2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Ninth2",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Tenth2",
              currentPts: 0,
              maxPts: 1
            }
          ]
        },
        {
          id: "Tree 3",
          skill: [
            {
              name: "First3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Second3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Third3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Fourth3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Fifth3",
              currentPts: 0,
              maxPts: 1
            },
            {
              name: "Sixth3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Seventh3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Eighth3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Ninth3",
              currentPts: 0,
              maxPts: 5
            },
            {
              name: "Tenth3",
              currentPts: 0,
              maxPts: 1
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
      skill.currentPts++;
    }
    this.setState({ skill });
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
