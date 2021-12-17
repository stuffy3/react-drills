import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      itemList: ['Dog', 'Cat', 'Fish']
    }
  }

  render(){
    let itemToDisplay = this.state.itemList.map((ele, index) => {
      return <h2 key={index}>{ele}</h2>
    });

    return <div className="App">{itemToDisplay}</div>
  }
}
export default App;
