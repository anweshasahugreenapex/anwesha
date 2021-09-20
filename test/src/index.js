import React from "react";
import ReactDOM from "react-dom";

//import Counter from "./Counter"; //for class based
import Counter from "./Counter_usingFunction"; //for function based


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: false,
      
    };
    this.setMount = () => this.setState({ mount: true });
    this.setUnmount = () => this.setState({ mount: false });
   
  }

  render() {
    return (
      <div>
        <button onClick={this.setMount}>mount Counter</button>
        <button onClick={this.setUnmount}>unmount Counter</button>
        
        {this.state.mount && <Counter  />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
