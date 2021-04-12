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
    }

    handleDeleteClick() {
        this.props.deleteCampaign(this.props._id);
    }

    componentDidMount() {
        this.props._refreshData();
    }

    render() {
        return (
            <Container>
                <Card id="gmcard">
                    <Card.Header><h4>GM: {this.props.gameMaster},<br></br> Campaign Name: {this.props.campaignName}</h4></Card.Header>
                    <Card.Body>
                        <Card.Subtitle><h5>Kingdom: {this.props.kingdom}</h5></Card.Subtitle>
                        <Card.Text><h5>Description: {this.props.description}<br></br> Important NPCs: {this.props.npcs}<br></br> 
                        Notes: {this.props.notes}</h5></Card.Text>
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