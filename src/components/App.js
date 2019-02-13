import React, { Component } from "react";
import Intro from "./Intro";
import Form from "./Form";
import List from "./List";
import "../styles/form-box.scss";
import "../styles/list-box.scss";
import firebase from "../config/fbconfig";
import database from "firebase/database";

//App class
class App extends Component {
  //states
  state = {
    title: "",
    bookList: [""],
    category: "",
    priority: "",
    numberOfPages: "",
    Ids: ""
  };

  //setting the state
  handleUserInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //Submitting the form
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.bookList);
    // assigning the booklist array which comes from state to the books array
    let books = this.state.bookList;
    //pushing new object to books array
    books.push({
      title: this.state.title,
      category: this.state.category,
      priority: this.state.priority,
      numberOfPages: this.state.numberOfPages
    });
    // Firebase - pushing and object to the database
    let bookData = firebase.database().ref("bookData");
    let newBookDataRef = bookData.push();
    newBookDataRef.set({
      title: this.state.title,
      category: this.state.category,
      priority: this.state.priority,
      numberOfPages: this.state.numberOfPages
    });
    // clearing the inputs by setting the state of the particular value to ""
    this.setState({
      bookList: books,
      title: "",
      category: "",
      numberOfPages: ""
    });
  };
  //GETTING THE DATA FROM THE DATABASE
  componentDidMount() {
    let bookData = firebase.database().ref("bookData");
    bookData.on("value", data => {
      let bookRecords = data.val();
      let Ids = Object.keys(bookRecords);
      console.log(Ids);
      var values = Object.values(bookRecords);
      this.setState({
        bookList: values,
        Ids
      });
    });
  }
  handleListClick(e) {
    console.log(e.target.className);

    //gdzie wjebac referencje do firebase zeby jej nie powielac
  }

  // JSX
  render() {
    return (
      <div className="App">
        <div className="formContainer">
          <Intro appName={"Booksy"} />
          <Form
            title={this.state.title}
            category={this.state.category}
            handleInputChange={this.handleUserInput}
            formSubmit={this.handleSubmit}
            numberOfPages={this.state.numberOfPages}
          />
        </div>
        <div className="listContainer">
          <List
            bookList={this.state.bookList}
            IdsList={this.state.Ids}
            handleListClick={this.handleListClick}
          />
        </div>
      </div>
    );
  }
}

export default App;

// USUWANIE Z firebase
// static removeData(e){
//   let IdToBeRemoved = e.target.parentNode.parentNode.className;
//   exerciseDataRef.child(IdToBeRemoved).remove();
// }
