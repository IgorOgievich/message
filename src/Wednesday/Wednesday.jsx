import React from 'react';
import '../index.css'
import {connect} from "react-redux";
import {changeStyle, changeStyleBlue, changeStyleGreen, changeStyleRed} from "../Redux/Reducers/WednesdayReducer";

const Wednesday = (props) => {


    return (
        <div className="radioInput">
            <div className={props.style}>
                <form>
                    <div>
                        <input onClick={props.changeStyleRed} type="radio" name="age"/>
                        - Красная тема
                    </div>
                    <div>
                        <input onClick={props.changeStyleBlue} type="radio" name="age"/>
                        - Синяя тема
                    </div>
                    <div>
                        <input onClick={props.changeStyleGreen} type="radio" name="age"/>
                        - Зеленая тема
                    </div>
                    <div>
                        <input onClick={props.changeStyle} type="radio" name="age"/>
                        - Тема по умолчанию
                    </div>
                </form>
                <h1>Огиевич Игорь Леонидович</h1>
            </div>
        </div>)
};

const mapStateToProps = (state) => {
    return {
        style: state.WednesdayReducer.style
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeStyle: () => {
            dispatch(changeStyle())
        },
        changeStyleRed: () => {
            dispatch(changeStyleRed())
        },
        changeStyleBlue: () => {
            dispatch(changeStyleBlue())
        },
        changeStyleGreen: () => {
            dispatch(changeStyleGreen())
        },
    }
};

const ConnectedWednesday = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default ConnectedWednesday;