//form for new campaigns for the gm that should reflect like the characters one, 
//confused on just how to connect this along with the player stuff 

import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


export const GMNewCampaignForm = (props) => {
    const [gameMaster, setGameMaster] = useState('');
    const [campaignName, setCampaignName] = useState('');
    const [kingdom, setKingdom] = useState('');
    const [description, setDescription] = useState('');
    const [npcs, setNpcs] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNewCampaign({gameMaster, campaignName, kingdom, description, npcs, notes});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="gameMasterInput">GM's name</label>
                <input name="gameMaster" value={gameMaster} type="text" className="form-control" id="gameMasterInput" 
                    onChange={(e) => setGameMaster(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="campaignNameInput">Campaign's name</label>
                <input name="campaignName" value={campaignName} type="text" className="form-control" id="campaignNameInput" 
                    onChange={(e) => setCampaignName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="kingdomInput">Kingdom</label>
                <input name="kingdomName" type="text" value={kingdom} className="form-control" id="kingdomInput" 
                    onChange={(e) => setKingdom(e.target.value)} />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="descriptionInput">Description</label>
                    <input name="description" value={description} type="text" className="form-control" id="descriptionInput" 
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="npcsInput">Important NPCs</label>
                <input name="npcs" type="text" value={npcs} className="form-control" id="npcsInput" 
                    onChange={(e) => setNpcs(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="notesInput">Notes</label>
                <input name="notesSeen" type="text" value={notes} className="form-control" id="notesInput" 
                    onChange={(e) => setNotes(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add Campaign</button>
        </form>
    );
}