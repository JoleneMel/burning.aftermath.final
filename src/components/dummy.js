{/* <div className="form-group">
<div className="form-group">
    <label htmlFor="heightInput">Height</label>
    <input name="height" value={height} type="text" className="form-control" id="heightInput" 
    onChange={(e) => setHeight(e.target.value)} />
</div>
</div>
<div className="form-group">
<label htmlFor="weightInput">Weight</label>
<input name="weightName" type="text" value={weight} className="form-control" id="weightInput" 
    onChange={(e) => setWeight(e.target.value)} />
</div>
<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
Alignment
</Dropdown.Toggle>
<Dropdown.Menu>
{alignments.map((alignment, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => setAlignment(eventKey)}> {alignment} </Dropdown.Item>)}
</Dropdown.Menu>
</Dropdown>

{/* this needs to be a carrasel of races, with their information to boot~ */}
<div className="form-group">
<label htmlFor="raceInput">Race</label>
<input name="race" value={race} type="text" className="form-control" id="raceInput" 
    onChange={(e) => setRace(e.target.value)} />
</div>

{/* ability scores that need a function to calculate a bonus */}
<div className="form-group">
<div className="form-group">
    <label htmlFor="strengthInput">Strength</label>
    <input name="strength" value={strength} type="text" className="form-control" id="strengthInput" 
    onChange={(e) => setStrength(e.target.value)} />
</div>
</div>
<div className="form-group">
<label htmlFor="dexterityInput">Dexterity</label>
<input name="dexterityName" type="text" value={dexterity} className="form-control" id="dexterityInput" 
    onChange={(e) => setDexterity(e.target.value)} />
</div>
<div className="form-group">
<label htmlFor="consititiutionInput">Consititiution</label>
<input name="consititiution" type="text" value={consititiution} className="form-control" id="consititiutionInput" 
    onChange={(e) => setConsititiution(e.target.value)} />
</div>
<div className="form-group">
<label htmlFor="intelligenceInput">Intelligence</label>
<input name="intelligence" value={intelligence} type="text" className="form-control" id="intelligenceInput" 
    onChange={(e) => setIntelligence(e.target.value)} />
</div>
<div className="form-group">
<div className="form-group">
    <label htmlFor="wisdomInput">Wisdom</label>
    <input name="wisdom" value={wisdom} type="text" className="form-control" id="wisdomInput" 
    onChange={(e) => setWisdom(e.target.value)} />
</div>
</div>
<div className="form-group">
<label htmlFor="charismaInput">Charisma</label>
<input name="charisma" type="text" value={charisma} className="form-control" id="charismaInput" 
    onChange={(e) => setCharisma(e.target.value)} />
</div>


<div className="form-group">
<label htmlFor="hpInput">HP</label>
<input name="hp" type="text" value={hp} className="form-control" id="lasthp" 
    onChange={(e) => setHP(e.target.value)} />
</div>
<div className="form-group">
<label htmlFor="lanuagesInput">Lanuages</label>
<input name="lanuages" value={lanuages} type="text" className="form-control" id="lanuagesInput" 
    onChange={(e) => setLanuages(e.target.value)} />
</div>
<div className="form-group">
<div className="form-group">
    <label htmlFor="pathInput">Path</label>
    <input name="path" value={path} type="text" className="form-control" id="pathInput" 
    onChange={(e) => setPath(e.target.value)} />
</div>
</div>
<div className="form-group">
<label htmlFor="extraInfoInput">Extra Info</label>
<input name="extraInfo" type="text" value={extraInfo} className="form-control" id="otherextraInfo" 
    onChange={(e) => setExtraInfo(e.target.value)} />
</div> */}


const [height, setHeight] = useState('');
const [weight, setWeight] = useState('');
const [alignment, setAlignment] = useState(''); //need to know how to make it so they have to choose from an array*** //dropdown menu 
const [race, setRace] = useState(''); //array //carrasel.caption 
const [strength, setStrength] = useState(''); //supposed to belong to a abilities grouping? and is number
const [dexterity, setDexterity] = useState(''); //also want the ability grouping to have a lil info on what they do 
const [consititiution, setConsititiution] = useState(''); //AS
const [intelligence, setIntelligence] = useState('');//AS
const [wisdom, setWisdom] = useState('');//AS
const [charisma, setCharisma] = useState('');//AS
const [hp, setHP] = useState('');//as and hp are numbers 
const [lanuages, setLanuages] = useState(''); //from array of lanuages //checkboxes and radio //the function to use intelligence to make a decision on how many lanuages can be selected can be done in here 
const [path, setPath] = useState(''); //need to be from a path array
const [extraInfo, setExtraInfo] = useState('');

//array for dropdown menu to choose alignment since it is a set array 
const alignments = ['Lawful good', 'Neutral good', 'Chaotic good', 'Lawful neutral', 'True neutral', 'Chaotic neutral', 'Lawful evil', 'Neutral evil', 'Chaotic evil', 'Unaligned'];

Alignment: {this.props.alignment} HP: {this.props.hp}  Path: {this.props.path} 
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
<Card.Footer>Lanuages known: {this.props.lanuages}</Card.Footer>
</Card.Body>




, height, weight, alignment, race, strength, dexterity, consititiution, intelligence, wisdom, charisma, hp, lanuages, path, extraInfo


within edit 
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
path: props.path,
extraInfo: props.extraInfo,



</div>
<div className="form-group">
    <div className="form-group">
        <label htmlFor="heightInput">Height</label>
        <input name="height" value={this.state.height} type="text" className="form-control" id="heightInput" onChange={this.handleChange} />
    </div>
</div>
<div className="form-group">
    <label htmlFor="weightInput">Weight</label>
    <input name="weightName" type="text" value={this.state.weight} className="form-control" id="weightInput" onChange={this.handleChange} />
</div>


{/* due to setAlignment and alignment not being defined? commented out  */}
 {/* <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
</Dropdown.Toggle>
<Dropdown.Menu>
   {alignments.map((alignment, i) => <Dropdown.Item eventKey = {i} onSelect={(eventKey) => setAlignment(eventKey)}> {this.state.alignment} </Dropdown.Item>)}
</Dropdown.Menu>
</Dropdown> */}

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
    <label htmlFor="dexterityInput">dexterity</label>
    <input name="dexterityName" type="text" value={this.state.dexterity} className="form-control" id="dexterityInput" onChange={this.handleChange} />
</div>
<div className="form-group">
    <label htmlFor="consititiutionInput">consititiution</label>
    <input name="consititiution" type="text" value={this.state.consititiution} className="form-control" id="consititiutionInput" onChange={this.handleChange} />
</div>
<div className="form-group">
    <label htmlFor="intelligenceInput">intelligence</label>
    <input name="intelligence" value={this.state.intelligence} type="text" className="form-control" id="intelligenceInput" onChange={this.handleChange} />
</div>
<div className="form-group">
    <div className="form-group">
        <label htmlFor="wisdomInput">wisdom</label>
        <input name="wisdom" value={this.state.description} type="text" className="form-control" id="wisdomInput" onChange={this.handleChange} />
    </div>
</div>
<div className="form-group">
    <label htmlFor="charismaInput">charisma</label>
    <input name="charisma" type="text" value={this.state.charisma} className="form-control" id="charismaInput" onChange={this.handleChange} />
</div>


<div className="form-group">
    <label htmlFor="hpInput">hp</label>
    <input name="hp" type="text" value={this.state.hp} className="form-control" id="lasthp" onChange={this.handleChange} />
</div>
<div className="form-group">
    <label htmlFor="lanuagesInput">lanuages</label>
    <input name="lanuages" value={this.state.lanuages} type="text" className="form-control" id="lanuagesInput" onChange={this.handleChange} />
</div>
<div className="form-group">
    <div className="form-group">
        <label htmlFor="pathInput">path</label>
        <input name="path" value={this.state.path} type="text" className="form-control" id="pathInput" onChange={this.handleChange} />
    </div>
</div>
<div className="form-group">
    <label htmlFor="extraInfoInput">extraInfo</label>
    <input name="extraInfo" type="text" value={this.state.extraInfo} className="form-control" id="otherextraInfo" onChange={this.handleChange} />
</div>