import React from 'react';
import './TodoListApp.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        },)
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        },)
    };

    onIsDoneChanged = (e) => {
        let finished = this.props.created;
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked, finished);
    };
    onTitleChanged = (e) => {
        let updated = this.props.created;
        this.props.changeTitle(this.props.task.id, e.currentTarget.value, updated);
    };

    onClickAddDelete = () => {
        let newId = this.props.task.id;
        this.props.deleteTask(newId);
    };

    changePriorityClick = (e) => {
        let updated = this.props.created;
        this.props.changePriority(this.props.task.id, e.currentTarget.value, updated)

    };

    changeCreatedClick = () => {
        let created = this.props.created;
        this.props.changeCreated(this.props.task.id, created)
    };

    componentDidMount() {
        this.changeCreatedClick()
    }

    render = () => {
        let created = "Создано - " + this.props.task.created + ";";
        let updated = "Обновлено - " + this.props.task.updated + ";";
        let finished = "Выполнено - " + this.props.task.finished;
        let taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className="task" id="i-have-a-tooltip" data-description={created + " " + updated + " " + finished}>
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
                            <option value="high">high</option>
                            <option value="low">low</option>
                            <option value="middle">middle</option>
                        </select>
                    </span>
                </div>
                <button className="deleteButton" onClick={this.onClickAddDelete}>x</button>
            </div>)
    }
}

export default TodoListTask;
