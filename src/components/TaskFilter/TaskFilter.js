import React from 'react';
import PropTypes from 'prop-types';
import './TaskFilter.css';

export default class TaskFilter extends React.Component {
  static defaultProps = {
    filter: '',
    onFilterChange: () => {},
  };

  static propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  };

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : '';
      return (
        <li key={name}>
          <button className={clazz} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}
