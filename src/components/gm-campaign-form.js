//form for new campaigns for the gm that should reflect like the characters one, 
//confused on just how to connect this along with the player stuff 

import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { campaignService } from '../rest/CampaignApi';
import Container from 'react-bootstrap/Container';

export const GMNewCampaignForm = (props) => {
    const [gameMaster, setGameMaster] = useState('');
    const [campaignName, setCampaignName] = useState('');
    const [kingdom, setKingdom] = useState('');
    const [description, setDescription] = useState('');
    const [npcs, setNpcs] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewCampaign({gameMaster, campaignName, kingdom, description, npcs, notes});
    }

    const _refreshData = async() => {
    const campaigns = await campaignService.getAll();
    }

    function componentDidMount() {
    _refreshData();
    }

    const addNewCampaign = async(campaign) => {
        console.log('inside addNewCampaign function app.js');
        await campaignService.create(campaign);
        _refreshData();
      }



    return (
        <form onSubmit={handleSubmit}>
            <Container id="gmform">
            <div className="form-group"><br></br>
                <label htmlFor="gameMasterInput"><h5>GM's name</h5></label>
                <input name="gameMaster" value={gameMaster} type="text" className="form-control" id="gameMasterInput" 
                    onChange={(e) => setGameMaster(e.target.value)} />
            </div><br></br>
            <div className="form-group">
                <label htmlFor="campaignNameInput"><h5>Campaign's name</h5></label>
                <input name="campaignName" value={campaignName} type="text" className="form-control" id="campaignNameInput" 
                    onChange={(e) => setCampaignName(e.target.value)} />
            </div><br></br>
            <div className="form-group">
                <label htmlFor="kingdomInput"><h5>Kingdom</h5></label>
                <input name="kingdomName" type="text" value={kingdom} className="form-control" id="kingdomInput" 
                    onChange={(e) => setKingdom(e.target.value)} />
            </div><br></br>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="descriptionInput"><h5>Description</h5></label>
                    <input name="description" value={description} type="text" className="form-control" id="descriptionInput" 
                    onChange={(e) => setDescription(e.target.value)} />
                </div><br></br>
            </div>
            <div className="form-group">
                <label htmlFor="npcsInput"><h5>Important NPCs</h5></label>
                <input name="npcs" type="text" value={npcs} className="form-control" id="npcsInput" 
                    onChange={(e) => setNpcs(e.target.value)} />
            </div><br></br>
            <div className="form-group">
                <label htmlFor="notesInput"><h5>Notes</h5></label>
                <input name="notes" type="text" value={notes} className="form-control" id="notesInput" 
                    onChange={(e) => setNotes(e.target.value)} />
            </div><br></br>
            <button type="submit" className="btn btn-primary">Add Campaign</button>
            </Container>
        </form>
    );
}