import React from "react";
import "../styles/books-in-total.scss";
import SuccessNotification from "./SuccessNotification";
import BookRemovedNotification from "./BookRemovedNotification";

const BooksInTotal = props => {
  return (
    <div className="booksCounter">
      <span>{props.numberOfBooks}</span>
      {props.bookAddedNotification ? (
        <SuccessNotification />
      ) : props.bookRemovedNotification ? (
        <BookRemovedNotification />
      ) : null}
    </div>
  );
};

export default BooksInTotal;
