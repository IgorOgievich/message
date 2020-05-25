export const CHANGE_STYLE = "Message/reducer/CHANGE-STYLE";
export const CHANGE_STYLE_RED = "Message/reducer/CHANGE-STYLE-RED";
export const CHANGE_STYLE_BLUE = "Message/reducer/CHANGE-STYLE-BLUE";
export const CHANGE_STYLE_GREEN = "Message/reducer/CHANGE-STYLE-GREEN";
export const CHANGE_INPUT_FALSE = "Message/reducer/CHANGE-INPUT-FALSE";
export const CHANGE_INPUT_TRUE = "Message/reducer/CHANGE-INPUT-TRUE";
export const CHANGE_BUTTON_SEND_TRUE = "Message/reducer/CHANGE-BUTTON-SEND-TRUE";
export const CHANGE_BUTTON_SEND_FALSE = "Message/reducer/CHANGE-BUTTON-SEND-FALSE";
export const CHANGE_LOADINGS = "Message/reducer/CHANGE-LOADINGS";

const initialstate = {
    style: " ",
    isDoneChecked: true,
    buttonSendProgress: false,
    loadings: false
};

export const changeStyle = () => {
    return {
        type: CHANGE_STYLE,
        changeStyle: ""
    }
};

export const changeStyleRed = () => {
    return {
        type: CHANGE_STYLE_RED,
        changeStyleRed: "radioInputRed"
    }
};

export const changeStyleBlue = () => {
    return {
        type: CHANGE_STYLE_BLUE,
        changeStyleBlue: "radioInputBlue"
    }
};

export const changeStyleGreen = () => {
    return {
        type: CHANGE_STYLE_GREEN,
        changeStyleGreen: "radioInputGreen"
    }
};

export const changeInputFalse = () => {
    return {
        type: CHANGE_INPUT_FALSE,
        changeInputFalse: false
    }
};

export const changeInputTrue = () => {
    return {
        type: CHANGE_INPUT_TRUE,
        changeInputTrue: true
    }
};
export const changeButtonSendTrue = () => {
    return {
        type: CHANGE_BUTTON_SEND_TRUE,
        changeButtonSendTrue: true
    }
};
export const changeButtonSendFalse = () => {
    return {
        type: CHANGE_BUTTON_SEND_FALSE,
        changeButtonSendFalse: false
    }
};
export const changeLoadings = (change) => {
    return {
        type: CHANGE_LOADINGS,
        changeLoadings: change
    }
};




export const WednesdayReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CHANGE_STYLE:
            return {...state, style: action.changeStyle};
        case CHANGE_STYLE_RED:
            return {...state, style: action.changeStyleRed};
        case CHANGE_STYLE_BLUE:
            return {...state, style: action.changeStyleBlue};
        case CHANGE_STYLE_GREEN:
            return {...state, style: action.changeStyleGreen};
        case CHANGE_INPUT_FALSE:
            return {...state, isDoneChecked: action.changeInputFalse};
        case CHANGE_INPUT_TRUE:
            return {...state, isDoneChecked: action.changeInputTrue};
        case CHANGE_BUTTON_SEND_TRUE:
            return {...state, buttonSendProgress: action.changeButtonSendTrue};
        case CHANGE_BUTTON_SEND_FALSE:
            return {...state, buttonSendProgress: action.changeButtonSendFalse};
        case CHANGE_LOADINGS:
            return {...state, loadings: action.changeLoadings}
    }
    return state;
};
