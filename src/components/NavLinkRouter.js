import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // NavLink
} from 'react-router-dom';
import HomePage from './homePage';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import RuleBook from './ruleBook';
import CreationRules from './creation.rules';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NewCharacterForm } from './new-character-form';
import CharacterList from './character-List';
import GMRules from './gm-rules';
import ItemShop from './item-shop';
import ProjectTables from './project-tables';
import { GMNewCampaignForm } from './gm-campaign-form';
import CampaignCard from './gm-campaign';
import Container from 'react-bootstrap/Container'


export default function NavLinkRouter() {
    return (
        <Router>
            <Container>
                <Nav className="navBar">
                    
                    <NavDropdown title="Homepage" id="home-nav-dropdown">
                        <NavDropdown.Item href="/homepage">Homepage</NavDropdown.Item>
                        <NavDropdown.Item href="/projecttables">Project Tables</NavDropdown.Item>
                        <NavDropdown.Item href="/rulebook">RuleBook</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Players" id="player-nav-dropdown">
                        <NavDropdown.Item href="/charactercreate">Create a Character</NavDropdown.Item>
                        <NavDropdown.Item href="/createdcharacters">Created Characters</NavDropdown.Item>
                        <NavDropdown.Item href="/characterrulebook">Character RuleBook</NavDropdown.Item>
                        <NavDropdown.Item href="/itemshop">Item Shop</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="GM" id="gm-nav-dropdown">
                        <NavDropdown.Item href="/campaigncreate">Create a Campaign</NavDropdown.Item>
                        <NavDropdown.Item href="/createdcampaign">Existing Campaigns</NavDropdown.Item>
                        <NavDropdown.Item href="/gmrulebook">GM's RuleBook</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            
            <Switch>
                <Route path="/charactercreate">
                    <NewCharacterForm /> 
                </Route>
                <Route path="/createdcharacters">
                    <CharacterList /> 
                </Route>
                <Route path="/characterrulebook">
                    <CreationRules /> 
                </Route>
                <Route path="/itemshop">
                    <ItemShop /> 
                </Route>



                <Route path="/campaigncreate">
                    <GMNewCampaignForm />
                </Route>
                <Route path="/createdcampaign">
                    <CampaignCard />
                </Route>
                <Route path="/gmrulebook">
                    <GMRules />
                </Route>


                <Route path="/homepage">
                    <HomePage />
                </Route>
                <Route path="/projecttables">
                    <ProjectTables />
                </Route>
                <Route path="/rulebook">
                    <RuleBook />
                </Route>
            </Switch>
            </Container>
        </Router>
    )
}

