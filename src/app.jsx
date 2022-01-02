import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  mainIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    console.log(habit, "habit");
    console.log(index, "increment");
    habits[index].count++;
    this.setState({ habits: habits });
  };

  mainDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count > 0 ? count : 0;
    this.setState({ habits });
  };

  mainDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Habits
          habits={this.state.habits}
          handleIncrement={this.mainIncrement}
          handleDecrement={this.mainDecrement}
          handleDelete={this.mainDelete}
        />
      </div>
    );
  }
}
export default App;
