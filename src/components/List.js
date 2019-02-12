import React from 'react';

const List = (props) => {
    console.log(props.bookList)
        return (
            <ul className="list">
                {props.bookList.map((val,i) => <li key={i}>Tytuł: {val.title} Kategoria: {val.category} Priority: {val.priority} numberOfPages: {val.numberOfPages}</li> )}
            </ul>
         ) 
}
export default List;
