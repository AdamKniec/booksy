import React from 'react';

const Form = (props) => {
    return (
        <form className="form" onSubmit={props.formSubmit} >
            <label>Tytuł
                <input type="text" name="title" value={props.title} onChange={props.handleInputChange} required/>
            </label>
            <label>Kategoria
                <input type="text" name="category" value={props.category} onChange={props.handleInputChange}required/>
            </label>
            <label>Priorytet
                <select onChange={props.handleInputChange} name='priority'>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label>Number of pages
                <input type="number" name="numberOfPages"  value={props.numberOfPages} onChange={props.handleInputChange} required/>
            </label>
            <label>
                <button type="submit">Save!</button>
            </label>
        </form>
    )
}
export default Form;
