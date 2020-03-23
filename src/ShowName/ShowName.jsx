import React from 'react';
import a from "../ShowName/ShowName.module.css";

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
        let rezult = () => {
            returnName()
            plusOne()
        };

        return (
            <div className={a.showName}>
                <p>Ваше имя:</p>
                <input ref={newNumber} value="0" size={2}/>
                <input type="text" ref={newName} placeholder="Введите ваше имя"/>
                <button onClick={rezult}>Клик</button>
            </div>
        );
    };
}

export default ShowName;
