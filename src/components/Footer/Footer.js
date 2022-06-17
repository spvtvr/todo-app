import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import TaskFilter from '../TaskFilter';

export default class Footer extends React.Component {
  static defaultProps = {
    countTodo: 5,
    filter: '',
    onFilterChange: () => {},
    clearCompleted: () => {},
  };

  static propTypes = {
    countTodo: PropTypes.number,
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
    clearCompleted: PropTypes.func,
  };

  render() {
    const { countTodo, filter, onFilterChange, clearCompleted } = this.props;
    const clearCompletedText = 'Clear completed';
    return (
      <footer className="footer">
        <span className="todo-count">{`${countTodo} items left`}</span>
        <TaskFilter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" onClick={clearCompleted}>
          {clearCompletedText}
        </button>
      </footer>
    );
  }
}
