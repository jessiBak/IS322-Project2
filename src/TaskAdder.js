import React, { useState } from 'react';

function TaskAdder(props)
{
  const [newTask, setNewTask] = useState('');

  onFormSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(this.state.newTask);
    this.setState({ newTask: '' })
  }

  render() {
    return (
      <form className="task-input form-group" onSubmit={this.onFormSubmit}>
        <label htmlFor="newTask">Enter New Task</label>
        <input type="text" className="form-control"
               name="newTask"
               value={this.state.newTask}
               onChange={(e) => this.setState({ newTask: e.target.value })} />
      </form>
    );
  }
}

export default AddTask;