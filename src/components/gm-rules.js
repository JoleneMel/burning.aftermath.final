//gm centered rule book 
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Media from 'react-bootstrap/Media';

export default class GMRules extends React.Component {
    render () {
        return (
            <div>
            
            <Container className="rules">
            <center><h1>Burning Aftermath</h1></center>
            <h3>Creatures and rules for creating creatures and other NPCs</h3>
            <Media>
            <Media.Body>
                <h3>Demons:</h3>
                <p>
                Demons generally do not personally visit Ju’krikta, but instead manipulate the minds of mortals and create Cursed, their half-demon, 
                half mortal agents of destruction and anarchy.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Angels:</h3>
                <p> 
                Essentially the policing forces of the benevolent deities, Angels passively observe until commanded to do otherwise. They are often 
                sent to live among mortals to find someone worthy of becoming a Blessed, a half-mortal, half-angel creature.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Fallen Angels: </h5>
                <p>
                Once they were Blessed, but they started craving power, falling to their mortal greed and weaknesses. Becoming corrupt, their powers changed 
                to destruction, and their wings changed from white to black.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Cursed - Half-mortal, half-demon: </h5>
                <p>
                All cruelty. Most of them have withdrawn from the world, to serve their masters in the Underworld. Some remain on Ju’krikta to continue to terrorize 
                their prey. A Cursed Dragon is called a Zi-ken.
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Dragons: </h3>
                <p>
                All Dragons can choose a humanoid guise. Also, while Dragons can reproduce sexually, they can also create more of themselves with non-Dragon mortals through 
                a process that they call the “Dragon’s Blessing,” turning the mortal into a half-Dragon, slowly becoming fully Draconic. Dragons come in several types, 
                subdivisions of their countless species:
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Crusher: </h5>
                <p>
                Crushers are gigantic, heavily armored and physically powerful. They have shorter, stronger necks than other Dragons, their tails often have bone clubs or 
                spikes on them, and their bodies are covered in hardened scales. Many Crushers have armor forged for them to make them appear more menacing, or just because 
                they feel that they need it. Crushers are one of the weakest forms of Dragons in terms of Magical skill, but in physical strength, they are unmatched. 
                (20+ Str, 15+end)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Darter: </h5>
                <p>
                Darters usually have long, slim, serpentine bodies. Most do not have wings, but have fins, small, birdlike legs, or are limbless. Those that do have wings 
                tend to have feathers on them. Darters are the fastest breed of Dragons, and are adept at using spells that represent speed, such as lightning-based Magic 
                and the like. Darters have a tendency to choose humanoid forms that appear as children, rather than teens or adults. (20+ agi, 15+ int) 
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Hunter: </h5>
                <p>
                No front limbs except for wings, most have shorter necks, and this subspecies is more likely to naturally have two or more heads. While in their true forms, 
                most Hunter types prefer to immobilize their prey with a Magically enhanced breath attack before swooping down on them and tearing them apart. In their 
                humanoid forms, they prefer the usage of ranged weapons or spells as opposed to melee combat. (17+ Agi, 17+ Int or Cha)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Sorcerer: </h5>
                <p>
                Sorcerers have a long, serpentine neck on a body that is carried with a feline grace. Their tails also are long and snake-like. Sorcerers 
                are adept at most forms of Magic, and take a sadistic pleasure in swarming foes with “armies” of different Magic sources while watching their 
                prey get nearly destroyed before devouring them. Sorcerers, in general, tend not to be extremely strong in comparison to other Dragons, but 
                with enough alteration via Magic, some can surpass even Crushers. Sorcerers are more likely to band together and pool their resources than 
                the other types of Dragons, which tend to be more inclined to self-reliance. (20+ int, 15+ Cha)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h3>Wild Beasts: </h3>
                <h5>Raptor (xp 300)(lv3)</h5>
                <p>
                medium natural
                hp 26(End + 4 + 3d6)
                Str16(d20+2), Int 3(d6, reroll all 6) Agi18(d20+4), End16(d20+2), Cha16(d20+2)(with standard reroll)
                Combat Natural(+4), Survival Natural(+4), natural Social(+1)
                AD 1 against slashing, bludgeoning, and piercing
                speed 8, see also raptor leap and skirmish
                -^ Rake (one action, at-will) combat natural, str
                +7 vs endurance: 1d6+3 slashing damage
                -^ Slash(one action, at-will) combat natural, dex
                +7 vs agility: 1d6+5 slashing damage
                -- raptor leap (one action) Survival
                jump 4(agi) squares: provokes opportunity attacks
                -- skirmish as my ability
                move one square without provoking opportunity attacks
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h4>Variations: </h4>
                <h5>Titan Raptor:</h5>
                <p>
                +2 str, +5(+1d6 + 2)hp, size: large (xp +150)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Ironscales Raptor: </h5>
                <p>
                +2 end, +5(+1d6 + 2)hp, +4 AD (xp +150)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Leaping raptor: </h5>
                <p>
                +2 agi, +5(+1d6 + 2)hp, all movement has skirmish’s effect for entire movement (xp +150)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Roaring raptor: </h5>
                <p>
                +2 cha, +5(+1d6 + 2)hp, extra power(once per encounter) +5(Cha + Social Natural) vs cha: target loses 2 actions on it’s next turn 
                (xp +150)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h4>Tunneling Wyrm </h4>
                <h5>(XP 134) (Lv1)</h5>
                <p>
                Medium Draconic
                HP: (to be decided)
                STR: 15, AGI: 15, INT: 2, END: 15, CHA: 5 

                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Young Sonic Lurchwyrm: </h5>
                <p>
                (XP 499?)(Lv5)
                medium draconic wyrm
                hp 41(End + 10 + 5d6)
                Str19(d20+5) Int 5(d20, reroll all higher than 9), Agi 16(d20+2), End 16(d20+2), Cha12(d20-2) (with standard reroll)
                combat natural(+3), natural survival (+10), magical survival (+3), magical healing (+1)
                AD 3(magical Survival) vs all
                Speed 2
                -^ bite (2 actions, at-will) combat natural, str
                +8 vs Agi: 1d20 + 4 bludgeoning and piercing damage
                -^ Claw (1 action, at-will) combat natural, str
                +8 vs Agi: 1d6 + 4 slashing damage)
                Sonic roar (1 action, 4 actions recharge POA) thunder, cha, combat magical
                all creatures within three squares
                +2 vs Cha: knock prone and do 1d6+1 damage
                -- lurch(1 action, at will)
                speed +X (max 5)  +x to attack rolls against the wyrm
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h4>Variations: </h4>
                <h5>Adult Sonic Lurchwyrm:</h5>
                <p>
                +3Cha, +1Str, +1End +3(1d6)hp, +2 magical survival, +6 survival natural, +1AD vs weapons, +3AD vs Thunder (xp +300)
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h5>Blitz Spider(: </h5>
                <p>
                (xp100)
                medium natural
                Hp17(End + 2 + 1d6)
                Str12(d20-1), Int 4(d6+1, no reroll) Agi14(d20), End12(d20-1), Cha11(d20-3)(with standard reroll)
                combat natural +2, Survival natural +2, Survival magical +1, healing natural +2
                -) Web (one action charge POA, one action use) dex, natural healing or combat
                range 3;+4(dex + natural combat) vs agi: creature cannot move, save 12(combat natural +10)
                or:
                heal self 1d6 + 2(healing natural)
                -^ Bite (one action) combat natural, dex, poison, piercing
                +4 vs 1d6 piercing damage and 3 ongoing poison damage, save 12(combat natural +10)
                --scuttle this creature can walk 1 square as a free action once on it’s turn
                </p>
            </Media.Body>
            </Media>
            <Media>
            <Media.Body>
                <h4>variations: </h4>
                <h5>Giant Blitz spider:</h5>
                <p>
                +3(1d6)hp, +2dex, +1 combat and healing natural, scuttle is a shift (xp +100)
                Pack lizard (xp 193)
                Hp 20(end + 2d6)
                Str14(1d20), Int14(1d20), Agi12(1d20-1), End14(1d20), Cha14(1d20)
                combat natural +2, 
                -^ bite (one action) +4 vs combat natural: 2d6 piercing damage

                </p>
            </Media.Body>
            </Media>
            </Container>
            </div>
        );
    }
}