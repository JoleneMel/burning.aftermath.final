const BURNINGAFTERMATH_ENDPOINT = 'https://crudcrud.com/api/9808c8e15bf34de8bf4c2c652aa1133c/burningaftermath';

class BurningAftermathService {
    getAll = async() => {
        try {
            const resp = await fetch(BURNINGAFTERMATH_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`Problem fetching your characters: ${e}`);
        }
    }
    update = async(character) => {
        try {
            let updatedWithoutId = {
                name: character.name,
                height: character.height,
                weight: character.weight,
                alignment: character.alignment,
                race: character.race,
                strength: character.strength,
                dexterity: character.dexterity,
                consititiution: character.consititiution,
                intelligence: character.intelligence,
                wisdom: character.wisdom,
                charisma: character.charisma,
                hp: character.hp,
                path: character.path,
                extraInfo: character.extraInfo,
            }
            const resp = await fetch(`${BURNINGAFTERMATH_ENDPOINT}/${character._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`Problem updating character: ${e}`);
        }
    }

    create = async(character) => {
        try {
            const resp = await fetch(`${BURNINGAFTERMATH_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(character)
            });
            return resp;
        } catch(e) {
            console.error(`Problem creating character: ${e}`);
        }
    }

    delete = async(id) => {
        try {
            const resp = await fetch(`${BURNINGAFTERMATH_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting your character:${e}`);
        }
    }
}

export const burningAftermathService = new BurningAftermathService();