import {
  FORM_NUM,
  ADD_DOT,
  DEFAULT,
  DEFAULT_NUM,
  CALCULATE,
  TOGGLE_SIGN,
  PERCENT,
  EQUAL,
} from "../constants/action_types.js";
import { calculate } from "./calculate.js";
import { numbers } from "./numbers.js";

export const number = (state = 0, action) => {
  // console.log("in number reducer:", action);
  switch (action.type) {
    case FORM_NUM:
      return parseFloat(math.evaluate(state.toString() + action.num.toString()));
    case ADD_DOT:
      if ([...state.toString()].includes(".")) return state;
      return state.toString() + ".";
    case CALCULATE:
    case EQUAL:
      return calculate(undefined, { ...action, type: action.method });
    case TOGGLE_SIGN:
      return math.evaluate(action.number * -1);
    case PERCENT:
      return parseFloat(math.format(math.evaluate(action.number * 0.01), { precision: 14 }));
    case DEFAULT_NUM:
      return 0;
    case DEFAULT:
      return 0;
    default:
      return state;
  }
};
