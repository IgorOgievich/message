import React from 'react';
import './TodoListApp.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let taskElements = this.props.tasks.map(task => {
                return (
                    <TodoListTask changeStatus={this.props.changeStatus}
                                  changeTitle={this.props.changeTitle}
                                  // deleteTask ={this.props.deleteTask}
                                  task={task}
                                  key = {task.id}
                                  stater ={this.props.state}
                    />
                )
            }
        );
        return (
            <div className="todoList-tasks">
                {taskElements}
            </div>)
    }
}


export default TodoListTasks;
