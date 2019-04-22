import React from "react";

const StatisticsBar = props => {
  function getTotalNumberOfPages() {
    let sumOfPages = 0;
    props.bookList.forEach(book => {
      sumOfPages += parseInt(book.numberOfPages);
    });
    return sumOfPages;
  }
  function getTheNumberOfCompletedBooks() {
    let numOfCompletedBooks = 0;
    props.bookList.forEach(book => {
      if (book.completed) {
        numOfCompletedBooks += 1;
      }
    });
    return numOfCompletedBooks;
  }
  function numberOfCompletedsBooksPages() {
    let pagesCompleted = 0;
    props.bookList.forEach(book => {
      if (book.completed) {
        pagesCompleted += parseInt(book.numberOfPages);
      }
    });
    return pagesCompleted;
  }
  return (
    <div className="statistics-container">
      <figure>
        <span>{props.numberOfBooks}</span>
        <figcaption>Number of books</figcaption>
      </figure>
      <figure>
        <span>{`${getTotalNumberOfPages()}`}</span>
        <figcaption>Pages</figcaption>
      </figure>
      <figure>
        <span>{`${numberOfCompletedsBooksPages()}`}</span>
        <figcaption>Pages completed</figcaption>
      </figure>
      <figure>
        <span>{`${getTheNumberOfCompletedBooks()}`}</span>
        <figcaption>Books completed</figcaption>
      </figure>
    </div>
  );
};

export default StatisticsBar;
