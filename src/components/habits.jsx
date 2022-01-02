import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  // this.props.handleIncrement() 괄호 안에 this.props.habits를 넣어 주었는데 에러가 떴다.
  // 에러가 난 이유는 this.props.habits를 map으로 돌리면 요소를 하나씩 하나씩 돌기 때문에
  // 요소를 habit={item}으로 하나씩 전달해서 요소의 데이터를 사용하면 되지만
  // this.props.handleIncrement()는 그렇지 않기 때문에 인자값을 넣어줘서
  // 정확히 어떤 요소를 받아오는지 알려줘야 하는것 같다.
  controlIncrement = (habit) => {
    this.props.handleIncrement(habit);
  };

  controlDecrement = (habit) => {
    this.props.handleDecrement(habit);
  };

  controlDelete = (habit) => {
    this.props.handleDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((item) => (
            <Habit
              key={item.id}
              habit={item}
              onIncrement={this.controlIncrement}
              onDecrement={this.controlDecrement}
              onDelete={this.controlDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset
        </button>
      </>
    );
  }
}
export default Habits;
