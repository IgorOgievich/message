import React from 'react';
import a from "../ShowName/ShowName.module.css";
import DisplayName from "./DisplayName/DisplayName";


class ShowName extends React.Component {

    render = () => {
        let newName = React.createRef();
        let newNumber = React.createRef();

        let returnName = () => {
            let name = newName.current.value;
            alert("Привет " + `${name}`);
            newName.current.value = "";
        };

        let plusOne = () => {
            let plus = newNumber.current.value;
            return (
                newNumber.current.value = +plus + 1
            )
        };


        let state = [
            {name: "Igor"},
            {name: "Anna"},
            {name: "Anna"},
        ];

        let rezult = () => {
            returnName()
            plusOne()
        };


        let arrName = state.map(e =>  <DisplayName name = {e.name} />);


        return (
            <div className={a.showName}>
                <p>Ваше имя:</p>
                <input ref={newNumber} value="0" size={2}/>
                <input type="text" ref={newName} placeholder="Введите ваше имя"/>
                <button onClick={rezult}>Клик</button>
                <p>Введенные имена:</p>
                {arrName}
            </div>
        );
    };
}

export default ShowName;
