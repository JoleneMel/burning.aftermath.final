import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';

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
    const [consititiution, setConsititiution] = useState(''); //AS
    const [intelligence, setIntelligence] = useState('');//AS
    const [wisdom, setWisdom] = useState('');//AS
    const [charisma, setCharisma] = useState('');//AS
    const [hp, setHP] = useState('');//as and hp are numbers 
    // const [lanuages, setLanuages] = useState(''); //from array of lanuages //checkboxes and radio //the function to use intelligence to make a decision on how many lanuages can be selected can be done in here 
    const [path, setPath] = useState(''); //need to be from a path array
    const [extraInfo, setExtraInfo] = useState('');

    const lanuages = 
    ['Vostra: Most commonly spoken language. (note: not all races speak it.)',
    'Faerie: Language spoken by races more inclined to be tricksters. (Fairies, Changelings, Goblins etc)', 
    'Tzun: Language of the Elves',
    'Tzut: Language of the Half-Elves, an offshoot of Tzun. Uses the same script, but different sounds',
    'Kallahk: Language of Dragons and Draconic creatures.',
    'Ocrate: Language of Orcs, Giants, and Ogres',
    'Vay’Kahn: Language of Demons and most Demonic entities',
    'Nekrain: Language of the Undead',
    'Xallas: Language of tribal races, usually reptilian.'];

    const alignments = ['Lawful good', 'Neutral good', 'Chaotic good', 'Lawful neutral', 'True neutral', 'Chaotic neutral', 'Lawful evil', 'Neutral evil', 'Chaotic evil', 'Unaligned'];
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Props are' + props);
        props.addNewCharacter({name, height, weight, alignment, race, strength, dexterity, consititiution, intelligence, wisdom, charisma, hp, path, extraInfo});
    }

    //want to make this a multi-step form https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Container>
                <label htmlFor="nameInput"><h5>Character's name</h5></label>
                <input name="name" value={name} type="text" className="form-control" id="nameInput" 
                    onChange={(e) => setName(e.target.value)} />
                 <div className="form-group">

                <div className="form-group">
                    <label htmlFor="heightInput"><h5>Height</h5></label>
                    <input name="height" value={height} type="text" className="form-control" id="heightInput" 
                    onChange={(e) => setHeight(e.target.value)} />
                </div>

                </div>
                <div className="form-group">
                <label htmlFor="weightInput"><h5>Weight</h5></label>
                <input name="weight" type="text" value={weight} className="form-control" id="weightInput" 
                    onChange={(e) => setWeight(e.target.value)} />
                </div>

                <Dropdown>
                <h5>Alignment </h5>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {alignment}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {alignments.map((alignment, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => setAlignment(alignment)}> {alignment} </Dropdown.Item>)}
                </Dropdown.Menu>
                </Dropdown>

                {/* this needs to be a carrasel of races, with their information to boot~ */}
                <div className="form-group">
                <label htmlFor="raceInput"><h5>Race</h5></label>
                <input name="race" value={race} type="text" className="form-control" id="raceInput" 
                    onChange={(e) => setRace(e.target.value)} />
                </div>

                {/* ability scores that need a function to calculate a bonus */}
                <div className="form-group">
                <div className="form-group">
                    <label htmlFor="strengthInput"><h5>Strength</h5></label>
                    <input name="strength" value={strength} type="text" className="form-control" id="strengthInput" 
                    onChange={(e) => setStrength(e.target.value)} />
                </div>

                </div>
                <div className="form-group">
                <label htmlFor="dexterityInput"><h5>Dexterity</h5></label>
                <input name="dexterity" type="text" value={dexterity} className="form-control" id="dexterityInput" 
                    onChange={(e) => setDexterity(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="consititiutionInput"><h5>Consititiution</h5></label>
                <input name="consititiution" type="text" value={consititiution} className="form-control" id="consititiutionInput" 
                    onChange={(e) => setConsititiution(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="intelligenceInput"><h5>Intelligence</h5></label>
                <input name="intelligence" value={intelligence} type="text" className="form-control" id="intelligenceInput" 
                    onChange={(e) => setIntelligence(e.target.value)} />
                </div>

                <div className="form-group">
                <div className="form-group">
                    <label htmlFor="wisdomInput"><h5>Wisdom</h5></label>
                    <input name="wisdom" value={wisdom} type="text" className="form-control" id="wisdomInput" 
                    onChange={(e) => setWisdom(e.target.value)} />
                </div>

                </div>
                <div className="form-group">
                <label htmlFor="charismaInput"><h5>Charisma</h5></label>
                <input name="charisma" type="text" value={charisma} className="form-control" id="charismaInput" 
                    onChange={(e) => setCharisma(e.target.value)} />
                </div>

                <div className="form-group">
                <label htmlFor="hpInput"><h5>HP</h5></label>
                <input name="hp" type="text" value={hp} className="form-control" id="hpInput" 
                    onChange={(e) => setHP(e.target.value)} />
                </div>
                {/* <div className="form-group">
                <label htmlFor="lanuagesInput">Lanuages</label>
                <input name="lanuages" value={lanuages} type="text" className="form-control" id="lanuagesInput" 
                    onChange={(e) => setLanuages(e.target.value)} />
                </div> */}
                <div className="form-group">
                <div className="form-group">
                    <label htmlFor="pathInput"><h5>Path</h5></label>
                    <input name="path" value={path} type="text" className="form-control" id="pathInput" 
                    onChange={(e) => setPath(e.target.value)} />
                </div>

                </div>
                <div className="form-group">
                <label htmlFor="extraInfoInput"><h5>Extra Info</h5></label>
                <input name="extraInfo" type="text" value={extraInfo} className="form-control" id="otherextraInfo" 
                    onChange={(e) => setExtraInfo(e.target.value)} />
                </div> 
                </Container>
            </div>
            <button type="submit" className="btn btn-primary">Add Character</button>
        </form>
    );
}
//path is going to have to be an array as well and that will need to be taken into account becuz of the bug on alignments not being defined on the edit
//page talk at the office hours about it 