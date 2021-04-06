import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import HomePage from './homePage';

//Navbar that will organize the routing, while also being extremely basic at the moment 

export default function NavLinkRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <NavLink to= "/home" exact={true}>Home</NavLink>{/* note use of `exact` here! */}
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
            <Switch>
                <Route path="/players">
                    <Players />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

function Contact() {
    return (
        <> {/* see "fragments" https://reactjs.org/docs/fragments.html#short-syntax */}
            <h2>Game Masters</h2>
            <p> drop down menu </p>
            <p> 1.)Create a campaign </p>
            <p> 2.)Existing campaigns </p>
            <p> 3.)GM's RuleBook, by the media component</p>
        </>
    )
}

function Players() {
    return (
        <>
            <h2>Player grouping</h2>
            <p> drop down menu </p>
            <p> 1.)Create a Character </p>
            <p> 2.)Created Characters </p>
            <p> 3.)Character RuleBook, by the media component</p>
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