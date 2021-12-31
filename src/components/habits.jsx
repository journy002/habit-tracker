import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  habitIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState(habits);
  };

  habitDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count--;
    this.setState(habits);
  };

  habitDelete = (habit) => {};

  render() {
    return (
      <ul>
        {this.state.habits.map((item) => (
          <Habit
            key={item.id}
            habit={item}
            onIncrement={this.habitIncrement}
            onDecrement={this.habitDecrement}
            onDelete={this.habitDelete}
          />
        ))}
      </ul>
    );
  }
}
