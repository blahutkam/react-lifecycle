import React from "react";
//import ReactDOM from "react-dom";
import "./App.css";
import Counter from "./Counter";

//React Component Lifecycle - Hooks / Methods Explained
//https://www.youtube.com/watch?v=m_mtV4YaI8c&t=4s

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });

    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  render() {
    return (
      <div className="App">
        <p>
          <button onClick={this.mountCounter} disabled={this.state.mount}>
            mount counter
          </button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>
            unmount counter
          </button>
          <button onClick={this.ignoreProp}>ignore prop</button>
          <button onClick={this.seedGenerator}>generate seed</button>
        </p>
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));
export default App;
