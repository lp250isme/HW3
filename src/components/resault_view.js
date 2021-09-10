const View = window.styled.div({
  background: "#e2e2e3",
  padding: "4px 20px 4px 4px",
  margin: " 8px",
  textAlign: "right",
  fontSize: "2.5em",
  fontWeight: "bold",
  borderRadius: 15,
});

const { connect } = ReactRedux;

const mapStateToProps = (state) => {
  // console.log("state:", state);
  return {
    num: state.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

let ResaultView = ({ num }) => {
  return <View>{num}</View>;
};

ResaultView = connect(mapStateToProps, mapDispatchToProps)(ResaultView);

export default ResaultView;
