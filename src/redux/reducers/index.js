import { combineReducers } from "redux";
//import { useSelector, TypedUseSelectorHook } from "react-redux";
import themeReducer from "./themeReducer";
import ideasReducer from "./ideasReducer";

const reducers = combineReducers({
  ideas: ideasReducer,
  theme: themeReducer,
  user: () => ({ name: "Adam" }),
});

export default reducers;
