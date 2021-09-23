import React from "react";

import Counter from "./Counter"; //for class based

class App extends React.Component {
  //constructor
  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      mount: false,
    };
  }

  //function to mount the counter on button click
  setMount = () => this.setState({ mount: true });

  //function to unmount the counter on button click
  setUnmount = () => this.setState({ mount: false });

  //render mount button and unmount button
  render() {
    return (
      <div>
        <button onClick={this.setMount}>mount Counter</button>
        <button onClick={this.setUnmount}>unmount Counter</button>

        {/* render the counter only when the mount button is clicked */}
        {this.state.mount && <Counter />}
      </div>
    );
  }
}

export default App;
