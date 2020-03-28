import React from 'react';
import a from "../ShowName/ShowName.module.css";
import DisplayName from "./DisplayName/DisplayName";


class ShowName extends React.Component {

    newName = React.createRef();
    newNumber = React.createRef();
    state = {
        arr: [
            {name: ""},
        ],
    };

    newarr = () => {
        let newNameOne = this.newName.current.value;
        let twoName = {name: newNameOne};
        let newNamer = [...this.state.arr, twoName];
        this.setState({
            arr: newNamer
        });
    };
    plusOne = () => {
        let plus = +this.newNumber.current.value + 1;
        return (
            this.newNumber.current.value = plus
        )
    };
    returnName = () => {
        let name = this.newName.current.value;
        alert("Привет " + `${name}`);
        this.newName.current.value = "";
    };
    rezult = () => {
        this.newarr();
        this.returnName();
        this.plusOne();
    };

    render = () => {

        let arrName = this.state.arr.map(e => <DisplayName name={e.name}/>);

        return (
            <div className={a.showName}>
                <p>Ваше имя:</p>
                <input ref={this.newNumber} value="0" size={2}/>
                <input type="text" ref={this.newName} placeholder="Введите ваше имя"/>
                <button onClick={this.rezult}>Клик</button>
                <p>Введенные имена:</p>
                {arrName}
            </div>
        );
    };
}

export default ShowName;
