const CAMPAIGN_ENDPOINT = 'https://crudcrud.com/api/9808c8e15bf34de8bf4c2c652aa1133c/campaigns';


class CampaignService {
    getAll = async() => {
        try {
            const resp = await fetch(CAMPAIGN_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`Problem fetching your campaigns: ${e}`);
        }
    }
    update = async(campaign) => {
        try {
            let updatedWithoutId = {
                gameMaster: campaign.gameMaster,
                campaignName: campaign.campaignName,
                kingdom: campaign.kingdom,
                description: campaign.description,
                npcs: campaign.npcs,
                notes: campaign.notes,
            }
            const resp = await fetch(`${CAMPAIGN_ENDPOINT}/${campaign._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`Problem updating campaign: ${e}`);
        }
    }

    create = async(campaign) => {
        try {
            const resp = await fetch(`${CAMPAIGN_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(campaign)
            });
            return resp;
        } catch(e) {
            console.error(`Problem creating campaign: ${e}`);
        }
    }

    delete = async(id) => {
        try {
            const resp = await fetch(`${CAMPAIGN_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting your campaign:${e}`);
        }
    }
}

export const campaignService = new CampaignService();