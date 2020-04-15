import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navigations from "./Navigations/Navigations";
import Content from "./Content/Content";
import Tuesday from "./ Tuesday/Tuesday";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";


class App extends React.Component {
    render = () => {

        return (
            <HashRouter>
                <div className="App">
                    <div className="header">
                        <Header/>
                    </div>
                    <div className="navAndContent">
                        <Navigations/>
                        <Route exact path="/Monday" render={() => <Content/>}/>
                        <Route exact path="/Tuesday" render={() => <Tuesday/>}/>
                    </div>
                </div>
            </HashRouter>
        );
    };
}

export default App;
