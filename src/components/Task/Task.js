import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends React.Component {
  static defaultProps = {
    description: 'Task name',
    createdTime: new Date(),
    onDeleted: () => {},
    onEdit: () => {},
    onToggleActive: () => {},
    taskStatus: 'active',
    done: false,
  };

  static propTypes = {
    description: PropTypes.string,
    createdTime: PropTypes.object,
    onDeleted: PropTypes.func,
    onEdit: PropTypes.func,
    onToggleActive: PropTypes.func,
    taskStatus: PropTypes.string,
    done: PropTypes.bool,
  };

  state = {
    value: this.props.description,
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  saveText = (e) => {
    const { value } = this.state;
    const { id, edit } = this.props;
    if (e.key === 'Enter') {
      this.props.saveEditingText(value, id, edit);
    }
  };

  render() {
    let { description, createdTime, onDeleted, onEdit, onToggleActive, taskStatus, done, edit, id } = this.props;
    const { value } = this.state;
    return (
      <li className={taskStatus}>
        <div className="view">
          {edit === true ? (
            <label>
              <input
                className="editinput"
                onChange={this.onChangeInput}
                value={value}
                onKeyDown={(e) => this.saveText(e)}
              ></input>
            </label>
          ) : (
            <>
              <input className="toggle" type="checkbox" onClick={onToggleActive} defaultChecked={done} />
              <label>
                <span className="description">{description}</span>
                <span className="created"> created {formatDistanceToNow(createdTime)} ago</span>
              </label>
              <button className="icon icon-edit" onClick={() => onEdit(id, edit)}></button>
              <button className="icon icon-destroy" onClick={onDeleted}></button>
            </>
          )}
        </div>
      </li>
    );
  }
}
