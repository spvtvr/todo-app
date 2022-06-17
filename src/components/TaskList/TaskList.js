import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';
import Task from '../Task';

export default class TaskList extends React.Component {
  static defaultProps = {
    tasks: [],
    onDeleted: () => {},
    onToggleActive: () => {},
  };

  static propTypes = {
    tasks: PropTypes.array,
    onDeleted: PropTypes.func,
    onToggleActive: PropTypes.func,
  };

  render() {
    const { tasks, onDeleted, onToggleActive } = this.props;
    const elements = tasks.map((item) => {
      return (
        <Task
          {...item}
          key={item.id}
          onDeleted={() => onDeleted(item.id)}
          onToggleActive={() => onToggleActive(item.id)}
        />
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
