import React from 'react';
import '../index.css'
import {connect} from "react-redux";
import {changeInputFalse, changeInputTrue, changeStyle, changeStyleBlue, changeStyleGreen, changeStyleRed}
    from "../Redux/Reducers/WednesdayReducer";
import axios from "axios";

const Wednesday = (props) => {

    const tryCatch = async ( f ) => {
        try {
            const response = await f();
            console.log('answer: ', response.data);
            return response;
        } catch (e) {
            console.log('error: ', {...e});
            return 'error';
        }
    };
        const f = () => {
            return axios.post(
                `https://neko-cafe-back.herokuapp.com/auth/test`,
                {success: props.isDoneChecked},
            )
        };


    let OnChangeInput = () => {
        if (props.isDoneChecked === true) {
            props.changeInputFalse()
        } else {
            props.changeInputTrue()
        }
    };

    // let ClickButtonSend = () => {
    //     axios.post(
    //         `https://neko-cafe-back.herokuapp.com/auth/test`,
    //         {success: true, isDone: props.isDoneChecked},
    //     )
    //         .then(response => {
    //             debugger
    //                 console.log(response.data);
    //         })
    // };

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
                <div>
                    <input type="checkbox" checked={props.isDoneChecked} onChange={OnChangeInput}/>
                    <button onClick={() => tryCatch(f)}>SEND</button>
                </div>
            </div>
        </div>)
};

const mapStateToProps = (state) => {
    return {
        style: state.WednesdayReducer.style,
        isDoneChecked: state.WednesdayReducer.isDoneChecked
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
        changeInputFalse: () => {
            dispatch(changeInputFalse())
        },
        changeInputTrue: () => {
            dispatch(changeInputTrue())
        },
    }
};

const ConnectedWednesday = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default ConnectedWednesday;

