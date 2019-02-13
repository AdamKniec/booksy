import React from "react";

const List = props => {
  console.log(props.IdsList);
  return (
    <ul className="list">
      {props.bookList.map((val, i) => (
        <li
          className={props.IdsList[i]}
          onClick={props.handleListClick}
          key={i}
        >
          Tytuł: {val.title} Kategoria: {val.category} Priority: {val.priority}{" "}
          numberOfPages: {val.numberOfPages}{" "}
        </li>
      ))}
    </ul>
  );
};
export default List;

// import React from 'react';
// class List extends React.Component {
//     render(props) {

//         return (
//             <ul className="list">
//               {this.props.bookList.map((val,i) => <li key={i}>Tytuł: {val.title} Kategoria: {val.category} Priority: {val.priority} numberOfPages: {val.numberOfPages}</li> )}   </ul>

//         )
//     }

// }
// export default List;
