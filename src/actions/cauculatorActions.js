import {
  FORM_NUM,
  ADD_DOT,
  SAVE_NUM,
  DEFAULT_NUM,
  DEFAULT,
  CALCULATE,
  EQUAL,
  TOGGLE_SIGN,
  PERCENT,
} from "../constants/action_types.js";

export const calculate = (numbers, method) => {
  return {
    type: CALCULATE,
    numbers,
    method,
  };
};

export const equal = (numbers, method) => {
  return {
    type: EQUAL,
    numbers,
    method,
  };
};

export const formNum = (num) => {
  return {
    type: FORM_NUM,
    num,
  };
};

export const setNumDefault = () => {
  return {
    type: DEFAULT_NUM,
  };
};

export const addDot = () => {
  return {
    type: ADD_DOT,
  };
};

export const saveNum = (number, method) => {
  return {
    type: SAVE_NUM,
    number,
    method,
  };
};

export const setDefault = () => {
  return {
    type: DEFAULT,
  };
};

export const toggleSign = (number) => {
  return {
    type: TOGGLE_SIGN,
    number: number,
  };
};

export const percent = (number) => {
  return {
    type: PERCENT,
    number: number,
  };
};
