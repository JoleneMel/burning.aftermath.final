import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { burningAftermathService } from '../rest/BurningAftermathApi';

//step by step wizard form 
//need to update the bootstrap form to react-bootstrap!!! 
//have some '' be numbers only 
//need functions for lanuages, 
//need a function for ability scores for bonuses for races 
export const NewCharacterForm = (props) => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [alignment, setAlignment] = useState('');
    const [race, setRace] = useState(''); //array //carrasel.caption 
    const [strength, setStrength] = useState(''); //supposed to belong to a abilities grouping? and is number
    const [dexterity, setDexterity] = useState(''); //also want the ability grouping to have a lil info on what they do 
    const [constitution, setConstitution] = useState(''); //AS
    const [intelligence, setIntelligence] = useState('');//AS
    const [wisdom, setWisdom] = useState('');//AS
    const [charisma, setCharisma] = useState('');//AS
    const [hp, setHP] = useState('');//as and hp are numbers 
    // const [lanuages, setLanuages] = useState(''); //from array of lanuages //checkboxes and radio //the function to use intelligence to make a decision on how many lanuages can be selected can be done in here 
    const [path, setPath] = useState(''); //need to be from a path array
    const [extraInfo, setExtraInfo] = useState('');

    // const lanuages = 
    // ['Vostra: Most commonly spoken language. (note: not all races speak it.)',
    // 'Faerie: Language spoken by races more inclined to be tricksters. (Fairies, Changelings, Goblins etc)', 
    // 'Tzun: Language of the Elves',
    // 'Tzut: Language of the Half-Elves, an offshoot of Tzun. Uses the same script, but different sounds',
    // 'Kallahk: Language of Dragons and Draconic creatures.',
    // 'Ocrate: Language of Orcs, Giants, and Ogres',
    // 'Vay’Kahn: Language of Demons and most Demonic entities',
    // 'Nekrain: Language of the Undead',
    // 'Xallas: Language of tribal races, usually reptilian.'];
    // this.addNewCharacter = this.addNewCharacter.bind(this);
    const alignments = ['Lawful good', 'Neutral good', 'Chaotic good', 'Lawful neutral', 'True neutral', 'Chaotic neutral', 'Lawful evil', 'Neutral evil', 'Chaotic evil', 'Unaligned'];
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Props are' + props);
        addNewCharacter({name, height, weight, alignment, race, strength, dexterity, constitution, intelligence, wisdom, charisma, hp, path, extraInfo});
    }

            const _refreshData = async() => {
            const characters = await burningAftermathService.getAll();
            }

            function componentDidMount() {
            _refreshData();
            }

    const addNewCharacter = async(character) => {
    console.log('inside addNewCharacter function app.js');
    await burningAftermathService.create(character);
    _refreshData();
  }



    //want to make this a multi-step form https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
    return (
        <form onSubmit={handleSubmit}>
            <Container id="charactersheet"><br></br>
            <div className="form-group">
                <label htmlFor="nameInput"><h5>Character's name</h5><p>The name that you want to be referred to in character</p></label>
                <input name="name" value={name} type="text" className="form-control" id="nameInput" 
                    onChange={(e) => setName(e.target.value)} />
                 <div className="form-group"><br></br>

                <div className="form-group">
                    <label htmlFor="heightInput"><h5>Height</h5><p>You can be as tall or as short as you wish!</p></label>
                    <input name="height" value={height} type="text" className="form-control" id="heightInput" 
                    onChange={(e) => setHeight(e.target.value)} /><br></br>
                </div>

                </div>
                <div className="form-group">
                <label htmlFor="weightInput"><h5>Weight</h5><p>How much you weigh</p></label>
                <input name="weight" type="text" value={weight} className="form-control" id="weightInput" 
                    onChange={(e) => setWeight(e.target.value)} /><br></br>
                </div>

                <Dropdown>
                <h5>Alignment </h5><p>Your alignment is related to how your character will act in certain situations, if unsure you can be unaligned.</p>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                {alignment}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {alignments.map((alignment, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => setAlignment(alignment)}> {alignment} </Dropdown.Item>)}
                </Dropdown.Menu>
                </Dropdown><br></br>

                {/* this needs to be a carrasel of races, with their information to boot~ */}
                <div className="form-group">
                <label htmlFor="raceInput"><h5>Race</h5><p>There are many races within Burning Aftermath you can look for more info about them 
                    in the rule book(to be added)</p></label>
                <input name="race" value={race} type="text" className="form-control" id="raceInput" 
                    onChange={(e) => setRace(e.target.value)} />
                </div><br></br>

                {/* ability scores that need a function to calculate a bonus */}
                <div className="form-group">
                <div className="form-group">
                    <label htmlFor="strengthInput"><h5>Strength</h5><p>This is how strong your character will be!</p></label>
                    <input name="strength" value={strength} type="text" className="form-control" id="strengthInput" 
                    onChange={(e) => setStrength(e.target.value)} />
                </div><br></br>

                </div>
                <div className="form-group">
                <label htmlFor="dexterityInput"><h5>Dexterity</h5><p>This is so you can pull off acrobatic stunts or being able 
                    to be quick on your feet</p></label>
                <input name="dexterity" type="text" value={dexterity} className="form-control" id="dexterityInput" 
                    onChange={(e) => setDexterity(e.target.value)} />
                </div><br></br>

                <div className="form-group">
                <label htmlFor="constitutionInput"><h5>Constitution</h5><p>Being able to eat poor meat, take more hits, stronger 
                    immune system etc.</p></label>
                <input name="constitution" type="text" value={constitution} className="form-control" id="constitutionInput" 
                    onChange={(e) => setConstitution(e.target.value)} />
                </div><br></br>

                <div className="form-group">
                <label htmlFor="intelligenceInput"><h5>Intelligence</h5><p>This is how smart you are, this is great for spellcasting</p></label>
                <input name="intelligence" value={intelligence} type="text" className="form-control" id="intelligenceInput" 
                    onChange={(e) => setIntelligence(e.target.value)} />
                </div><br></br>

                <div className="form-group">
                <div className="form-group">
                    <label htmlFor="wisdomInput"><h5>Wisdom</h5><p>This is how wise you are, or how well you learn from your mistakes</p></label>
                    <input name="wisdom" value={wisdom} type="text" className="form-control" id="wisdomInput" 
                    onChange={(e) => setWisdom(e.target.value)} />
                </div><br></br>

                </div>
                <div className="form-group">
                <label htmlFor="charismaInput"><h5>Charisma</h5><p>This is how charming you are, this is great for talking down an enemy or convincing 
                    someone to buy something</p></label>
                <input name="charisma" type="text" value={charisma} className="form-control" id="charismaInput" 
                    onChange={(e) => setCharisma(e.target.value)} />
                </div><br></br>

                <div className="form-group">
                <label htmlFor="hpInput"><h5>HP</h5><p>Hit Points is what you need to keep to stay alive</p></label>
                <input name="hp" type="text" value={hp} className="form-control" id="hpInput" 
                    onChange={(e) => setHP(e.target.value)} />
                </div><br></br>
                {/* <div className="form-group">
                <label htmlFor="lanuagesInput">Lanuages</label>
                <input name="lanuages" value={lanuages} type="text" className="form-control" id="lanuagesInput" 
                    onChange={(e) => setLanuages(e.target.value)} />
                </div> */}
                <div className="form-group">
                <div className="form-group">
                    <label htmlFor="pathInput"><h5>Path</h5><p>Magic, or Fighter</p></label>
                    <input name="path" value={path} type="text" className="form-control" id="pathInput" 
                    onChange={(e) => setPath(e.target.value)} />
                </div><br></br>

                </div>
                <div className="form-group">
                <label htmlFor="extraInfoInput"><h5>Extra Info</h5><p>This can be anything from what you look like to backstory or 
                    something important to your character</p></label>
                <input name="extraInfo" type="text" value={extraInfo} className="form-control" id="otherextraInfo" 
                    onChange={(e) => setExtraInfo(e.target.value)} />
                </div> <br></br>
            </div>
            <button type="submit" className="btn btn-primary">Add Character</button>
            </Container>
        </form>
    );
}
//path is going to have to be an array as well and that will need to be taken into account becuz of the bug on alignments not being defined on the edit
//page talk at the office hours about it 