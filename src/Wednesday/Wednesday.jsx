import React from 'react';
import '../index.css'
import {connect} from "react-redux";
import img from '../Img/Eclipse-1s-190px.svg';
import {
    changeButtonSendFalse,
    changeButtonSendTrue,
    changeInputFalse,
    changeInputTrue, changeLoadings,
    changeStyle,
    changeStyleBlue,
    changeStyleGreen,
    changeStyleRed, request,
} from "../Redux/Reducers/WednesdayReducer";

class Wednesday extends React.Component {

    request = () => {
        this.props.request(this.props.isDoneChecked)
    };

    OnChangeInput = () => {
        this.props.isDoneChecked ? this.props.changeInputFalse() : this.props.changeInputTrue();
    };

    render() {
        return <>
            {this.props.loadings ? <img src={img}/> : null}
            <div className="radioInput">
                <div className={this.props.style}>
                    <form>
                        <div>
                            <input onClick={this.props.changeStyleRed} type="radio" name="age"/>
                            - Красная тема
                        </div>
                        <div>
                            <input onClick={this.props.changeStyleBlue} type="radio" name="age"/>
                            - Синяя тема
                        </div>
                        <div>
                            <input onClick={this.props.changeStyleGreen} type="radio" name="age"/>
                            - Зеленая тема
                        </div>
                        <div>
                            <input onClick={this.props.changeStyle} type="radio" name="age"/>
                            - Тема по умолчанию
                        </div>
                    </form>
                    <h1>Огиевич Игорь Леонидович</h1>
                    <div>
                        <input type="checkbox" checked={this.props.isDoneChecked} onChange={this.OnChangeInput}/>
                        <button disabled={this.props.buttonSendProgress} onClick={this.request}>SEND
                        </button>
                    </div>
                </div>
            </div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        style: state.WednesdayReducer.style,
        isDoneChecked: state.WednesdayReducer.isDoneChecked,
        buttonSendProgress: state.WednesdayReducer.buttonSendProgress,
        loadings: state.WednesdayReducer.loadings,
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
        changeButtonSendTrue: () => {
            dispatch(changeButtonSendTrue())
        },
        changeButtonSendFalse: () => {
            dispatch(changeButtonSendFalse())
        },
        changeLoadings: (change) => {
            dispatch(changeLoadings(change))
        },
        request: (isDoneChecked) => {
            dispatch(request(isDoneChecked))
        }
    }
};

const ConnectedWednesday = connect(mapStateToProps, mapDispatchToProps)(Wednesday);
export default ConnectedWednesday;

