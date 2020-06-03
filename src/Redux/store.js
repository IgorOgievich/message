import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppReducer} from "./Reducers/AppReducer";
import {WednesdayReducer} from "./Reducers/WednesdayReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    AppReducer: AppReducer,
    WednesdayReducer: WednesdayReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store


