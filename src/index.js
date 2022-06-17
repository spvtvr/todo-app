import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

class TodoApp extends React.Component {
  maxID = 100;
  state = {
    tasksData: [
      this.createTodoItem('First task'),
      this.createTodoItem('Second task'),
      this.createTodoItem('Third task'),
    ],
    filter: 'all',
  };

  createTodoItem(label) {
    return {
      id: this.maxID++,
      taskStatus: 'active',
      description: label,
      createdTime: new Date(),
      done: false,
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ tasksData }) => {
      const copyArr = [...tasksData, newItem];

      return {
        tasksData: copyArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((elem) => elem.id === id);
      const [...copyArr] = tasksData;
      copyArr.splice(idx, 1);

      return {
        tasksData: copyArr,
      };
    });
  };

  onToggleActive(id) {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((elem) => elem.id === id);
      const oldItem = tasksData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      if (newItem.done) {
        newItem.taskStatus = 'completed';
      } else newItem.taskStatus = '';
      const [...copyArr] = tasksData;
      const newArray = [...copyArr.slice(0, idx), newItem, ...copyArr.slice(idx + 1)];

      return {
        tasksData: newArray,
      };
    });
  }

  clearCompleted = () => {
    this.setState(({ tasksData }) => {
      return {
        tasksData: tasksData.filter((item) => item.taskStatus !== 'completed'),
      };
    });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'completed':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const doneCount = this.state.tasksData.filter((item) => !item.done).length;
    const { tasksData, filter } = this.state;

    const visibleItems = this.filter(tasksData, filter);

    return (
      <section className="todoapp">
        <Header onItemAdded={this.addItem} />
        <section className="main">
          <TaskList tasks={visibleItems} onDeleted={this.deleteItem} onToggleActive={this.onToggleActive.bind(this)} />
          <Footer
            countTodo={doneCount}
            clearCompleted={this.clearCompleted}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<TodoApp />);
