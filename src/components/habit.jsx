import React, { PureComponent } from "react";

class Habit extends PureComponent {
  habitIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  habitDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    console.log("delete");
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.habitIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.habitDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
export default Habit;
