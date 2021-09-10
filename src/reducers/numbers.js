import { SAVE_NUM, DEFAULT_NUM, DEFAULT, CALCULATE, EQUAL } from "../constants/action_types.js";
import { calculate } from "./calculate.js";

const initState = {
  numbers: [],
  method: "",
  nextNum: false,
  readyToCal: false,
};

export const numbers = (state = initState, action) => {
  // console.log("in numbers action:", action);
  switch (action.type) {
    case SAVE_NUM:
      return {
        ...state,
        numbers: [...action.number],
        method: action.method,
        nextNum: true,
        readyToCal: true,
      };
    case CALCULATE:
      return {
        ...state,
        // numbers: [calculate(undefined, { ...action, type: action.method }), 1],
        numbers: [calculate(undefined, { ...action, type: action.method })],
        method: action.method,
        nextNum: true,
        readyToCal: false,
      };
    case EQUAL:
      return {
        ...state,
        numbers: [calculate(undefined, { ...action, type: action.method }), action.numbers[1]],
        method: action.method,
        nextNum: true,
        readyToCal: true,
      };
    case DEFAULT_NUM:
      return {
        ...state,
        nextNum: false,
      };
    case DEFAULT:
      return initState;
    default:
      return state;
  }
};
