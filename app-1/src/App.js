import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  changeHandler(value) {
    this.setState({message: value})
  }

  render() {
    return(
      <div className="App">
        <input onChange={(e) => this.changeHandler(e.target.value)}></input>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App;
