import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditCharacterForm from './edit-character';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { burningAftermathService } from '../rest/BurningAftermathApi';

//want to add the accordian so this is displayed on a seperate page entirely 
export default class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateCharacter = this.updateCharacter.bind(this);
        this.deleteCharacter = this.deleteCharacter.bind(this);
    }

    handleDeleteClick() {
        this.deleteCharacter(this.props._id);
    }

    updateCharacter(character) {
        this.updateCharacter(character);
    }

    // nameX, heightX, weightX, alignmentX, raceX, /strength, dexterity, consititiution, intelligence, wisdom, charisma,/ hpX, lanuages, pathX, extraInfo
    render() {

    
                
        return (
            <div>
            <Container>
            <Card id="character-card">
                <Card.Header> <h4>Character Name: {this.props.name} <br></br> Alignment: {this.props.alignment} <br></br> HP: {this.props.hp}  <br></br> Path: {this.props.path}</h4></Card.Header>
                <Card.Body>
                <Card.Subtitle><h5>Height: {this.props.height} <br></br> Weight: {this.props.weight}  <br></br> Race: {this.props.race} </h5></Card.Subtitle>
                <ListGroup variant="flush">
                    <h5>Ability Scores:</h5>
                <ListGroup.Item variant="danger"><h6>Strength: {this.props.strength}</h6></ListGroup.Item>
                <ListGroup.Item variant="warning"><h6>Dexterity: {this.props.dexterity}</h6></ListGroup.Item>
                <ListGroup.Item variant="success"><h6>Consititiution: {this.props.consititiution}</h6></ListGroup.Item>
                <ListGroup.Item variant="primary"><h6>Intelligence: {this.props.intelligence}</h6></ListGroup.Item>
                <ListGroup.Item variant="secondary"><h6>Wisdom: {this.props.wisdom}</h6></ListGroup.Item>
                <ListGroup.Item variant="dark"><h6>Charisma: {this.props.charisma}</h6></ListGroup.Item>
                </ListGroup>
                <Card.Text><h5>Extra Info about Character: {this.props.extraInfo}</h5></Card.Text>
                {/* <Card.Footer>Lanuages known: {this.props.lanuages}</Card.Footer> */}
                </Card.Body>
                <EditCharacterForm {...this.props} updateCharacter={this.props.updateCharacter} />
            </Card>
                <ButtonGroup>
                    <Button variant= "btn btn-danger" onClick={this.handleDeleteClick}>Delete Character</Button>
                </ButtonGroup>
                </Container>
            </div>
        );
    }
}

{/* <ListGroup.Item variant="primary">Primary</ListGroup.Item>
<ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
<ListGroup.Item variant="success">Success</ListGroup.Item>
<ListGroup.Item variant="danger">Danger</ListGroup.Item>
<ListGroup.Item variant="warning">Warning</ListGroup.Item>
<ListGroup.Item variant="info">Info</ListGroup.Item>
<ListGroup.Item variant="light">Light</ListGroup.Item>
<ListGroup.Item variant="dark">Dark</ListGroup.Item> */}