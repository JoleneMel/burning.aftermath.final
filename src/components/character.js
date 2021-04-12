import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditCharacterForm from './edit-character';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';



export default class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick() {
        console.log(this.props._id);
        this.props.deleteCharacter(this.props._id);
    }

    componentDidMount() {
    this.props._refreshData();
    }

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
                <ListGroup.Item variant="success"><h6>Constitution: {this.props.constitution}</h6></ListGroup.Item>
                <ListGroup.Item variant="primary"><h6>Intelligence: {this.props.intelligence}</h6></ListGroup.Item>
                <ListGroup.Item variant="secondary"><h6>Wisdom: {this.props.wisdom}</h6></ListGroup.Item>
                <ListGroup.Item variant="dark"><h6>Charisma: {this.props.charisma}</h6></ListGroup.Item>
                </ListGroup>
                <Card.Text><h5>Extra Info about Character: {this.props.extraInfo}</h5></Card.Text>
                {/* <Card.Footer>Lanuages known: {this.props.lanuages}</Card.Footer> */}
                </Card.Body>
                <EditCharacterForm {...this.props} updateCharacter={this.props.updateCharacter} />
                <ButtonGroup>
                    <Button variant= "btn btn-danger" id= "deleteButton" onClick={this.handleDeleteClick}>Delete Character</Button>
                </ButtonGroup>
            </Card>
                </Container>
            </div>
        );
    }
}
