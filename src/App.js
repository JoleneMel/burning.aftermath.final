import React from 'react';
import CharacterCard from './components/character';
import { NewCharacterForm } from './components/new-character-form';
import { burningAftermathService } from './rest/BurningAftermathApi';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }

    this.addNewCharacter = this.addNewCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
  }

  render() {
    
    let CharactersCards = this.state.characters.map(character => {
      return <CharacterCard {...character} key={character._id} 
        deleteCharacter={this.deleteCharacter} 
        updateCharacter={this.updateCharacter} />
    });
        
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Add Character</h2>
            <NewCharacterForm addNewCharacter={this.addNewCharacter} />
          </div>
          <div className="col">
            <h2>Characters</h2>
            {CharactersCards}
          </div>
        </div>
      </div>
    );
  }

  _refreshData = async() => {
    const characters = await burningAftermathService.getAll();
    this.setState({ characters });
  }

  componentDidMount() {
    this._refreshData();
  }

  addNewCharacter = async(character) => {
    console.log('inside addNewCharacter function app.js');
    await burningAftermathService.create(character);
    this._refreshData();
  }

  updateCharacter = async(character) => {
    await burningAftermathService.update(character);
    this._refreshData();
  }

  deleteCharacter = async(id) => {
    await burningAftermathService.delete(id);
    this._refreshData();
  }
}
