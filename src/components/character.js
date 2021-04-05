import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditCharacterForm from './edit-character';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';


//want to add the accordian so this is displayed on a seperate page entirely 
export default class CharacterCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateCharacter = this.updateCharacter.bind(this);
    }

    handleDeleteClick() {
        this.props.deleteCharacter(this.props._id);
    }

    updateCharacter(character) {
        this.props.updateCharacter(character);
    }

    // nameX, heightX, weightX, alignmentX, raceX, /strength, dexterity, consititiution, intelligence, wisdom, charisma,/ hpX, lanuages, pathX, extraInfo
    render() {
        return (
            <div>
            <Card>
                <Card.Header> Character Name: {this.props.name} </Card.Header>
                <EditCharacterForm {...this.props} updateCharacter={this.props.updateCharacter} />
            </Card>
                <ButtonGroup>
                    <Button variant= "btn btn-danger" onClick={this.handleDeleteClick}>Delete Character</Button>
                </ButtonGroup>
            </div>
        );
    }
}
