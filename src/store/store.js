import { number } from "../reducers/number.js";
import { numbers } from "../reducers/numbers.js";

const { combineReducers } = Redux;
const app = combineReducers({
  number,
  numbers,
});

const { createStore } = Redux;
const store = createStore(app);

export default store;
