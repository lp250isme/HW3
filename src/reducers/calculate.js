import { PLUS, MINUS, MULTIPLY, DIV, EQUAL } from "../constants/action_types.js";

export const calculate = (state, action) => {
  let result = 0;
  switch (action.type) {
    case PLUS:
      result = math.evaluate(action.numbers[0] + action.numbers[1]);
      if (result % 1 == 0) return result;
      return parseFloat(math.format(result, { precision: 14 }));
    case MINUS:
      result = math.evaluate(action.numbers[0] - action.numbers[1]);
      if (result % 1 == 0) return result;
      return parseFloat(math.format(result, { precision: 14 }));
    case MULTIPLY:
      result = math.evaluate(action.numbers[0] * action.numbers[1]);
      if (result % 1 == 0) return result;
      return parseFloat(math.format(result, { precision: 14 }));
    case DIV:
      result = math.evaluate(action.numbers[0] / action.numbers[1]);
      if (result % 1 == 0) return result;
      return parseFloat(math.format(result, { precision: 14 }));
    case EQUAL:
      return action.numbers[0];
    default:
      return state;
  }
};
