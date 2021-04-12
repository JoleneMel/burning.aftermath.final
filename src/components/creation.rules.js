import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Media from 'react-bootstrap/Media';
//reorganize later 
export default class CreationRules extends React.Component {
    render () {
        return (
            <div>
            
            <Container className="rules">
            <center><h1>Burning Aftermath</h1></center>
            <Media>
            <Media.Body>
            <h3>Creating a Character:</h3>
                <ol>
                    <li>
                        <p>Assign Ability Scores.</p>
                    </li>
                    <li>
                        <p>Choose a race</p>
                    </li>
                    <li>
                        <p>compute final ability scores</p>
                    </li>
                    <li>
                        <p>Choose your starting skill levels. You have skill points equal to your highest ability score to spend.</p>
                    </li>
                    <li>
                        <p> Find your HP (hit points.) Hit Points at first level: [roll 1d6] + Endurance Score + Rank in Survival 
                            (Natural) or 1/2 rank in Survival (Magical) Minimum 1 ---- If you take a Spellcasting feat, you must 
                            use the 1/2 rank in Survival (Magical). </p>
                    </li>
                    <li>
                        <p>Choose roleplaying information. Height, Weight, Name, Starting languages, etc.</p>
                    </li>
                    <li>
                        <p>Make abilities</p>
                    </li>
                    <li>
                        <p>Decide on Augmented Being or not. You can have some part of your character’s body replaced by machinery of 
                        magical or scientific (more likely magical) origin, essentially making you into a fantasy-world cyborg. Be 
                        sure to put “Augmented” on your character’s list of keywords if you choose this option.</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>
            
            <Media>
            <Media.Body>
            <h3>Leveling a Character:</h3>
                <ol>
                    <li>
                        <p>add 2d6 HP per rank in either Survival (Natural) or 1d6 HP per rank Survival (Magical) (minimum 1) --- Special: 
                        A Dragon gains 3d6 HP per rank in Survival (Natural) and 2d6 HP per rank in Survival (Magical)</p>
                    </li>
                    <li>
                        <p>Every three levels, add 2 to two ability scores. (level 3, 6, 9, 12, etc.)</p>
                    </li>
                    <li>
                        <p>You gain skill points equal to one half of your highest ability score. Distribute them among your skills as you wish.</p>
                    </li>
                    <li>
                        <p>A skill levels up every 10 points. You can either add an ability or add a new effect to an old one when its core skill 
                        levels up.</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Ability Scores: </h5>
                <p>
                Roll a d20 for Strength, Intelligence, Agility, Endurance, and Charisma. If you roll anything under an 8, re-roll. Assign those numbers as you wish. 
                Strength: Carry weight and melee power.
                Intelligence: Spell knowledge and potency, along with capability to perform complex tasks.
                Agility: maneuverability and physical prowess. (Some spells could use Agility)
                Endurance: Health, durability, and resistances.
                Charisma: Skills or Powers of persuasion or intimidation. Or just social prowess.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Ability Bonuses: </h5>
                <p>
                Your ability bonus adds a bonus to your attack, healing, skill, and damage rolls. You have no bonus 
                unless your Ability score is 13 or more. At 13, it is +1. At 14-15, it is +2. At 16-17, it is +3, at 18-19, 
                it is +4, at 20-21, it is +5, and so on.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Abilities: </h5>
                <p>
                At level 1, you have four abilities based on your skills. You can make a new ability related to each skill 
                every two skill levels. (You can make four abilities at level one, regardless of your skill levels.) Consult 
                your GM and group about every ability created. Most level 1 abilities will do One weapon damage, or if they 
                are magic powers, 1-2d6 damage/healing, or something along those lines. No super-insane powers at early levels. 
                Consult with your group and GM to see what sounds fair, then go with it.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Skills: </h5>
                <p>
                Skills are split up into two versions of five branches. All Skill ranks start at rank 0. The two versions are Magic 
                and Natural. You can conjure a fireball or put an arrow into a goblin’s eye. Either way, you can end up being one of 
                the most powerful beings in existence. Or die trying. There are Combat skills, ranging from casting a fireball to dodging 
                a bullet, to shapeshifting into a beast or swinging a sword. Next are Survival skills, ranging from gathering firewood to 
                tracking a mammoth to provide for a village, or holding your breath so you don’t drown. (Enduring poisons and the like fall 
                under Survival skills.) Next, Healing skills, allowing you to cure disease, set bones, reverse the effects of poison, and 
                cause wounds to vanish. After that are Knowledge skills which determine your knowledge on particular subjects like history, 
                magic, etc. Finally, there are Social skills, allowing you to interrogate, gather information through rumors, dance, play 
                music, etc. 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Skill Ranks: </h5>
                <p>
                At first level, you have points to assign to your skills equal to your highest ability score. Assign them to skills as you 
                wish. Each skill rank has 10 points until it levels up. At level 1, a power can only have one effect, and all powers are custom 
                made by the player. (A player can use something basic, like a fireball or a simple cleave attack, without any personal touches 
                if he/she wants.) After Rank 1 in a skill, you can add 1 effect to a power or equipment upgrade of your choice. 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Currency: </h5>
                <p>
                Each Character starts with 150 Zahlels to spend on equipment.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Character Race: </h3>
                <p>
                Some races start off with higher starting skills than others, and each race has its own racial feature(s). 
                Being a Large creature: Too Big: You are unable to enter hallways or areas that are not at least 2 squares wide without squeezing in, 
                making it easier for you to get hit. Also, equipment you get for a creature your size costs an additional 25% Zahlels. Large weapons 
                deal an extra d6 damage but get a -2 to hit against mediums, -4 against smalls and a -6 against tinies. A two handed normal weapon can 
                be used as a one handed large weapon, but does not gain the damage buff.
                </p>
            </Media.Body>
            </Media>
            </Container>
            </div>
        );
    }
}