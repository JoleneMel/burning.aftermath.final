import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';


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
            constitution: props.constitution,
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
            <Container id="charactersheet">
            <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} >
                <div className="form-group">
                    <h3>Edit Your Character</h3><br></br>
                    <label htmlFor="nameInput"><h5>Character's name</h5><p>The name that you want to be referred to in character</p></label>
                    <input name="name" value={this.state.name} type="text" className="form-control" id="nameInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="heightInput"><h5>Height</h5><p>You can be as tall or as short as you wish!</p></label>
                        <input name="height" value={this.state.height} type="text" className="form-control" id="heightInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="weightInput"><h5>Weight</h5><p>your weight</p></label>
                    <input name="weight" value={this.state.weight} type="text" className="form-control" id="weightInput" onChange={this.handleChange} />
                </div>


                {/* due to setAlignment and alignment not being defined? commented out  */}
                <Dropdown>
                <p>Your alignment is related to how your character will act in certain situations, if unsure you can be unaligned.</p>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.alignment}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {this.alignments.map((alignment, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => this.setAlignment(alignment)} > {alignment} </Dropdown.Item>)}
                </Dropdown.Menu>
                </Dropdown>

                {/* this needs to be a carrasel of races, with their information to boot~ */}
                <div className="form-group">
                    <label htmlFor="raceInput"><h5>Race</h5><p>There are many races within Burning Aftermath you can look for more info about them 
                    in the rule book</p></label>
                    <input name="race" value={this.state.race} type="text" className="form-control" id="raceInput" onChange={this.handleChange} />
                </div>

                {/* ability scores that need a function to calculate a bonus */}
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="strengthInput"><h5>Strength</h5><p>This is how strong your character will be!</p></label>
                        <input name="strength" value={this.state.strength} type="text" className="form-control" id="strengthInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="dexterityInput"><h5>Dexterity</h5><p>This is so you can pull off acrobatic stunts or being able 
                    to be quick on your feet</p></label>
                    <input name="dexterity" type="text" value={this.state.dexterity} className="form-control" id="dexterityInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="constitutionInput"><h5>Constitution</h5><p>Being able to eat poor meat, take more hits, stronger 
                    immune system etc.</p></label>
                    <input name="constitution" type="text" value={this.state.constitution} className="form-control" id="constitutionInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="intelligenceInput"><h5>Intelligence</h5><p>This is how smart you are, this is great for spellcasting</p></label>
                    <input name="intelligence" value={this.state.intelligence} type="text" className="form-control" id="intelligenceInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="wisdomInput"><h5>Wisdom</h5><p>This is how wise you are, or how well you learn from your mistakes</p></label>
                        <input name="wisdom" value={this.state.wisdom} type="text" className="form-control" id="wisdomInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="charismaInput"><h5>Charisma</h5><p>This is how charming you are, this is great for talking down an enemy or convincing 
                    someone to buy something</p></label>
                    <input name="charisma" type="text" value={this.state.charisma} className="form-control" id="charismaInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="hpInput"><h5>HP</h5><p>Hit Points is what you need to keep to stay alive</p></label>
                    <input name="hp" type="text" value={this.state.hp} className="form-control" id="hpInput" onChange={this.handleChange} />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="lanuagesInput">lanuages</label>
                    <input name="lanuages" value={this.state.lanuages} type="text" className="form-control" id="lanuagesInput" onChange={this.handleChange} />
                </div> */}
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="pathInput"><h5>Path</h5><p>Magic, or Fighter</p></label>
                        <input name="path" value={this.state.path} type="text" className="form-control" id="pathInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="extraInfoInput"><h5>Extra Info</h5><p>This can be anything from what you look like to backstory or 
                    something important to your character</p></label>
                    <input name="extraInfo" type="text" value={this.state.extraInfo} className="form-control" id="otherextraInfo" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update Character</button>
                </form>
            </Container>
            </div>
        );
    }
}