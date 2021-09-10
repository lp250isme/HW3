// import store from "../store/store.js";
import {
  formNum,
  addDot,
  saveNum,
  setNumDefault,
  calculate,
  setDefault,
  toggleSign,
  percent,
  equal,
} from "../actions/cauculatorActions.js";

const FlexItem = window.styled.div({
  background: (props) => (props.isFNkey ? "#FFAA33" : "#8beecd"),
  textAlign: "center",
  verticalAlign: "middle",
  padding: "4px",
  margin: "8px",
  fontSize: "2.5em",
  color: "white",
  fontWeight: "bold",
  flexGrow: (props) => props.flexGrow || "1",
  flexShrink: "1",
  flexBasis: (props) => props.flexBasis || "0%",
  borderRadius: 15,
});

const FlexBox = window.styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-around",
  textAlign: "center",
  padding: "4px",
  margin: "8px",
});

const getMethodSymbol = (method) => {
  switch (method) {
    case "PLUS":
      return "+";
    case "MINUS":
      return "-";
    case "MULTIPLY":
      return "x";
    case "DIV":
      return "÷";
  }
};

const { connect } = ReactRedux;

let NumberBtn = ({ mapProps, onNumBtnClick, ownProps }) => (
  <FlexItem
    flexBasis={0 || ownProps.flexBasis}
    onClick={() => {
      onNumBtnClick(mapProps, ownProps);
    }}
  >
    {ownProps.number}
  </FlexItem>
);

let CalBtn = ({ mapProps, onCalBtnClick, ownProps }) => (
  <FlexItem
    isFNkey={true}
    onClick={() => {
      onCalBtnClick(mapProps, ownProps.method);
    }}
  >
    {ownProps.isEqual ? "=" : getMethodSymbol(ownProps.method)}
  </FlexItem>
);

const Pad = ({ dispatch, mapProps }) => (
  <div>
    <FlexBox>
      <FlexItem
        isFNkey={true}
        onClick={() => {
          dispatch(setDefault());
        }}
      >
        C
      </FlexItem>
      <FlexItem
        isFNkey={true}
        onClick={() => {
          dispatch(toggleSign(mapProps.current_number));
        }}
      >
        ±
      </FlexItem>
      <FlexItem
        isFNkey={true}
        onClick={() => {
          dispatch(percent(mapProps.current_number));
        }}
      >
        %
      </FlexItem>
      <CalBtn method={"DIV"} />
    </FlexBox>
    <FlexBox>
      <NumberBtn number={7} />
      <NumberBtn number={8} />
      <NumberBtn number={9} />
      <CalBtn method={"MULTIPLY"} />
    </FlexBox>
    <FlexBox>
      <NumberBtn number={4} />
      <NumberBtn number={5} />
      <NumberBtn number={6} />
      <CalBtn method={"MINUS"} />
    </FlexBox>
    <FlexBox>
      <NumberBtn number={1} />
      <NumberBtn number={2} />
      <NumberBtn number={3} />
      <CalBtn method={"PLUS"} />
    </FlexBox>
    <FlexBox>
      <NumberBtn number={0} flexBasis={"25%"} />
      <NumberBtn number={"."} />
      <CalBtn method={mapProps.method || "EQUAL"} isEqual={true} />
    </FlexBox>
  </div>
);

const mapStateToProps = (state) => {
  const mapProps = {
    current_number: state.number,
    numbers: state.numbers.numbers,
    method: state.numbers.method,
    nextNum: state.numbers.nextNum,
    readyToCal: state.numbers.readyToCal,
  };
  return {
    mapProps,
  };
};

const mapDispatchToNumProps = (dispatch, ownProps) => {
  return {
    onNumBtnClick: (props) => {
      if (props.nextNum) {
        dispatch(setNumDefault());
      }
      ownProps.number === "." ? dispatch(addDot()) : dispatch(formNum(ownProps.number));
    },
    ownProps,
  };
};

const mapDispatchToCalProps = (dispatch, ownProps) => {
  return {
    onCalBtnClick: (props, method) => {
      let calNumbers = [...props.numbers, props.current_number]; //要計算的數字
      if ([...props.numbers].length > 1) {
        props.nextNum
          ? (calNumbers = [[...props.numbers][0], [...props.numbers][1]]) //沒有輸入下一個數字
          : (calNumbers = [[...props.numbers][0], props.current_number]); //有輸入下一個數字
      }
      dispatch(saveNum(calNumbers, method));
      // if (props.numbers.length > 0) {
      //   ownProps.isEqual ? dispatch(equal(calNumbers, method)) : dispatch(calculate(calNumbers, method));
      // } else {
      //   dispatch(saveNum(calNumbers, method));
      // }

      if (props.readyToCal) {
        if (ownProps.isEqual) {
          dispatch(equal(calNumbers, method));
        } else if (!props.nextNum) {
          dispatch(calculate(calNumbers, method));
        }
      } else {
        dispatch(saveNum(calNumbers, method));
      }
    },
    ownProps,
  };
};

NumberBtn = connect(mapStateToProps, mapDispatchToNumProps)(NumberBtn);

CalBtn = connect(mapStateToProps, mapDispatchToCalProps)(CalBtn);

const NumberPad = connect(mapStateToProps)(Pad);

export default NumberPad;
