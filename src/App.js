import React from 'react';
import './App.css';
import Message from "./Message/Message";
import Header from "./Header/Header";

function App() {
    return (
        <div className="App">
            <div className="a">
                <Header/>
            </div>
            <div className="b">
                <Message/>
            </div>
        </div>
    );
}

export default App;
