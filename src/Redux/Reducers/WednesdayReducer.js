export const CHANGE_STYLE = "Message/reducer/CHANGE-STYLE";
export const CHANGE_STYLE_RED = "Message/reducer/CHANGE-STYLE-RED";
export const CHANGE_STYLE_BLUE = "Message/reducer/CHANGE-STYLE-BLUE";
export const CHANGE_STYLE_GREEN = "Message/reducer/CHANGE-STYLE-GREEN";
export const CHANGE_INPUT_FALSE = "Message/reducer/CHANGE-INPUT-FALSE";
export const CHANGE_INPUT_TRUE = "Message/reducer/CHANGE-INPUT-TRUE";

const initialstate = {
    style: " ",
    isDoneChecked: true
};

export const changeStyle = () => {
    return {
        type: CHANGE_STYLE,
        changeStyle: ""
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
            return {...state, isDoneChecked: action.changeInputTrue}
    }
    return state;
};
