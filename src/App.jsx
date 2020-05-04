import React from 'react';
import './App.module.css';
import Header from "./Header/Header";
import Navigations from "./Navigations/Navigations";
import Monday from "./Monday/Monday";
import Tuesday from "./ Tuesday/Tuesday";
import m from "./App.module.css"
import {HashRouter, Route} from "react-router-dom";
import Loading from "./Loading/Loading";


class App extends React.Component {

    state = {
        loading: false
    };

    loading = () => {
        this.setState({loading: false})
    };

    // componentDidMount() {
    //     setTimeout(this.loading, 3000)
    // };


    render = () => {
        if (this.state.loading === false) {
            return (
                <HashRouter>
                    <div className={m.App}>
                        <div>
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
        } else {
            return (
                <div className={m.loading}>
                    <Loading/>
                </div>
            )
        }
    }
}

export default App;
