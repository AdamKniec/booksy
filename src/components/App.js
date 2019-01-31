import React, { Component } from 'react';
import Intro from './Intro';
import Form from './Form';

class App extends Component {
  state = {
    inputValue: '',
   // placeholderData : [{name:'adam', category:'kryminał'}]
  }
  
  handleUserInput = (e) => {
    this.setState({
      inputValue : e.target.inputValue
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="formContainer">
          <Intro
           appName = {"Booksy"}
           />
          <Form
           inputValue = {this.state.inputValue}
           handleInputChange = {this.handleUserInput}

           />
        </div>
        <div>
          <ul>
            {/* {this.state.placeholderData.map((val) => <li>Tytuł:{val.name} Kategoria:{val.category}</li> )} */}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
