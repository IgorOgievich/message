import {combineReducers, createStore} from "redux";
import {AppReducer} from "./Reducers/AppReducer";
import {WednesdayReducer} from "./Reducers/WednesdayReducer";

const rootReducer = combineReducers({
    AppReducer: AppReducer,
    WednesdayReducer: WednesdayReducer
});

const store = createStore(rootReducer);
export default store


