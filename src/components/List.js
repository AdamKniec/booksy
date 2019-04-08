import React from "react";

const List = props => {
  return (
    <ul className="list">
      {props.bookList.map((val, i) => (
        <li
          id={props.IdsList[i]}
          key={i}
          onClick={props.handleListClick.bind(this, i)}
          className={
            props.clickedItem === i &&
            props.activated === true &&
            props.bookList[i].completed
              ? "active completed"
              : props.bookList[i].completed
              ? "completed"
              : (props.clickedItem === i) & props.activated
              ? "active"
              : null
          }
        >
          Tytuł: {val.title} Kategoria: {val.category} Priority: {val.priority}{" "}
          numberOfPages: {val.numberOfPages}{" "}
        </li>
      ))}
    </ul>
  );
};
export default List;
