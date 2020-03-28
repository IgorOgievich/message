import React from 'react';
import './App.css';
import Message from "./Message/Message";
import Qualities from "./Qualities/Qualities";
import ShowName from "./ShowName/ShowName";



class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <Message/>
                <Qualities/>
                <ShowName/>
            </div>
        );
    };
}

export default App;
