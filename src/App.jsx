import React from 'react';
import './App.module.css';
import Header from "./Header/Header";
import Navigations from "./Navigations/Navigations";
import Monday from "./Monday/Monday";
import Tuesday from "./ Tuesday/Tuesday";
import m from "./App.module.css"
import {HashRouter, Route} from "react-router-dom";

class App extends React.Component {
    render = () => {
        return (
            <HashRouter>
                <div className={m.App}>
                    <div >
                        <Header/>
                    </div>
                    <div className={m.navAndContent}>
                        <Navigations/>
                        <Route exact path="/Monday" render={() => <Monday/>}/>
                        <Route exact path="/Tuesday" render={() => <Tuesday/>}/>
                    </div>
                </div>
            </HashRouter>
        );
    };
}

export default App;
