import React from 'react';
import CharacterCard from './components/character';
import { NewCharacterForm } from './components/new-character-form';
import { burningAftermathService } from './rest/BurningAftermathApi';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import  NavLinkRouter from './components/NavLinkRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import HomePage from './components/homePage';
import Nav from 'react-bootstrap/Nav';
import RuleBook from './components/ruleBook';
import CreationRules from './components/creation.rules';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GMRules from './components/gm-rules';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }



  }

  render() {
        
    return (
      <React.Fragment>
      <NavLinkRouter /> 
      </ React.Fragment>
    );
  }
}