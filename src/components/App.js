import React, { Component } from "react";
import Intro from "./Intro";
import Form from "./Form";
import List from "./List";
import "../styles/form-box.scss";
import "../styles/list-box.scss";
import "../styles/statistics.scss";
import firebase from "../config/fbconfig";
import database from "firebase/database";
import ActionBox from "./ActionBox";
import BooksInTotal from "./BooksInTotal";
import StatisticsBar from "./StatisticsBar";

//App class
class App extends Component {
  //states
  state = {
    title: "",
    bookList: [""],
    category: "",
    priority: "",
    numberOfPages: "",
    Ids: "",
    clickedItem: null,
    activated: false,
    completed: false,
    bookAddedNotification: false,
    bookRemovedNotification: false
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
    // assigning the booklist array which comes from state to the books array
    let books = this.state.bookList;
    books.push({
      title: this.state.title,
      category: this.state.category,
      priority: this.state.priority,
      numberOfPages: this.state.numberOfPages,
      completed: this.state.completed
    });

    // Firebase - pushing an object to the database
    firebase
      .database()
      .ref("bookData")
      .push()
      .set({
        title: this.state.title,
        category: this.state.category,
        priority: this.state.priority,
        numberOfPages: this.state.numberOfPages,
        completed: this.state.completed
      });
    // clearing the inputs by setting the state of the particular value to ""
    this.setState({
      bookList: books,
      title: "",
      category: "",
      numberOfPages: ""
    });

    this.toggleSuccessNotification();
  };

  //NOtyfikacja . Trzeba ja wywolac po wyslaniu forma z sukcesem a nie po kliku w button
  toggleSuccessNotification = this.toggleSuccessNotification.bind(this);
  toggleSuccessNotification() {
    this.setState({
      bookAddedNotification: true
    });
    setTimeout(
      function() {
        this.setState({ bookAddedNotification: false });
      }.bind(this),
      3000
    );
  }
  toggleRemoveNotification = this.toggleRemoveNotification.bind(this);
  toggleRemoveNotification() {
    this.setState({
      bookRemovedNotification: true
    });
    setTimeout(
      function() {
        this.setState({ bookRemovedNotification: false });
      }.bind(this),
      3000
    );
  }

  //GETTING THE DATA FROM THE DATABASE
  componentDidMount() {
    firebase
      .database()
      .ref("bookData")
      .on("value", data => {
        console.log(data.val());
        // DODANY IF //////////////////////
        if (data.val()) {
          let bookRecords = data.val();
          let Ids = Object.keys(bookRecords);
          var values = Object.values(bookRecords);
          this.setState({
            bookList: values,
            Ids
          });
          // DODATNY ELSE I SET STATE /////////////////
        } else {
          // ???????
        }
      });
  }
  // LIST ITEM REMOVAL
  removeListItem = this.removeListItem.bind(this);
  removeListItem() {
    //ponizszy kot trzeba poprawic bo za powtorzenia
    let IdToBeRemoved = this.state.Ids[this.state.clickedItem];

    firebase
      .database()
      .ref("bookData")
      .child(IdToBeRemoved)
      .remove();
    this.setState({
      activated: false
    });
  }
  // marking the book as "completed"
  markBookCompleted = this.markBookCompleted.bind(this);
  markBookCompleted() {
    const { clickedItem } = this.state;
    this.setState(prevState => ({
      bookList: prevState.bookList.map((obj, i) =>
        i === clickedItem ? Object.assign(obj, { completed: true }) : obj
      ),
      activated: false
    }));
    //Ponizsze powtorzenie trzeba poprawic
    let IdToBeRemoved = this.state.Ids[clickedItem];
    firebase
      .database()
      .ref("bookData")
      .child(IdToBeRemoved)
      .update({ completed: true });
  }

  // handle list click
  handleListClick = this.handleListClick.bind(this);
  handleListClick(i) {
    this.setState({
      clickedItem: i,
      activated: true
    });
    if (this.state.clickedItem === i) {
      this.setState({
        activated: !this.state.activated
      });
    }
  }

  // JSX
  render() {
    return (
      <div className="App">
        <div className="topWrapper">
          <div className="formContainer">
            <BooksInTotal
              numberOfBooks={this.state.bookList.length}
              bookAddedNotification={this.state.bookAddedNotification}
              bookRemovedNotification={this.state.bookRemovedNotification}
            />
            <Intro appName={"booksy"} />
            <Form
              title={this.state.title}
              category={this.state.category}
              handleInputChange={this.handleUserInput}
              formSubmit={this.handleSubmit}
              numberOfPages={this.state.numberOfPages}
              toggleSuccessNotification={this.toggleSuccessNotification}
            />
            <ActionBox
              activated={this.state.activated}
              removeClickedItem={this.removeListItem}
              markBookCompleted={this.markBookCompleted}
              toggleRemoveNotification={this.toggleRemoveNotification}
            />
          </div>
          <List
            bookList={this.state.bookList}
            IdsList={this.state.Ids}
            handleListClick={this.handleListClick}
            clickedItem={this.state.clickedItem}
            activated={this.state.activated}
            // ???????????????????????????? DODANE ///////
          />
        </div>
        <StatisticsBar
          numberOfBooks={this.state.bookList.length}
          bookList={this.state.bookList}
        />
      </div>
    );
  }
}

export default App;
