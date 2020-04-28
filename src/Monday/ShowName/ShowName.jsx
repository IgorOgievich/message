import React from 'react';
import a from "../ShowName/ShowName.module.css";
import DisplayName from "./DisplayName/DisplayName";
import Input from "./Input/Input";
import Span from "./Span/Span";

class ShowName extends React.Component {

    state = {
        tasks: [
            // {nameTask: "Igor"},
        ],
        valueInputName: "",
        id: 1,
        valueInputNumber: 0,
        error: false,
    };
    nextTaskId = 1;

    saveState = () => {
        localStorage.setItem("our-state" + this.props.id, JSON.stringify(this.state));
    };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("our-state" + this.props.id);
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach(task => {
                if (task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1;
                }
            })
        });
    };

    componentDidMount() {
        this. restoreState()
    };

    addTask = (newText, id) => {
        let newTask = {nameTask: newText, id: id};
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, this.saveState);
    };

    deleteTask = (taskId) => {
        let newArr = this.state.tasks.filter(e => e.id !== taskId);
        this.setState({
            tasks: newArr
        }, this.saveState);
    };

    onValueInputNameChange = (e) => {
        let valueInputName = this.state.valueInputName;
        this.setState({
            valueInputName: e.currentTarget.value
        }, this.saveState);
        if (valueInputName === " ") {
            this.setState({error: true}, this.saveState);
        } else {
            this.setState({error: false}, this.saveState);
        }
    };

    onClickAddButton = () => {
        let newId = this.state.id;
        let plusId = newId  + 1;
        let valueInputName = this.state.valueInputName;
        let valueInputNumber = this.state.valueInputNumber;
        let plus = valueInputNumber + 1;
        this.addTask(valueInputName,plusId );
        this.state.valueInputName = "";
        if (valueInputName === "") {
            this.setState({error: true}, this.saveState);
        } else {
            this.setState({error: false}, this.saveState);
            this.setState({valueInputNumber: plus, id: plusId}, this.saveState);
            alert("Привет " + `${valueInputName}`);
        }
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onClickAddButton();
        }
    };


    render = () => {

        let arrName = this.state.tasks.map((e, i) => <DisplayName
            name={e.nameTask}
            key={i}
            id={e.id}
            deleteTask = {this.deleteTask}
        />);


        let classForError = this.state.error ? "error" : "inputOne";
        return (
            <div className={a.showName}>
                <p>Ваше имя:</p>
                <div className={a.spanInputButton}>
                    <Span valueSpan={this.state.valueInputNumber}/>
                    <Input
                        classInput={classForError}
                        value={this.state.valueInputName}
                        onChange={this.onValueInputNameChange}
                        onKeyPress={this.onKeyPress}
                    />
                    <button onClick={this.onClickAddButton}>Add</button>

                </div>

                <p>Введенные имена:</p>
                {arrName}
            </div>
        );
    };
}

export default ShowName;
