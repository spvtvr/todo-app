import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends React.Component {
  static defaultProps = {
    description: 'Task name',
    createdTime: new Date(),
    onDeleted: () => {},
    onToggleActive: () => {},
    taskStatus: 'active',
    done: false,
  };

  static propTypes = {
    description: PropTypes.string,
    createdTime: PropTypes.object,
    onDeleted: PropTypes.func,
    onToggleActive: PropTypes.func,
    taskStatus: PropTypes.string,
    done: PropTypes.bool,
  };

  render() {
    let { description, createdTime, onDeleted, onToggleActive, taskStatus, done } = this.props;

    return (
      <li className={taskStatus}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={done} onClick={onToggleActive}></input>
          <label>
            <span className="description">{description}</span>
            <span className="created">{`created ${formatDistanceToNow(createdTime)} ago`}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
