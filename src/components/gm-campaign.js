//gm finished forms get entered here 

import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import EditCampaignForm from './gm-update';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default class CampaignCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateCampaign = this.updateCampaign.bind(this);
    }

    handleDeleteClick() {
        this.props.deleteCampaign(this.props._id);
    }

    updateCampaign(campaign) {
        this.props.updateCampaign(campaign);
    }

    render() {
        return (
            <Container>
                <Card>
                    <Card.Header>GM: {this.props.gameMaster}, Campaign Name: {this.props.campaignName}</Card.Header>
                    <Card.Body>
                        <Card.Subtitle> Kingdom: {this.props.kingdom}</Card.Subtitle>
                        <Card.Text>Description: {this.props.description} Important NPCs: {this.props.npcs} Notes: {this.props.notes}</Card.Text>
                    </Card.Body>
                    <EditCampaignForm {...this.props} updateCampaign={this.props.updateCampaign} />
                <ButtonGroup>
                    <Button variant= "btn btn-danger" onClick={this.handleDeleteClick}>Delete</Button>
                </ButtonGroup>
                </Card>
            </Container>
        );
    }
}