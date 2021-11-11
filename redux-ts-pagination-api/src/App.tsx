import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import TableContainer from "./container/Table";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TableContainer />
      </Provider>
    </div>
  );
}

export default App;