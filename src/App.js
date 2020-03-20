import React from 'react';
import './App.css';
import Message from "./Message/Message";
import Qualities from "./Qualities/Qualities";

function App(props) {

    return (
        <div className="App">
            <Message/>
            <Qualities/>
        </div>
    );
}

export default App;
