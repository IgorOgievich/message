import React from 'react';
import a from "../ShowName/ShowName.module.css";
import DisplayName from "./DisplayName/DisplayName";
import Input from "./Input/Input";

class ShowName extends React.Component {

    state = {
        tasks: [
            // {nameTask: "Igor"},
        ],
        valueInputName: "",
        valueInputNumber: 0
    };

    addTask = (newText) => {
        let newTask = {nameTask: newText};
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })
    };

    onValueInputNameChange = (e) => {
        this.setState({
            valueInputName: e.currentTarget.value
        });
    };

    onClickAddButton = () => {
        let valueInputName = this.state.valueInputName;
        let plus = this.state.valueInputNumber + 1;
        alert("Привет " + `${valueInputName}`);
        this.addTask(valueInputName);
        this.state.valueInputName = "";
        return (
            this.state.valueInputNumber = plus
        )
    };
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onClickAddButton();
        }
    };

    render = () => {

        let arrName = this.state.tasks.map(e => <DisplayName name={e.nameTask}/>);
        return (
            <div className={a.showName}>
                <p>Ваше имя:</p>
                <span>
                {this.state.valueInputNumber}
                </span>
                <Input value={this.state.valueInputName}
                       onChange={this.onValueInputNameChange}
                       onKeyPress={this.onKeyPress}
                />

                <button onClick={this.onClickAddButton}>Add</button>
                <p>Введенные имена:</p>
                {arrName}
            </div>
        );
    };
}

export default ShowName;
