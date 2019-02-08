import React, { Component } from 'react';
import Intro from './Intro';
import Form from './Form';
import List from './List';
import '../styles/form-box.scss';

class App extends Component {

    state = {
      title: '',
      bookList: [''],
      category: '',
      priority: '',
      numberOfPages: ''
    }

  handleUserInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit = (e) => {
  
    e.preventDefault();
    let books = this.state.bookList;
    books.push({
      title: this.state.title,
      category: this.state.category,
      priority: this.state.priority,
      numberOfPages: this.state.numberOfPages
    })
    this.setState({
      bookList: books,
      title: '',
      category: '',
      numberOfPages: ''
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
           title = {this.state.title}
           category = {this.state.category}
           handleInputChange = {this.handleUserInput}
           formSubmit = {this.handleSubmit}
           numberOfPages = {this.state.numberOfPages}
           />
        </div>
        <div className="listContainer">
          <List 
          bookList = {this.state.bookList}
          />
        </div>
        {/* <div>
          <ul>
            {this.state.bookList.map((val,i) => <li key={i}>Tytuł: {val.title} Kategoria: {val.category} Priority: {val.priority} numberOfPages: {val.numberOfPages}</li> )}
          </ul>
        </div> */}
      </div>
    );
  }
}

export default App;
