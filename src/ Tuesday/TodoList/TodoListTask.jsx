import React from 'react';
import './TodoListApp.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,

    };


    activateEditMode = () => {
        this.setState({
            editMode: true
        }, () => this.saveState())
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        }, () => this.saveState())
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

    changePriorityClick = (e) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value)
    };



    render = () => {
        let a = "Id Элемента = " + this.props.task.id;

        let taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className="task" id="i-have-a-tooltip" data-description={a}>
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
                        <select onChange={this.changePriorityClick}
                                value={this.props.task.priority}>
                            <option value ="high">high</option>
                            <option value ="low">low</option>
                            <option value ="middle">middle</option>
                        </select>
                    </span>
                </div>
                <button className="deleteButton" onClick={this.onClickAddDelete}>x</button>
            </div>)

    }
}


export default TodoListTask;
