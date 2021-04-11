import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { burningAftermathService } from '../rest/BurningAftermathApi';
// import alignments from './new-character-form';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// nameX, heightX, weightX, alignmentX, raceX, /strength, dexterity, consititiution, intelligence, wisdom, charisma,/ hpX, lanuages, pathX, extraInfo
//update to react-bootstrap form 

export default class EditCharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            height: props.height,
            weight: props.weight,
            alignment: props.alignment,
            race: props.race,
            strength: props.strength,
            dexterity: props.dexterity,
            consititiution: props.consititiution,
            intelligence: props.intelligence,
            wisdom: props.wisdom,
            charisma: props.charisma,
            hp: props.hp,
            // lanuages: props.lanuages,
            path: props.path,
            extraInfo: props.extraInfo,
            _id: props._id
        }
        this.alignments = ['Lawful good', 'Neutral good', 'Chaotic good', 'Lawful neutral', 'True neutral', 'Chaotic neutral', 'Lawful evil', 'Neutral evil', 'Chaotic evil', 'Unaligned'];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAlignment = this.setAlignment.bind(this);
    }

    setAlignment(alignment) {
        this.setState({
            alignment: alignment
        });
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

    render() {

                
        return (
            <div>
            {/*for furture style*/}
            {/* <h6 onClick={this.onClick.bind(this)}>Edit </h6> */}
            {/* <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} > */}
            <Container>
            <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} >
                <div className="form-group">
                    
                    <label htmlFor="nameInput">Character's name</label>
                    <input name="name" value={this.state.name} type="text" className="form-control" id="nameInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="heightInput">Height</label>
                        <input name="height" value={this.state.height} type="text" className="form-control" id="heightInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="weightInput">Weight</label>
                    <input name="weight" value={this.state.weight} type="text" className="form-control" id="weightInput" onChange={this.handleChange} />
                </div>


                {/* due to setAlignment and alignment not being defined? commented out  */}
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.alignment}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {this.alignments.map((alignment, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => this.setAlignment(alignment)} > {alignment} </Dropdown.Item>)}
                </Dropdown.Menu>
                </Dropdown>

                {/* this needs to be a carrasel of races, with their information to boot~ */}
                <div className="form-group">
                    <label htmlFor="raceInput">Race</label>
                    <input name="race" value={this.state.race} type="text" className="form-control" id="raceInput" onChange={this.handleChange} />
                </div>

                {/* ability scores that need a function to calculate a bonus */}
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="strengthInput">Strength</label>
                        <input name="strength" value={this.state.strength} type="text" className="form-control" id="strengthInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="dexterityInput">Dexterity</label>
                    <input name="dexterity" type="text" value={this.state.dexterity} className="form-control" id="dexterityInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="consititiutionInput">Consititiution</label>
                    <input name="consititiution" type="text" value={this.state.consititiution} className="form-control" id="consititiutionInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="intelligenceInput">Intelligence</label>
                    <input name="intelligence" value={this.state.intelligence} type="text" className="form-control" id="intelligenceInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="wisdomInput">Wisdom</label>
                        <input name="wisdom" value={this.state.wisdom} type="text" className="form-control" id="wisdomInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="charismaInput">Charisma</label>
                    <input name="charisma" type="text" value={this.state.charisma} className="form-control" id="charismaInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="hpInput">hp</label>
                    <input name="hp" type="text" value={this.state.hp} className="form-control" id="hpInput" onChange={this.handleChange} />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="lanuagesInput">lanuages</label>
                    <input name="lanuages" value={this.state.lanuages} type="text" className="form-control" id="lanuagesInput" onChange={this.handleChange} />
                </div> */}
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="pathInput">path</label>
                        <input name="path" value={this.state.path} type="text" className="form-control" id="pathInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="extraInfoInput">extra Info</label>
                    <input name="extraInfo" type="text" value={this.state.extraInfo} className="form-control" id="otherextraInfo" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update Character</button>
                </form>
            </Container>
            </div>
        );
    }
}