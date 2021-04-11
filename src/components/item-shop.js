import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Media from 'react-bootstrap/Media';

export default class ItemShop extends React.Component {
    render () {
        return (
            <div>
            
            <Container className="rules">
            <center><h1>Item Shop</h1></center>
            <Media>
            <Media.Body>
                <h3>Armors: </h3>
                <p>
                Made of metal take cause you to take an extra 2 damage from Electric, Fire, and Ice attacks for each equipped piece of armor. Shields 
                are a special case. You choose whether or not to use a shield during your defense attempt.

                Armors made of Skins and cloth (Hide, Leather, Altercloth, etc) cause you to take an extra 2 damage from Fire and Acid attacks.

                Helmets cause you to take an extra 2 damage from Sound or Sonic attacks.
                </p>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
            <h3>Armor:</h3>
                <h4>Armor Defense (AD) reduces certain types of damage depending on the armor. </h4>
                <ol>
                    <li>
                        <h5>Leather Armor</h5>
                        <p>+2 AD vs Slashing
                        +1 AD vs Bludgeoning
                        Cost: 25 Zahlels 
                        Light Armor</p>
                    </li>
                    <li>
                        <h5>Reinforced Leather Armor</h5>
                        <p>+3 AD vs Slashing
                            Bludgeoning
                            Cost: 45 Zahlels
                            Light Armor</p>
                    </li>
                    <li>
                        <h5>Sha-Elf Shadowleather armor</h5>
                        <p>+1 to all checks to avoid detection 
                            Cost: 15 Zahlels
                            Light Armor</p>
                    </li>
                    <li>
                        <h5>Hide Armor</h5>
                        <p>+3 AD vs Slashing 
                            Bludgeoning 
                            Negates Cold weather penalties
                            Cost: 50 Zahlels</p>
                    </li>
                    <li>
                    <h5>Cloth Garments/Robes</h5>
                        <p>+1 heat and cold adaptation  
                            Cost: 1 Zahlel; 
                            Light Armor</p>
                    </li>
                    <li>
                    <h5>Tauresk Shapecloth</h5>
                        <p>this clothing transforms and re-fits with you when you are affected by a shapechanging power. 
                            (Works for Changelings too) 
                            Cost: 10 Zahlels; 
                            Light Armor</p>
                    </li>
                    <li>
                    <h5>Altercloth</h5>
                        <p>Clothing that shapeshifts into a desired form. Often used by shapeshifters who need to rapidly blend in. 
                            Cost: 125 Zahlels; 
                            Light Armor Special: requires “Armor Proficiency: Altercloth” in order to use its shapeshifting ability.</p>
                    </li>
                    <li>
                    <h5>Chainmail hood</h5>
                        <p>+1 AD against Slashing, piercing; 
                            Cost: 40 Zahlels
                            Light Armor</p>
                    </li>
                    <li>
                    <h5>Chainmail</h5>
                        <p>+4 AD vs Slashing, +1 Piercing;  
                            Cost: 100 Zahels
                            Light Armor</p>
                    </li>
                    <li>
                    <h5>Scale</h5>
                        <p>+5 AD vs Slashing 
                            +4 vs Piercing, and Bludgeoning 
                            - 1 move speed 
                            Cost: 275 Zahlels</p>
                    </li>
                    <li>
                    <h5>Partial Plate</h5>
                        <p>+4 AD vs Slashing, and Bludgeoning 
                            +1 vs Piercing;  
                            Cost: 100 Zahlels</p>
                    </li>
                    <li>
                    <h5>Plate Helmet</h5>
                        <p>+3 AD vs Slashing, 
                            + 2 Piercing, 
                            Bludgeoning; 
                            Cost: 30 Zahlels</p>
                    </li>
                    <li>
                    <h5>Full Plate</h5>
                        <p>+7 AD vs Slashing 
                            +6 vs Piercing, 
                            +5 vs Bludgeoning; 
                            - 1 move speed, 
                            -2 agility 
                            Cost: 300 Zahlels</p>
                    </li>
                    <li>
                    <h5>Religious plate</h5>
                        <p> +5 AD vs Slashing 
                            +4 vs Piercing, and Bludgeoning, 
                            +1 extra against members of the opposing alignment; 
                            Cost: 350 Zahels</p>
                    </li>
                    <li>
                    <h5>Magi-Guard plate</h5>
                        <p>+5 AD vs Slashing 
                            +4 vs Piercing, and Bludgeoning; 
                            The Magical Construct causes you to heal extra HP equal to the Magi-Guard’s level when hit by an attack of that type. 
                            The armor is also fused to your body making it difficult to remove 
                            Cost: 265 Zahlels</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>
            
            <Media>
            <Media.Body>
                <h3>Shields: </h3>
                <p>
                Shields come in several styles, but two variations: Light and Heavy. A Light Shield adds its bonus to defense rolls to attacks 
                targeting Agility or Endurance. A light shield leaves your hand free to have another one handed weapon or use a two-handed weapon, 
                while a heavy shield does not. A Heavy Shield adds its bonus to defense rolls to attacks targeting Endurance or Strength
                </p>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
            <h3>Sheilds</h3>
                <ol>
                    <li>
                        <h5>Bracers</h5>
                        <p>+1 Light Shield; 
                            Cost 10 Zahles</p>
                    </li>
                    <li>
                        <h5>Buckler</h5>
                        <p>+1 Light Shield; 
                            Cost: 10 Zahlels</p>
                    </li>
                    <li>
                        <h5>Parrying Dagger</h5>
                        <p>+1 Light Shield; 
                            Cost 10 Zahlels</p>
                    </li>
                    <li>
                        <h5>Parma(round shield)</h5>
                        <p>+2 Heavy Shield; 
                            Cost: 15 Zahlels</p>
                    </li>
                    <li>
                    <h5>Scutum(cylindrical shield)</h5>
                        <p>+3 Heavy Shield; 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                    <h5>Heater Shield(pentagonal shield)</h5>
                        <p>+2 Light Shield; 
                            Cost: 25 Zahlels</p>
                    </li>
                    <li>
                    <h5>Heavy Heater Shield</h5>
                        <p>+3 Heavy Shield; 
                            Cost: 30 Zahlels</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
                <h5>Weapon Rules: </h5>
                <p>
                A Heavy weapon adds the Strength Modifier and Combat rank to the attack rolls and just the Strength modifier to the Damage. A Light 
                weapon adds the Agility Modifier and Combat rank to the attack rolls and just the Agility modifier to the Damage.
                </p>
                <ol>
                    <li>
                        <p>When you use a weapon with an ability or basic melee attack, specify what kind of damage you intend to do with that attack, 
                            as certain weapons have several types of damage.</p>
                    </li>
                    <li>
                        <h5>Critical Attacks/Weapons</h5>
                        <p>All critical weapons (or attacks) do double damage if the attacker’s roll beats the defender’s roll by at least 5. A crit 
                            for a weapon without the critical property must beat the defender’s roll by at least 10.</p>
                    </li>
                    <li>
                        <h5>Bows and Slings</h5>
                        <p>Cost no actions to load</p>
                    </li>
                    <li>
                        <h5>All crossbows</h5>
                        <p>Cost 1 action to load, unless stated otherwise</p>
                    </li>
                    <li>
                    <h5>Shortbows, and Hand crossbows, and pistols</h5>
                        <p>Can be used while mounted.</p>
                    </li>
                    <li>
                    <h5>Longbows, Greatbows, Crossbows, Heavy crossbows, and arquebuses</h5>
                        <p>Cannot be used while mounted. (Some Exceptions)</p>
                    </li>
                    <li>
                    <h5>Whips</h5>
                        <p>Deal nonlethal damage, meaning you only get knocked unconscious if you take your Hit Points or more damage by it. 
                            If you take more than your Endurance modifier in damage, you are dominated by the user (A successful Endurance 
                            save ends this effect.)</p>
                    </li>
                    <li>
                        <p>All weapon damages listed here assume you are using a medium weapon. Increase the dice used by one type for each 
                            size category larger, and decrease it for each category smaller.</p>
                    </li>
                    <li>
                        <p>Using a weapon with [1 or 2 handed] with two hands gives you a +1 to attack rolls with that weapon.</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
            <h3>Weapons (Melee)</h3>
                <ol>
                    <li>
                        <h5>Battleaxe</h5>
                        <p>Damage: 1d10; 
                            Type: Slashing; 
                            1 or 2 handed 
                            Heavy Axe 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                        <h5>Bagh Nakh</h5>
                        <p>Damage: 1d8 (critical); 
                            Type: Slashing, Piercing: 
                            1 handed 
                            Light Unarmed 
                            Cost: 10 Zahlels</p>
                    </li>
                    <li>
                        <h5>Bo Staff</h5>
                        <p>Damage: 1d6+1; 
                            Type: Bludgeoning; 
                            2 handed 
                            Light Staff 
                            Cost: 10 Zahlels</p>
                    </li>
                    <li>
                        <h5>Cestus</h5>
                        <p>Damage: 1d4+2; 
                            Type: Bludgeoning: 
                            1 handed  
                            Heavy Unarmed 
                            Cost: 10 Zahlels</p>
                    </li>
                    <li>
                    <h5>Club</h5>
                        <p>Damage: 1d6; 
                            Type: Bludgeoning; 
                            1 or 2 handed 
                            Heavy Mace 
                            Cost: 5 Zahlels</p>
                    </li>
                    <li>
                    <h5>Dagger</h5>
                        <p>Damage 1d4+1 (critical); 
                            Type: Slashing, piercing; 
                            1 handed 
                            Light Blade 
                            Cost: 2 Zahlels</p>
                    </li>
                    <li>
                    <h5>Pata (Full Katar)</h5>
                        <p>Damage 1d12; 
                            Type: Slashing, piercing; 
                            1 handed 
                            Heavy Blade 
                            Cost: 40 Zahlels</p>
                    </li>
                    <li>
                        <h5>Flail</h5>
                        <p>Damage: 1d10; 
                            Type: Bludgeoning; 
                            1 or 2 handed 
                            Heavy Flail 
                            cost 20 Zahlels</p>
                    </li>
                    <li>
                    <h5>Glaive</h5>
                        <p>Damage: 1d10; 
                            Type: Slashing; 
                            2 handed(reach) 
                            Heavy Blade 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                    <h5>Greataxe)</h5>
                        <p>Damage: 1d12+4; 
                            Type: Slashing; 
                            2 handed 
                            Heavy Axe 
                            Cost: 35 Zahlels</p>
                    </li>
                    <li>
                    <h5>Greatsword</h5>
                        <p>Damage: 1d10+2; 
                            Type: Slashing, piercing; 
                            2 handed 
                            Heavy Blade 
                            Cost: 30 Zahlels</p>
                    </li>
                    <li>
                        <h5>Halberd</h5>
                        <p>Damage: 1d10+4 
                            Type: Slashing, piercing 
                            2 handed(reach), 
                            Heavy Axe 
                            Cost: 25 Zahlels</p>
                    </li>
                    <li>
                    <h5>Katar</h5>
                        <p>Damage:1d6+1; 
                            Type: Slashing, piercing; 
                            1 handed 
                            Light Blade 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                    <h5>Longspear</h5>
                        <p>Damage: 1d10; 
                            Type:  Piercing; 
                            2 handed(reach) 
                            Heavy Spear 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                    <h5>Longsword</h5>
                        <p>Damage: 1d8+2; 
                            Type: Slashing, piercing; 
                            1 or 2 handed 
                            Heavy Blade 
                            Cost: 25 Zahlels</p>
                    </li>
                    <li>
                        <h5>Mace</h5>
                        <p>Damage: 1d10; 
                            Type: Bludgeoning; 
                            1 or 2 handed 
                            Heavy Mace 
                            Cost: 10 Zahlels</p>
                    </li>
                    <li>
                    <h5>Scutum(cylindrical shield)</h5>
                        <p>+3 Heavy Shield; 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                    <h5>Morningstar</h5>
                        <p>Damage: 1d10+3; 
                            Type: Bludgeoning, Piercing; 
                            1 or 2 handed 
                            Heavy Mace 
                            Cost: 15 Zahlels</p>
                    </li>
                    <li>
                    <h5>Partisan</h5>
                        <p>Damage: 1d8; 
                            Type: Slashing, Piercing 
                            2 handed(reach) 
                            Light Blade 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                        <h5>Pick</h5>
                        <p>Damage: 1d10; 
                            Type: Bludgeoning, Piercing; 
                            1 handed Light Pick 
                            Cost: 20 Zahlels</p>
                    </li>
                    <li>
                    <h5>Poleaxe</h5>
                        <p>Damage: 1d12+4; 
                            Type: Bludgeoning, Slashing, Piercing; 
                            2 handed(reach) 
                            Heavy Hammer, 
                            Heavy Axe, 
                            Heavy Pick  
                            Cost: 25 Zahlels</p>
                    </li>
                    <li>
                    <h5>Shortsword</h5>
                        <p>Damage: 1d6+1; 
                            Type: Slashing, piercing; 
                            1 handed 
                            Light Blade 
                            Cost: 15 Zahlels</p>
                    </li>
                    <li>
                    <h5>Spear</h5>
                        <p>Damage: 1d10; 
                            Type: Piercing; 
                            1 or 2 handed 
                            Light Spear 
                            Cost: 15 Zahlels</p>
                    </li>
                    <li>
                    <h5>Rapier</h5>
                        <p>Damage: 1d6 (critical); 
                            Type: piercing; 
                            1 handed 
                            Light Blade 
                            Cost: 20 Zahles</p>
                    </li>
                    <li>
                        <h5>Quarterstaff</h5>
                        <p>Damage: 1d6; 
                            Type: Bludgeoning; 
                            2 handed 
                            Heavy Staff 
                            Cost: 10 Zahlels</p>
                    </li>
                    <li>
                    <h5>Warhammer</h5>
                        <p>Damage 1d12; 
                            Type: Bludgeoning; 
                            2 handed 
                            Heavy Hammer 
                            Cost: 25 Zahlels</p>
                    </li>
                    <li>
                    <h5>Whip</h5>
                        <p>Damage 2d4, minimum 1: 
                            Type: non-lethal damage; 
                            1 handed Whip 
                            Cost: 2 Zahlels</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>
            
            <Media>
            <Media.Body>
                <h5> Improvised Attack: </h5>
                <p>
                Damage 1d3; Type Bludgeoning; 1 handed Improvised hand weapons that can be used one or two handed, that are used two handed 
                grant the attacker a +1 bonus to the attack roll.
                </p>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
            <h3>Weapons (Thrown)</h3>
                <ol>
                    <li>
                        <h5>Bola</h5>
                        <p>Damage: none; knocks prone and snares 
                            (saving throw 10+Agility) 
                            type:debuff; 1 handed 
                            Light Ranged 
                            Cost: 2 Zahlels; 
                            Range: 10 squares. </p>
                    </li>
                    <li>
                        <h5>Throwing Axe</h5>
                        <p> Damage: 1d8; 
                            type: Slashing; 
                            1 handed 
                            Heavy Ranged, 
                            Heavy Axe 
                            Cost: 3 Zahlels; 
                            Range: 12 squares.</p>
                    </li>
                    <li>
                        <h5>Hurlbat</h5>
                        <p>Damage: 1d6+1; 
                            type: Slashing; 
                            1 handed 
                            Light Ranged, 
                            Light Axe 
                            Cost: 3 Zahlels; 
                            Range: 12 squares.</p>
                    </li>
                    <li>
                        <h5>Throwing Dagger</h5>
                        <p>Damage: 1d4 (critical); 
                            type: piercing; 
                            1 handed Light Ranged, 
                            Light Blade 
                            Cost: 2 Zahlels; 
                            Range: 10 squares.</p>
                    </li>
                    <li>
                        <h5>Javelin</h5>
                        <p>Damage: 1d8; 
                            type: piercing; 
                            1 handed Heavy Ranged, 
                            Heavy Spear 
                            Cost: 5 Zahlels; 
                            Range: 14 squares</p>
                    </li>
                    <li>
                        <h5>Grenade</h5>
                        <p>Damage 1d6; 
                            type: piercing, concussion; 
                            Light explosive 
                            Cost: 10 Zahles;
                            Range: 8 squares 
                            AOE: 4 squares</p>
                    </li>
                    <li>
                        <h5>Smoke Bomb</h5>
                        <p>Target becomes Hidden and Blinded; 
                            type: debuff; 
                            Light explosive 
                            Cost: 10 Zahles;
                            Range: 8 squares 
                            AOE: 2x2 squares</p>
                    </li>
                    <li>
                        <h5>Incendiaries</h5>
                        <p>Damage 1d6; 
                            type: fire; 
                            Light explosive 
                            Cost: 20 Zahles;
                            Range: 8 squares 
                            AOE: 4 squares 
                            Save: 10+level</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
            <h3>Weapons (Ranged)</h3>
                <ol>
                    <li>
                        <h5>Blow gun</h5>
                        <p>Damage: 1+ poison’s effect, 
                            if any; Type: Piercing, 
                            Poison; 
                            1 or 2 handed 
                            Light Ranged; 
                            Cost 5 Zahlels; 
                            Range: 10 </p>
                    </li>
                    <li>
                        <h5>Longbow</h5>
                        <p> Damage: 1d10; 
                            Type: Piercing; 
                            2 handed 
                            Light Ranged; 
                            Cost: 20 Zahlels; 
                            Range: 30 squares</p>
                    </li>
                    <li>
                        <h5>Shortbow</h5>
                        <p>Damage: 1d8 (critical); 
                            Type: Piercing; 
                            2 handed 
                            Light Ranged; 
                            Cost: 10 Zahlels; 
                            Range: 25 squares</p>
                    </li>
                    <li>
                        <h5>Greatbow</h5>
                        <p>Damage: 1d8+2; 
                            Type: Piercing; 
                            2 handed 
                            Heavy Ranged; 
                            Cost:30 Zahlels; 
                            Range: 35 squares</p>
                    </li>
                    <li>
                        <h5>Crossbow</h5>
                        <p>Damage: 1d12; 
                            Type: Piercing; 
                            2 handed 
                            Heavy Ranged;  
                            Cost: 20 Zahlels; 
                            Range: 35 squares</p>
                    </li>
                    <li>
                        <h5>Hand Crossbow</h5>
                        <p>Damage: 1d4 (critical); 
                            Type: Piercing; 
                            1 handed 
                            Light Ranged; 
                            Cost: 15 Zahlels; 
                            Range: 15 squares</p>
                    </li>
                    <li>
                        <h5>Heavy Crossbow</h5>
                        <p>Damage: 1d12+4; 
                            Type: Piercing; 
                            2 handed Heavy Ranged; 
                            Cost: 25 Zahlels; 
                            Range: 40 squares</p>
                    </li>
                    <li>
                        <h5>Sling</h5>
                        <p>Damage: 1d6+1; 
                            Type: Bludgeoning; 
                            1 handed 
                            Light Ranged; 
                            Cost: 2 Zahlels; 
                            Range: 15 squares</p>
                    </li>
                    <li>
                        <h5>Arquebus</h5>
                        <p>Damage: 4d6; 
                            Type: Piercing; 
                            2 handed 
                            Heavy Ranged  
                            Special: It takes three actions to load an Arquebus. 
                            Anyone loading one provokes opportunity attacks to up to two enemies within five squares. 
                            Also, there is a -4 penalty to all attack rolls with an Arquebus. 
                            Do not add any bonuses to damage or attack rolls with an Arquebus. 
                            Cost: 80 Zahlels; 
                            Range: 25 squares</p>
                    </li>
                    <li>
                        <h5>Pistol</h5>
                        <p>Damage: 2d6; 
                            Type: Piercing; 
                            1 handed 
                            Light Ranged; 
                            Special: It takes 3 actions to load a Pistol. 
                            Anyone loading one provokes opportunity attacks from an enemy within five squares. 
                            Do not add any bonuses to damage or attack rolls with a Pistol.</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>
            
            <Media>
            <Media.Body>
            <h3>Weapons/Equipment (Special)</h3>
                <h5>Special equipment requires 2 feats to gain proficiency</h5>
                <ol>
                    <li>
                        <h5>Blade Bow</h5>
                        <p>Damage: 2d6(Ranged) 
                            1d6(Melee); 
                            Type: Piercing; 
                            2 handed 
                            Light Ranged; 
                            Cost: 25 Zahlels; 
                            Range: 30 </p>
                    </li>
                    <li>
                        <h5>Urumi</h5>
                        <p> Damage: 2d6; 
                            Type: Slashing; 
                            1 handed 
                            Light Blade; 
                            Cost: 50 Zahlels; 
                            Range: Varies depending on size of character</p>
                    </li>
                    <li>
                        <h5>Goblin Arquebus</h5>
                        <p>Damage: 3d6; 
                            Type: Piercing; 
                            2 handed 
                            Heavy Ranged Special: It takes two actions to load a Goblin Arquebus. 
                            Unlike a normal arquebus, no opportunity attack is provoked from loading. 
                            Also, unlike a normal arquebus, a goblin arquebus adds its wielders Agility bonus to attacks rolls.</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>
            
            <Media>
            <Media.Body>
            <h3>Traps</h3>
                <ol>
                    <li>
                        <h5>Snare</h5>
                        <p>Target is snared or tethered; 
                            type:debuff 
                            Light Trap 
                            Cost: 2 Zahlels; 
                            AOE: 1x1 squares 
                            Save: 10+level</p>
                    </li>
                    <li>
                        <h5>Explosive charge</h5>
                        <p> Damage 1d6; 
                            type: piercing, 
                            concussive Light Trap, 
                            Light Explosive 
                            Cost: 10 Zahlels; 
                            AOE: 2x2 squares</p>
                    </li>
                    <li>
                        <h5>Directed Explosive charge</h5>
                        <p>Damage 1d6; 
                            type: piercing, 
                            concussive 
                            Light Trap, 
                            Light Explosive 
                            Cost: 15 Zahlels; 
                            AOE: 4x1 squares</p>
                    </li>
                    <li>
                        <h5>Incendiary charge</h5>
                        <p>Damage 1d6; 
                            type: fire 
                            Light Trap, 
                            Light Explosive 
                            Cost: 20 Zahlels;
                            AOE: 2x2 squares 
                            Save: 10+level</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
            <h3>Supplies</h3>
                <ol>
                    <li>
                        <h5>crowbar</h5>
                        <p>+1 to awesomeness</p>
                    </li>
                    <li>
                        <h5>Ammunition</h5>
                        <p> 30 (insert ammunition type here) 
                            Cost: 5 Zahlels; 
                            Bullets for Arquebus cost 10 Zahlels for 20.</p>
                    </li>
                    <li>
                        <h5>alchemist’s supplies</h5>
                        <p>+1 to looking smart  
                            cost: 50 Zahlels </p>
                    </li>
                </ol>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
            <h3>Mount Armor</h3>
                <h5>use equivalent stats price GM discretion;</h5>
                <ol>
                    <li>
                        <h5>Weaponized Peytral</h5>
                        <p>1d6+3 piercing damage to Charges</p>
                    </li>
                    <li>
                        <h5>Lance</h5>
                        <p> 1d6+ spaces moved</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>
            </Container>
            </div>
        );
    }
}