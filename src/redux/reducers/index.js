import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer";
import { SNACKBAR_SHOW } from "./snackBar";

const rootReducer = combineReducers({
    snackBar: SNACKBAR_SHOW,
    people: peopleReducer,
});

export default rootReducer;
