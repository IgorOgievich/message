import React from 'react';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import {saveState, restoreState} from "./SaveAndDefaultState";


class TodoList extends React.Component {
    nextTaskId = 1;

    // saveState = () => {
    //     localStorage.setItem("our-state" + this.props.id, JSON.stringify(this.state));
    // };

    restoreNewState = () => {
        let newSatte = restoreState(this.props.id, this.state);
        this.setState(newSatte, () => {
            this.state.tasks.forEach(task => {
                if (task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1;
                }
            })
        });
    };

    componentDidMount() {
        this.restoreNewState()
    };

    state = {
        tasks: [
            // {id: 0, title: "JS", isDone: true, priority: "medium"},
            // {id: 1, title: "HTML", isDone: false, priority: "low"},
            // {id: 2, title: "Css", isDone: true, priority: "low"},
            // {id: 3, title: "React", isDone: false, priority: "low"}
        ],
        filterValue: "All"
    };

    // changePriority = (priority) => {
    //     switch (priority) {
    //         case "high":
    //             this.setState({
    //                 priority: "low",
    //                 classPriority: "greenPriority"
    //             },() => saveState(this.props.id, this.state));
    //             break;
    //         case  "low":
    //             this.setState({
    //                 priority: "middle",
    //                 classPriority: "redPriority"
    //             },() => saveState(this.props.id, this.state));
    //             break;
    //         case  "middle":
    //             this.setState({
    //                 priority: "high",
    //                 classPriority: "priority"
    //             },() => saveState(this.props.id, this.state));
    //             break;
    //     }
    // };


    deleteTask = (taskId) => {
        let newArr = this.state.tasks.filter(e => e.id !== taskId);
        this.setState({
            tasks: newArr
        }, () => saveState(this.props.id, this.state))
    };


    addTask = (newText,) => {
        let newTask = {
            id: this.nextTaskId, title: newText, isDone: false, priority: "high"};
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => saveState(this.props.id, this.state));
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => saveState(this.props.id, this.state));
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        });
        this.setState({
            tasks: newTasks
        }, () => saveState(this.props.id, this.state))
    };
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    };
    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    };
    changePriority = (taskId, priority) => {
        this.changeTask(taskId, {priority: priority})
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <TodoListTitle title={this.props.title}/>
                        <AddNewItemForm addItem={this.addTask}/>
                    </div>
                    <TodoListTasks changeStatus={this.changeStatus}
                                   changePriority = {this.changePriority}
                                   deleteTask={this.deleteTask}
                                   state={this.state.tasks}
                                   changeTitle={this.changeTitle}
                                   tasks={this.state.tasks.filter(t => {
                                       if (this.state.filterValue === "All") {
                                           return true;
                                       }
                                       if (this.state.filterValue === "Completed") {
                                           return t.isDone === true;
                                       }
                                       if (this.state.filterValue === "Active") {
                                           return t.isDone === false;
                                       }
                                   })}/>
                    <TodoListFooter changeFilter={this.changeFilter}
                                    filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default TodoList;

