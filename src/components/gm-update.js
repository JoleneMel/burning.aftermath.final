//update part

import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';



export default class EditCampaignForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameMaster: props.gameMaster,
            campaignName: props.campaignName,
            kingdom: props.kingdom,
            description: props.description,
            npcs: props.npcs,
            notes: props.notes,
            _id: props._id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.updateCampaign(this.state);
        event.preventDefault();
    }

//({gameMaster, campaignName, kingdom, description, npcs, notes});
    render() {
        return (
            <div>
            <Container id="gmform">
            <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} >
                <div className="form-group">
                    <label htmlFor="gameMasterInput"><h5>GM's name</h5></label>
                    <input name="gameMaster" value={this.state.gameMaster} type="text" className="form-control" id="gameMasterInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="campaignNameInput"><h5>Campaign's name</h5></label>
                    <input name="campaignName" value={this.state.campaignName} type="text" className="form-control" id="campaignNameInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="kingdomInput"><h5>Kingdom</h5></label>
                    <input name="kingdom" value={this.state.kingdom} type="text" className="form-control" id="kingdomInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="descriptionInput"><h5>Description</h5></label>
                        <input name="description" value={this.state.description} type="text" className="form-control" id="descriptionInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="npcsInput"><h5>Important NPCs</h5></label>
                    <input name="npcs" value={this.state.npcs} type="text" className="form-control" id="npcsInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="notesInput"><h5>Notes</h5></label>
                    <input name="notes" value={this.state.notes} type="text" className="form-control" id="notesInput" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update Campaign</button>
            </form>
            </Container>
            </div>
        );
    }
}