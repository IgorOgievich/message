import React from 'react';
import a from "../ShowName/ShowName.module.css";
import DisplayName from "./DisplayName/DisplayName";


class ShowName extends React.Component {

    newName = React.createRef();
    newNumber = React.createRef();
    state = {
        arr: [
            {name: "Igor"},
        ]
    };

    newarr = () =>{
        let newNameOne = this.newName.current.value;
        let twoName = {name: newNameOne};
    let newNamer = [...this.state.arr, twoName];
        this.setState({
            arr: newNamer
        });
    };

    render = () => {

        let returnName = () => {
            let name = this.newName.current.value;
            alert("Привет " + `${name}`);
            this.newName.current.value = "";
        };

        let plusOne = () => {
            let plus = this.newNumber.current.value;
            this.newNumber.current.value = +plus + 1;
            return(
                plus
            )

        };

        let rezult = () => {
            this.newarr();
            returnName();
            plusOne();
        };

        let arrName = this.state.arr.map(e =>  <DisplayName name = {e.name} />);

        return (
            <div className={a.showName}>
                <p>Ваше имя:</p>
                <input ref={this.newNumber} value="0" size={2}/>
                <input type="text" ref={this.newName} placeholder="Введите ваше имя"/>
                <button onClick={rezult}>Клик</button>
                <p>Введенные имена:</p>
                {arrName}
                {this.rename}
            </div>
        );
    };
}

export default ShowName;
