import React from 'react';

const List = (props) => {
    console.log(props)
        return (
            <ul>
                {props.bookList.map((val,i) => <li key={i}>Tytuł: {val.title} Kategoria: {val.category} Priority: {val.priority} numberOfPages: {val.numberOfPages}</li> )}
            </ul>
         ) 
}
export default List;
