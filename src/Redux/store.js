import {createStore} from "redux";

const initialstate = {
    loading: true
};




const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: action.loading}
    }
    return state;
};





const store = createStore(reducer);
export default store


