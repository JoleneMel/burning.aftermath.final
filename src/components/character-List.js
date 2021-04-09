import { burningAftermathService } from '../rest/BurningAftermathApi';
import React from 'react';
import CharacterCard from './character';

export default class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    characters : [],
    [characters] : burningAftermathService.getAll()
    }
}

           updateCharacter = async(character) => {
            await burningAftermathService.update(character);
            this._refreshData();
            }

            CharactersCards = this.state.characters.map(character => {
            return <CharacterCard {...character} key={character._id} 
            deleteCharacter={this.deleteCharacter} 
            updateCharacter={this.updateCharacter} />
            });

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
            {/* <CharactersCards />  */}
            </div>
        );
    }
  }
