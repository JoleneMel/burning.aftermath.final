import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import HomePage from './homePage';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container'
import RuleBook from './ruleBook';
// import Dropdown from 'react-bootstrap/Dropdown';
// import NavItem from 'react-bootstrap/NavItem';
import CreationRules from './creation.rules';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NewCharacterForm } from './new-character-form';
import CharacterList from './character-List';
import GMRules from './gm-rules';

//Navbar that will organize the routing, while also being extremely basic at the moment 
//want to add drop downs to the players and gm to get to particular "pages"
export default function NavLinkRouter() {
    return (
        <Router>
            
                <Nav className="navBar">
                    <NavLink to= "/home" exact={true}><h2 id="home"> Home </h2></NavLink>{/* note use of `exact` here! */} 
                    <NavDropdown title="Homepage" id="gm-nav-dropdown">
                        <NavDropdown.Item href="/projectlist">Project List</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Players" id="player-nav-dropdown">
                        <NavDropdown.Item href="/charactercreate">Create a Character</NavDropdown.Item>
                        <NavDropdown.Item href="/createdcharacters">Created Characters</NavDropdown.Item>
                        <NavDropdown.Item href="/characterrulebook">Character RuleBook</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to="/gm"><h2 id="home"> GM </h2></NavLink> 
                    <NavDropdown title="GM" id="gm-nav-dropdown">
                        <NavDropdown.Item href="/campaigncreate">Create a Campaign</NavDropdown.Item>
                        <NavDropdown.Item href="/createdcampaign">Existing Campaigns</NavDropdown.Item>
                        <NavDropdown.Item href="/gmrulebook">GM's RuleBook</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            
            <Switch>
                <Route path="/players">
                    <Players />
                </Route>
                <Route path="/charactercreate">
                    <NewCharacterForm /> 
                </Route>
                <Route path="/createdcharacters">
                    <CharacterList /> 
                </Route>
                <Route path="/characterrulebook">
                    <CreationRules /> 
                </Route>


                <Route path="/gm">
                    <GM />
                </Route>
                <Route path="/campaigncreate">
                    {/* gm campaign form   */}
                </Route>
                <Route path="/createdcampaign">
                    {/* gm campaigns */}
                </Route>
                <Route path="/gmrulebook">
                    <GMRules />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
                <Route path="/projectlist">
                    {/* to put in project list  */}
                </Route>
            </Switch>
        </Router>
    )
}

function GM() {
    return (
        <> {/* see "fragments" https://reactjs.org/docs/fragments.html#short-syntax */}
        <div>
        <RuleBook />
            <h2>Game Masters</h2>
            <p> drop down menu </p>
            <p> 1.)Create a campaign </p>
            <p> 2.)Existing campaigns </p>
            <p> 3.)GM's RuleBook, by the media component</p>
            </div>
        </>
    )
}

function Players() {
    return (
        <>
        <div>
            <CreationRules />
            <h2>Player grouping</h2>
            <p> drop down menu </p>
            <p> 1.)Create a Character </p>
            <p> 2.)Created Characters </p>
            <p> 3.)Character RuleBook, by the media component</p>
            </div>
        </>
    )
}

function Home() {
    return (
        <div>
            <HomePage />
        </div>
    )
}