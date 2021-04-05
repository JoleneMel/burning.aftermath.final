import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';

//need to update the bootstrap form to react-bootstrap!!! 
//have some '' be numbers only 
//need functions for lanuages, 
//need a function for ability scores for bonuses for races 
export const NewCharacterForm = (props) => {
    const [name, setName] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Props are' + props);
        props.addNewCharacter({name});
    }

    //want to make this a multi-step form https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nameInput">Character's name</label>
                <input name="name" value={name} type="text" className="form-control" id="nameInput" 
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add Character</button>
        </form>
    );
}
//path is going to have to be an array as well and that will need to be taken into account becuz of the bug on alignments not being defined on the edit
//page talk at the office hours about it 