import React from 'react';
import './TodoListApp.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        priority: "high",
        classPriority: "priority"
    };

    changePriority = () => {
        switch (this.state.priority) {
            case "high":
                this.setState({
                    priority: "low",
                    classPriority: "greenPriority"
                });
                break;
            case  "low":
                this.setState({
                    priority: "middle",
                    classPriority: "redPriority"
                });
                break;
            case  "middle":
                this.setState({
                    priority: "high",
                    classPriority: "priority"
                });
                break;
        }
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    onClickAddDelete = () => {
        let newId = this.props.task.id;
        this.props.deleteTask(newId);
    };


    render = () => {

        let taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className="task">
                <div className={taskClass}>
                    <input
                        type="checkbox"
                        checked={this.props.task.isDone}
                        onChange={this.onIsDoneChanged}
                    />
                    <span>{this.props.task.id} - </span>
                    {this.state.editMode
                        ? <input value={this.props.task.title}
                                 autoFocus={true}
                                 onBlur={this.deactivateEditMode}
                                 onChange={this.onTitleChanged}
                        />
                        : <span onClick={this.activateEditMode}>{this.props.task.title}</span>
                    }
                    <span>
                        <span className="pr">/priority-</span>
                        <button onClick={this.changePriority} className={this.state.classPriority}>
                            {this.state.priority}
                        </button>
                    </span>
                </div>
                <button className="deleteButton" onClick={this.onClickAddDelete}>x</button>
            </div>)

    }
}


export default TodoListTask;
