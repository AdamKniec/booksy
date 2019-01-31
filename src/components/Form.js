import React from 'react';

const Form = (props) => {
    return (
        <form>
            <label>Tytuł
                <input type="text" name="title" value={props.value} onChange={props.handleInputChange}/>
            </label>
            <label>Kategoria
                <input type="text" name="category" />
            </label>
            <label>Priorytet
                <select>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label>Number of pages
                <input type="number" name="numberOfPages" />
            </label>
        </form>
    )
}
export default Form;
