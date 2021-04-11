import React from 'react';
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';



export default class RuleBook extends React.Component {
    render () {
        return (
            <div>
                <Container className="rules">
                <center><h1>Burning Aftermath</h1></center>
                <h3>Basic Supplies and Rules Overview: </h3>
            <Media>
            <Media.Body>
                <h5>Game board: </h5>
                <p>
                Any square-based board. If you have something designed for RPGs, great, if not, oh well. Draw squares on a piece of
                paper, there’s your board. Each square is five feet in the game world.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Dice Needed: </h5>
                <p>
                d4s, d6s, d8s, d10s, d12s and d20s are used for Burning Aftermath. (Also, non-physical versions such as d3s, d5s, etc.)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Experience To Level: </h5>
                <p>
                From level 1-2, 1,000 XP to level. This increases by 1,000 until level 10. (so, to get to level 10, the total XP will be 9,000)
                 At level 11-20, the increase is 2,000 per level until level 30. At level 30-35, the increase is 3,000.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Saves: </h5>
                <p>
                If you have a hostile effect applied to you, at the end of your turn, you roll a save.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Alignment: </h5>
                <p>
                All characters start off Unaligned, and define who they are and how they react to things as they develop. Alignment system is
                 here: https://docs.google.com/document/d/12IzUMCu2FK06LkBGq-IgzUv60u8LhzgVVFOqpr-FSsU/edit
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Skill Checks: </h5>
                <p>
                Roll a d20 for the skill check, then add your rank in the correct skill.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Turns: </h5>
                <p>
                During your turn you get a certain number of actions determined by rolling a d6 and subtracting 1 at the start of your turn 
                (maximum of 5 actions per turn, minimum of 1.)  Moving is one action. Speaking takes no actions. 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Attacking: </h5>
                <p>
                To see if you hit a target, roll a d20 and add any relevant bonuses to the roll. Use that number vs. the target’s total defending 
                roll. If the defender’s and attacker’s rolls tie, then the attacker hits.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Defending: </h5>
                <p>
                Your defenses are determined by your Ability score bonus + a d20 roll. When you are attacked, you roll against the attack and add your 
                bonus to the roll. If you beat your attacker’s roll, the attack misses. If it is a tie or the attacker’s roll is higher, the attacker 
                hits. Your rank in Survival (either Natural or Magic) is added to the defense roll.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Targeting: </h5>
                <p>
                With a basic attack one may target a limb at the cost of -5 to hit, or the head at the cost of a -10 to hit. After the target part 
                takes damage greater than the targets endurance modifier it becomes crippled. With bludgeoning, a blow to the head stuns for 2 action 
                points; with slashing and piercing 2d6 extra damage is taken. Opportunity attacks can not be targeted, nor can powers/abilities be used 
                to target limbs unless they are specifically designed for that purpose.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Statuses:</h3>
                <h5>Blinded: </h5>
                <p>
                When you are blinded you have a -5 to attack and defense rolls, and you are unable to see.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Combat Advantage: </h5>
                <p>
                When you grant combat advantage, you take a -2 to defense rolls.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Crippled: </h5>
                <p>
                When crippled you grant combat advantage and have -3 to rolls using the pertinent limb. You also may be slowed, depending on the limb.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Dazed: </h5>
                <p>
                All action costs are doubled
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Dominated: </h5>
                <p>
                When you are Dominated your actions are chosen by the controller of the domination effect, or it’s controller if it has one.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Frightened: </h5>
                <p>
                When feared all actions must move you away from the attacker until you are a number of squares away equal to half of your move speed. 
                (rounded down.)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Flanked: </h5>
                <p>
                When flanked you grant combat advantage.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Frenzy: </h5>
                <p>
                Attacks the nearest creature and grants opportunity attacks.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Immobilized: </h5>
                <p>
                When you are immobilized you are unable to move in any capacity. You are still conscious, but unable to speak. 
                You are unable to make Strength or Agility based rolls.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Grappled: </h5>
                <p>
                When grappled you can not take any move action and grant combat advantage.
                </p>
            <Media>
            <Media.Body>
                        <h5>Attacking with a Grapple</h5>
                        <p>
                        Grapple attack is done by: d20 + Strength bonus + rank in Combat (Natural) vs. d20 + Agility bonus or d20 + Strength bonus.
                        </p>
                    </Media.Body>
                    </Media>
                </Media.Body>
                </Media>
            <Media>
            <Media.Body>
                <h5>Prone: </h5>
                <p>
                When prone you have a reduced move speed and have -2 to Strength and Agility checks. Grants combat advantage
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Silenced: </h5>
                <p>
                When you are silenced you are unable to use magic based abilities (includes non-verbal spells, silenced takes away the 
                ability to cast spells for a time.)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Slowed: </h5>
                <p>
                You have a reduced move speed
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Snared: </h5>
                <p>
                When you are snared, you are unable to move freely. You are still conscious, and able to speak, unless otherwise stated. 
                You have a -5 to all Strength and Agility based rolls. When you are snared you may be warpped up/tangled, you can move, but only 
                a small range. 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Stunned: </h5>
                <p>
                When you are stunned, you lose a number of actions stated by the effect stunning you, and are unable to make Strength, Agility, Intelligence,
                 or Charisma checks until you have actions available.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Terrified: </h5>
                <p>
                Same as Frightened, except distance from attacker has to equal move speed.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Rooted: </h5>
                <p>
                When you are rooted you are unable to take any move action, and you have -5 to all Agility based rolls.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Taunted: </h5>
                <p>
                When you are taunted you are unable to take any action not against the specified target.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Tethered: </h5>
                <p>
                "Freedom is a length of rope." You are unable to take any move action outside of a specified area or range.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Weakened: </h5>
                <p>
                All ability scores and move speed is reduced by 2
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Movement:</h3>
                <p>
                There are different kinds of movements, but every type takes 1 action. A basic move is simply moving up to your speed. 
                This provokes opportunity attacks if you leave a square adjacent to an enemy. Shifting allows you to move 1 square per action, 
                and does not provoke opportunity attacks. Flying, Burrowing, and Swimming have different rules. Opportunity Attacks: Leaving a 
                square adjacent to an enemy provokes an opportunity attack. Readying but not using a ranged ability while adjacent to an enemy 
                provokes an opportunity attack.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Squeezing: </h5>
                <p>
                When you want to fit into a smaller space, you can squeeze. If you squeeze the edges of your square are reduced by one if you 
                are large or larger, if the character is medium or smaller squeezing into a space is determined by the GM. the creature that 
                is squeezing does half damage on attacks, and takes double damage on attacks.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Jumping: </h5>
                <p>
                Roll a d20 and add your Agility bonus, then divide the result by 5, round down after applying modifiers: that is the number of squares 
                you jump horizontally. Result divided by two for how high you jump, and x2 if you have a running start.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Burrowing: </h5>
                <p>
                ame rules as flying except no double opportunity attack provoke.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Swimming: </h5>
                <p>
                when you want to fit into a smaller space, you can squeeze. If you squeeze the edges of your square are reduced by one 
                if you are large or larger, if the character is medium or smaller squeezing into a space is determined by the GM. the 
                creature that is squeezing does half damage on attacks, and takes double damage on attacks.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Flying: </h5>
                <p>
                Flying works almost exactly the same way as walking. If you move from standing to flying while adjacent to an enemy, 
                you provoke two opportunity attacks, rather than one. If something lacks the ability to hover, it must keep moving while 
                it flies. If that something doesn’t move during its turn, it will start to fall.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Falling: </h5>
                <p>
                Unless stated otherwise, you take 2d6 damage for every 2 squares you fall. One square causes no damage.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Sight and Light Levels:</h3>
                <p>
                Most races are able to see in bright light without penalty. Low light requires low-light vision or night-sight to see without penalty. 
                If a creature is in low light without low-light vision, it takes a -2 penalty to all attack rolls and sight checks. If the creature has 
                low-light vision and is in total darkness, the same -2 penalty applies. A creature without low-light vision or night-sight takes a -5 
                penalty to all attack rolls and sight-based checks. If the creature does not have normal vision and is in bright light, it takes the -2 
                penalty to attack rolls and sight-based checks. If the creature has only night-sight and is in bright light, it takes a -5 penalty to 
                those checks.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Currency: </h3>
                <p>
                The “gold” coins are known as Zahlels. It takes 100 copper coins (Zorlas) to make 1 Zahlel. Many areas do not trade in money, but in goods. 
                Keep that in mind.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Languages: </h3>
                <p>
                You know whatever languages your race starts off with, plus one more if your Intelligence score is above 15. Another language can be learned every 
                5 points after that in Intelligence.
                </p>
                <ul>
                    <li>
                        <h5>Vostra:</h5>
                        <p>Most commonly spoken language. (note: not all races speak it.)</p>
                    </li>
                    <li>
                        <h5>Faerie:</h5>
                        <p>Language spoken by races more inclined to be tricksters. (Fairies, Changelings, Goblins, etc.)</p>
                    </li>
                    <li>
                        <h5>Tzun:</h5>
                        <p>Language of the Elves</p>
                    </li>
                    <li>
                        <h5>Tzut:</h5>
                        <p>Language of the Half-Elves, an offshoot of Tzun. Uses the same script, but different sounds</p>
                    </li>
                    <li>
                        <h5>Kallahk:</h5>
                        <p>Language of Dragons and Draconic creatures.</p>
                    </li>
                    <li>
                        <h5>Ocrate:</h5>
                        <p>Language of Orcs, Giants, and Ogres</p>
                    </li>
                    <li>
                        <h5>Vay’Kahn:</h5>
                        <p>Language of Demons and most Demonic entities</p>
                    </li>
                    <li>
                        <h5>Nekrain:</h5>
                        <p>Language of the Undead</p>
                    </li>
                    <li>
                        <h5>Xallas:</h5>
                        <p>Language of tribal races, usually reptilian.</p>
                    </li>
                </ul>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
                <h5>Shapeshifting: </h5>
                <p>
                You can shapeshift according to the rules of a shapeshifting power. Like all abilities, shapeshifting powers 
                take 1 action to use. Armor you’re wearing does not change with you, except if otherwise stated. Things you are 
                holding in your hands are dropped if you change into a form without hands. If you turn into an animal from a humanoid, 
                your armor can  change to be absorbed into your form. You can decide that certain things remain separate from the animal 
                form, such as a sheath and a weapon, or some types of armor. You make this decision when you change shape.
                </p>
            </Media.Body>
            </Media>
            
            <Media>
            <Media.Body>
                <h4>Advice for GM’s and players: </h4>
                <h5>Hidden:</h5>
                <p>
                Creatures take a -2 to attack rolls against hidden creatures.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Invisible: </h5>
                <p>
                Creatures without the ability to see invisible targets take a -6 to attack rolls against them.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Unaware: </h5>
                <p>
                While unaware of an attacker, You take a -6 to defenses against its attacks.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Sneak attacks: </h5>
                <p>
                While unaware of the attacker, an attack does an extra d6 damage.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Abilities: </h5>
                <p>
                - Some notes about creating abilities: 
                - If the ability does damage, specify what kind. Examples: Piercing, Bludgeoning, Cleaving, Slashing, Fire, 
                Cold, Acid, Holy, Demonic, Necrotic, Weapon, Bleeding, Poison, Electric, etc.
                - Not all abilities are for combat. Social, Knowledge, Survival, Combat and Healing are types of abilities.
                - Specify the source in the power. Magic or Natural.
                - Don’t do anything OP or too ridiculous.
                - List of Schools of Magic:  In the second section at this link.
                https://docs.google.com/document/d/12IzUMCu2FK06LkBGq-IgzUv60u8LhzgVVFOqpr-FSsU/edit
                - No resurrection at level 1, unless it comes at a heavy price. Bringing people back to life is hard.
                -No soul-based spells (Unless you’re willing to damage your own) as a mortal. All creatures without the Immortal keyword are mortal. 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Examples of Attacks: </h3>
                <h5>Basic Melee Weapon Attack</h5>
                <p>
                Combat (Natural)
                Uses 1 action
                Target: 1 adjacent creature
                Strength (Heavy weapon) or Agility (Light weapon) + Combat (Natural) vs. Agility or Endurance
                Damage: 1[W] + Strength or Agility damage 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Basic Ranged Weapon Attack: </h5>
                <p>
                Combat (natural)
                uses 2 actions (one load one fire)
                target: 1 creature in range
                Dexterity + Combat (Natural) vs. Agility or Endurance
                Damage: 1[W] + Dexterity damage 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Disarm: </h5>
                <p>
                Combat (Natural)
                Uses 1 actions 
                target: 1 creature your size or smaller 
                Strength + Combat (Natural) vs Strength
                Effect: you disarm the target
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Chilling Weapon: </h5>
                <p>
                Combat (Magic)
                Keywords: Enchanting, Cold
                uses 1 action
                effect: you coat your weapon with magical frost making it do an additional 3 ice damage. lasts for 1 attack.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Mend Injury: </h5>
                <p>
                Healing (Natural)
                uses 1 action 
                Expends medical equipment 
                target: 1 creature 
                Effect: the target regains 1d6 + rank in Healing (Natural) HP
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Transmute: </h5>
                <p>
                Target: Touch
                Requirements: Enough non-living material to create the object of choice
                Effect: You create an object of your choice from the parameters set above, and object can be used as an object 
                created naturally of that shape. A transmuted Sword would work like a regular sword would. The transmuted object has tell-tale 
                signs it was transmuted, but only to the trained eye. Other than that, it is impossible to tell the difference. One cannot 
                create currency, or creatures, and you must destroy the equivalent amount of the material that you create, gram per gram. The 
                material must also be of the same kind of material, like oxygen can only be made from other gasse
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Skirmish: </h5>
                <p>
                Uses 1 action
                Effect: do not provoke opportunity attacks as a part of this movement, though you may not change modes as part of this movement
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Dragon Breath: </h5>
                <p>
                uses 2 actions (1 charge 1 use)
                a cone of fire
                target: close blast 3
                hit determination section: Rank in Combat (Magic) + endurance modifier vs agility (+5 vs agi)
                Effect: lights things(flammable possessions for RP) on fire and does damage (1d6 + end modifier damage). 
                Special: this power does not take penalty to hitting a creature in the burst if the target is invisible or (the)hidden.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Enflame: </h5>
                <p>
                one action gives one charge; max 2(combat magical) charges
                expend x charges: next attack does an extra xd6 - 2x fire damage and ongoing x fire damage
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Plague: </h5>
                <p>
                combat magic, necromancy
                area burst 1 within 5 squares
                target each creature in burst
                intelligence vs, endurance
                hit: target takes 1d6+intelligence modifier damage at the start of it’s next turn.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Boiling Palm: </h5>
                <p>
                combat magic, fire, pyromancy
                uses 1 action
                melee touch
                target: one creature
                intelligence vs endurance or agility
                hit: target takes 1d6+intelligence modifier fire damage.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Blizzard: </h5>
                <p>
                combat magic, ice, Cryomancy
                uses 3 action
                area burst 2 within 10 squares
                targets each creature in burst
                intelligence vs endurance or intelligence
                hit: target takes 2d6+intelligence modifier bludgeoning ice damage.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Blood Walk: </h5>
                <p>
                healing magic, Ichormancy,
                uses 2 actions
                2 targets within 5 squares of each other and you
                intelligence vs endurance 
                hit: roll 1d6 that is how much hp switches between the targets.
                </p>
            </Media.Body>
            </Media> 
            <Media>
            <Media.Body>
                <h5>Collect mana: </h5>
                <p>
                knowledge magic
                uses one action
                get one (level) mana
                max mana is Int + all magical skills
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Redirect Spell: </h5>
                <p>
                knowledge magic
                spell within 5(int) squares, can only use one redirect on a spell unless the target has moved
                uses one mana (these use mana because they need to be able to happen on other spell casters turns.)
                Int + magical knowledge(using magical knowledge makes it easier to infer information about the spells you are trying to manipulate.)
                 vs. attack roll of spell
                hit: choose new targets for the spell, effect as normal, with the attack roll being the your roll from above
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Copy Spell: </h5>
                <p>
                knowledge magic
                spell within 5 squares, can only use one copy on a particular named spell per round
                uses one mana
                Int + magical Knowledge vs. attack roll of spell
                user of the spell can negate this roll if they desire
                hit: copy the spell. you may use the spell immediately or save it for later. If you save it for later, but you will need to spend the action cost. 
                Special: copies are not retained after an hour; copies not used are returned to the mana they started with(one each).
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Spit Poison: </h5>
                <p>
                Combat(Natural)
                One action to ready, one to use.
                Range: 10 squares
                Target: 1 creature
                Attack: Agility vs. Agility or Endurance
                Hit: 1d6 + Agility bonus poison damage.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Entombing Web: </h5>
                <p>
                Combat(Natural)
                Two actions to ready, one to use.
                Range: Melee
                Target: 1 creature
                Attack: Strength vs Strength or Agility
                Hit: Target takes damage equal to your Strength bonus and is immobilized. A save of 10 + your level ends the immobilization. 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Loosen Your Tongue: </h5>
                <p>
                Social(Natural)
                Out of Combat Ability
                Attack: Social vs. Endurance
                Hit: Target gives up some secret.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Spin Web: </h5>
                <p>
                Knowledge(Natural)
                Four actions
                Effect: Creates a large web to fill a feasible purpose.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Equipment </h3>
                <h4>Proficiency: </h4>
                <h5>
                You need a feat to be proficient in weapons/armors!!! Please refer to the item-shop for specifics on weapons and armor.
                </h5>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Shields: </h5>
                <p>
                Come in several styles, but two variations: Light and Heavy. A Heavy Shield adds its bonus to defense rolls to attacks targeting 
                Endurance or Strength. A Light Shield adds its bonus to defense rolls to attacks targeting Agility or Endurance. A light shield 
                leaves your hand free to have another one handed weapon or use a two-handed weapon, while a heavy shield does not.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Armors: </h5>
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
                <h5>Shields: </h5>
                <p>
                Shields come in several styles, but two variations: Light and Heavy. A Light Shield adds its bonus to defense rolls to attacks 
                targeting Agility or Endurance. A light shield leaves your hand free to have another one handed weapon or use a two-handed weapon, 
                while a heavy shield does not. A Heavy Shield adds its bonus to defense rolls to attacks targeting Endurance or Strength
                </p>
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
                <h5> Improvised Attack: </h5>
                <p>
                Damage 1d3; Type Bludgeoning; 1 handed Improvised hand weapons that can be used one or two handed, that are used two handed 
                grant the attacker a +1 bonus to the attack roll.
                </p>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
                <h5>Mounts and Rules for Mounted Combat: </h5>
                <p>
                A creature that can be used as a mount must be one size larger than the character attempting to use it. The mount must be either 
                willing to be mounted or have no other choice, such as a creature under the effect of a mind control spell or a machine. 

                You do not have much skill in using a mount for battle unless you have either (A) experience in doing so, or (B) you can come 
                up with a good and agreeable reason for why your character would have such experience. (example: “I grew up training to ride 
                beasts into battle, specifically my father’s Xivu.”) 

                While mounted, you use your mount’s move speed instead of yours. You can have your mount attack instead of you on your turn. 
                On its turn, the mount can attack. 
                If/when you are attacked, the attacker chooses whether to hit you or the mount. An attack that targets multiple creatures can 
                attack both.

                Also, a mount does not have set ability scores, But it has a set minimum-maximum for starting level, depending on the mount. 
                Certain types of mounts have a pool of abilities to choose from. Each mount can have 2 abilities. It is treated like a player 
                character in terms of leveling.
                </p>
            </Media.Body>
            </Media>

            <Media>
            <Media.Body>
                <h5>Some Mounts: </h5>
                <p>
                Examples of some beasts that are often used for mounts
                </p>
                <ol>
                    <li>
                        <p>Pack Lizard</p>
                    </li>
                    <li>
                        <p>Horse</p>
                    </li>
                    <li>
                        <p>Griffon</p>
                    </li>
                    <li>
                        <p>Hippogriff</p>
                    </li>
                    <li>
                        <p>Monstrous Spider (Various kinds)</p>
                    </li>
                    <li>
                        <p>Monstrous Insect (Various kinds)</p>
                    </li>
                    <li>
                        <p>Giant Lizard (Various kinds)</p>
                    </li>
                    <li>
                        <p>Xivu Patriarch</p>
                    </li>
                    <li>
                        <p>Wyrm (various kinds)</p>
                    </li>
                    <li>
                        <p>Krula: Large, solitary insect. Quick, but with a thin carapace. Ground-based.</p>
                    </li>
                </ol>
            </Media.Body>
            </Media>

            </Container>
            </div>
        );
    }
}