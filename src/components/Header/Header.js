import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import NewTaskForm from '../NewTaskForm';

export default class Header extends React.Component {
  static defaultProps = {
    onItemAdded: () => {},
  };

  static propTypes = {
    onItemAdded: PropTypes.func,
  };

  render() {
    const headerText = 'todos';
    const { onItemAdded } = this.props;
    return (
      <header className="header">
        <h1>{headerText}</h1>
        <NewTaskForm onItemAdded={(text) => onItemAdded(text)} />
      </header>
    );
  }
}
