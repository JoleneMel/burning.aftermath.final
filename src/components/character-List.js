import { burningAftermathService } from '../rest/BurningAftermathApi';
import React from 'react';
import CharacterCard from './character';

export default class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters : []
    }
      this.updateCharacter = this.updateCharacter.bind(this);
      this.deleteCharacter = this.deleteCharacter.bind(this);
      this.CharactersCards = this.CharactersCards.bind(this);
    
  }

           updateCharacter = async(character) => {
            await burningAftermathService.update(character);
            this._refreshData();
            }

            CharactersCards() { 
            return  this.state.characters.map(character => {
            return <CharacterCard {...character} key={character._id} 
            deleteCharacter={this.deleteCharacter} 
            _refreshData={this._refreshData}
            updateCharacter={this.updateCharacter} />
            });
          }
            deleteCharacter = async(id) => {
            await burningAftermathService.delete(id);
            this._refreshData();
            }

              _refreshData = async() => {
            const characters = await burningAftermathService.getAll();
            this.setState({ characters });
            }

            componentDidMount() {
            this._refreshData();
            }
    render() {

    return (
            <div>
            {this.CharactersCards()} 
            </div>
        );
    };
  }
