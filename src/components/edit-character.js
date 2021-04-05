import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// nameX, heightX, weightX, alignmentX, raceX, /strength, dexterity, consititiution, intelligence, wisdom, charisma,/ hpX, lanuages, pathX, extraInfo
//update to react-bootstrap form 

export default class EditCharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            _id: props._id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.updateCharacter(this.state);
        event.preventDefault();
    }


// nameX, heightX, weightX, alignmentX, raceX, /strength, dexterity, consititiution, intelligence, wisdom, charisma,/ hpX, lanuages, pathX, extraInfo
    render() {
        return (
            <div>
            {/*for furture style*/}
            {/* <h6 onClick={this.onClick.bind(this)}>Edit </h6> */}
            {/* <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} > */}
            <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} >
                <div className="form-group">
                    <label htmlFor="nameInput">Character's name</label>
                    <input name="name" value={this.state.name} type="text" className="form-control" id="nameInput" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update File</button>
            </form>
            </div>
        );
    }
}