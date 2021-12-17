import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      animalArray: ['Dog', 'Cat', 'Fish', 'Lizard', 'Snake'],
      userInput: '',
      
    }
  
  }

  changeHandler(value) {
    this.setState({userInput: value})
  }

  render() {
    let animalsToDisplay = this.state.animalArray
    .filter((element, index) => {
      return element.includes(this.state.userInput)
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });

    return(
      <div className="App">
        <input onChange={(e) => this.changeHandler(e.target.value)} type="text"></input>
        {animalsToDisplay}
      </div>

    )
  }




}

export default App;
