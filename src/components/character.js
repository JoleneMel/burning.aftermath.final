import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditCharacterForm from './edit-character';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


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
                <Card.Header> Character Name: {this.props.name} Alignment: {this.props.alignment} HP: {this.props.hp}  Path: {this.props.path}</Card.Header>
                <Card.Body>
                <Card.Subtitle>Height: {this.props.height} Weight: {this.props.weight}  Race: {this.props.race} </Card.Subtitle>
                <ListGroup variant="flush">
                    Ability Scores:
                <ListGroup.Item>Strength: {this.props.strength}</ListGroup.Item>
                <ListGroup.Item>dexterity: {this.props.dexterity}</ListGroup.Item>
                <ListGroup.Item>consititiution: {this.props.consititiution}</ListGroup.Item>
                <ListGroup.Item>intelligence: {this.props.intelligence}</ListGroup.Item>
                <ListGroup.Item>wisdom: {this.props.wisdom}</ListGroup.Item>
                <ListGroup.Item>charisma: {this.props.charisma}</ListGroup.Item>
                </ListGroup>
                <Card.Text>Extra Info about Character: {this.props.extraInfo}</Card.Text>
                {/* <Card.Footer>Lanuages known: {this.props.lanuages}</Card.Footer> */}
                </Card.Body>
                <EditCharacterForm {...this.props} updateCharacter={this.props.updateCharacter} />
            </Card>
                <ButtonGroup>
                    <Button variant= "btn btn-danger" onClick={this.handleDeleteClick}>Delete Character</Button>
                </ButtonGroup>
            </div>
        );
    }
}
