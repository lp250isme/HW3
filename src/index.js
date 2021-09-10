import Background from "./style/background.js";
import Title from "./style/title.js";
import ResaultView from "./components/resault_view.js";
import NumberPad from "./components/number_pad.js";
import store from "./store/store.js";

const { Provider } = ReactRedux;

const App = () => (
  <div style={{ textAlign: "center", padding: 0 }}>
    <Background>
      <Title>
        <strong>Redux Calculator</strong>
      </Title>
      <ResaultView />
      <NumberPad />
    </Background>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
