import React from "react";
import Task from "../task";
import PropTypes from "prop-types";
import "./task-list.css";
export default class TaskList extends React.Component {
  render() {
    const { todos, onDeleted, completeItem } = this.props;
    const elements = todos.map((item) => {
      const { id, discription, complete, filterComplete } = item;
      let classNames = "";
      if (complete) {
        classNames = "completed";
      }
      if (filterComplete) {
        classNames += " hidden";
      }
      return (
        <li key={id} id={id} className={classNames}>
          <Task
            discription={discription}
            onDelete={() => onDeleted(id)}
            completeItem={() => completeItem(id)}
          />
        </li>
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
  static defaultProps = {
    onDeleted: () => {},
    completeItem: () => {},
  };
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleted: PropTypes.func,
    completeItem: PropTypes.func,
  };
}
