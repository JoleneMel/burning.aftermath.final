import { campaignService } from '../rest/CampaignApi';
import React from 'react';
import CampaignCard from './gm-campaign';

export default class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns : []
    }
      this.updateCampaign = this.updateCampaign.bind(this);
      this.deleteCampaign = this.deleteCampaign.bind(this);
      this.CampaignCards = this.CampaignCards.bind(this);
    
  }

           updateCampaign = async(campaign) => {
            await campaignService.update(campaign);
            this._refreshData();
            }

            CampaignCards() { 
            return  this.state.campaigns.map(campaign => {
            return <CampaignCard {...campaign} key={campaign._id} 
            deleteCampaign={this.deleteCampaign} 
            _refreshData={this._refreshData}
            updateCampaign={this.updateCampaign} />
            });
          }
            deleteCampaign = async(id) => {
            await campaignService.delete(id);
            this._refreshData();
            }

              _refreshData = async() => {
            const campaigns = await campaignService.getAll();
            this.setState({ campaigns });
            }

            componentDidMount() {
            this._refreshData();
            }
    render() {

    return (
            <div>
            {this.CampaignCards()} 
            </div>
        );
    };
  }