import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import flashcards from "./flashcards";
export default combineReducers({
  flashcards,
  form: formReducer
});
