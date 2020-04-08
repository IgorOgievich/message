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
        valueInputNumber: 0,
        error: false,
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
        let valueInputNumber = this.state.valueInputNumber;
        let plus = valueInputNumber + 1;
        this.addTask(valueInputName);
        this.state.valueInputName = "";
        if (valueInputName === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            this.setState({valueInputNumber: plus});
            alert("Привет " + `${valueInputName}`);
        }
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onClickAddButton();
        }
    };

    render = () => {

        let arrName = this.state.tasks.map(e => <DisplayName name={e.nameTask}/>);
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
