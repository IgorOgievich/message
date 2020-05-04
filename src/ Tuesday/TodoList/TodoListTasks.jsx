import React from 'react';
import './TodoListApp.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let taskElements = this.props.tasks.map(task => {
                return (
                    <TodoListTask changeStatus={this.props.changeStatus}
                                  changeTitle={this.props.changeTitle}
                                  changePriority = {this.props.changePriority}
                                  deleteTask={this.props.deleteTask}
                                  changeCreated={this.props.changeCreated}
                                  created={this.props.created}
                                  task={task}
                                  key={task.id}
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
