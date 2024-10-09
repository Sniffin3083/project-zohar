import attackerGem from "../../images/XC3/gems/attacker_gem.webp"
import defenderGem from "../../images/XC3/gems/defender_gem.webp"
import healerGem from "../../images/XC3/gems/healer_gem.webp"
import specialtyGem from "../../images/XC3/gems/specialty_gem.webp"

export default [
    {
        name: "Tailwind",
        type: <ul>
            <li>
                <img src={defenderGem} alt="Defender" />
            </li>
            <li>
                Defender
            </li>
        </ul>,
        range: "10-35",
        effect: "Increases Agility",
        uid: "gem_tailwind"
    },
    {
        name: "Steel Protection",
        type: <ul>
            <li>
                <img src={defenderGem} alt="Defender" />
            </li>
            <li>
              Defender  
            </li>
        </ul>,
        range: "5-30",
        effect: "Increases Block Rate by percentage points",
        uid: "gem_steelProtection"
    },
    {
        name: "Ultimate Protection",
        type: <ul>
            <li>
                <img src={defenderGem} alt="Defender" />
            </li>
            <li>
               Defender 
            </li>
        </ul>,
        range: "80%-280%",
        effect: "Deals Attack damage when you take damage",
        uid: "gem_ultimateProtection"
    },
    {
        name: "Brimming Spirit",
        type: <ul>
            <li>
                <img src={defenderGem} alt="Defender" />
            </li>
            <li>
                Defender
            </li>
        </ul>,
        range: "20%-45%",
        effect: "Boosts aggro generated when using Art",
        uid: "gem_brimmingSpirit"
    },
    {
        name: "Perilous Presence",
        type: <ul>
            <li>
                <img src={defenderGem} alt="Defender" />
            </li>
            <li>
                Defender
            </li>
        </ul>,
        range: "500-3000",
        effect: "Starts each battle with aggro",
        uid: "gem_perilousPresence"
    },
    {
        name: "Steelcleaver",
        type: <ul>
            <li>
                <img src={attackerGem} alt="Attacker" />
            </li>
            <li>
                Attacker
            </li>
        </ul>,
        range: "20-70",
        effect: "Increases Attack",
        uid: "gem_steelcleaver"
    },
    {
        name: "Accurate Grace",
        type: <ul>
            <li>
                <img src={attackerGem} alt="Attacker" />
            </li>
            <li>
                Attacker
            </li>
        </ul>,
        range: "20-45",
        effect: "Increases Dexterity",
        uid: "gem_accurateGrace"
    },
    {
        name: "Analyze Weakness",
        type: <ul>
            <li>
                <img src={attackerGem} alt="Attacker" />
            </li>
            <li>
                Attacker
            </li>
        </ul>,
        range: "20-70",
        effect: "Increases critical hit damage bonus by percentage points",
        uid: "gem_analyzeWeakness"
    },
    {
        name: "Swelling Scourge",
        type: <ul>
            <li>
                <img src={attackerGem} alt="Attacker" />
            </li>
            <li>
                Attacker
            </li>
        </ul>,
        range: "25%-50%",
        effect: "Boosts power of debuffs applied to enemies",
        uid: "gem_swellingScourge"
    },
    {
        name: "Refined Incantation",
        type: <ul>
            <li>
                <img src={attackerGem} alt="Attacker" />
            </li>
            <li>
                Attacker
            </li>
        </ul>,
        range: "25%-50%",
        effect: "Extends duration timers of debuffs applied to enemies",
        uid: "gem_refinedIncantation"
    },
    {
        name: "Lifebearer",
        type: <ul>
            <li>
                <img src={healerGem} alt="Healer" />
            </li>
            <li>
                Healer
            </li>
        </ul>,
        range: "20%-45%",
        effect: "Increases Healing",
        uid: "gem_lifebearer"
    },
    {
        name: "Soothing Breath",
        type: <ul>
            <li>
                <img src={healerGem} alt="Healer" />
            </li>
            <li>
                Healer
            </li>
        </ul>,
        range: "20%-45%",
        effect: "When helping an incapacitated ally, revives them with more HP; also raises Healing",
        uid: "gem_soothingBreath"
    },
    {
        name: "Lifesaving Expertise",
        type: <ul>
            <li>
                <img src={healerGem} alt="Healer" />
            </li>
            <li>
                Healer
            </li>
        </ul>,
        range: "20%-45%",
        effect: "Boosts speed of ally revival and raises Healing",
        uid: "gem_lifesavingExpertise"
    },
    {
        name: "Swelling Blessing",
        type: <ul>
            <li>
                <img src={healerGem} alt="Healer" />
            </li>
            <li>
                Healer
            </li>
        </ul>,
        range: "25%-50%",
        effect: "Boosts power of buff effects issued by self",
        uid: "gem_swellingBlessing"
    },
    {
        name: "Refined Blessing",
        type: <ul>
            <li>
                <img src={healerGem} alt="Healer" />
            </li>
            <li>
                Healer
            </li>
        </ul>,
        range: "25%-50%",
        effect: "Extends duration of buff effects issued by self",
        uid: "gem_refinedBlessing"
    },
    {
        name: "Ironclad",
        type: <ul>
            <li>
                <img src={specialtyGem} alt="Specialty" />
            </li>
            <li>
                Specialty
            </li>
        </ul>,
        range: "100-1500",
        effect: "Increases maximum HP",
        uid: "gem_ironclad"
    },
    {
        name: "Steady Striker",
        type: <ul>
            <li>
                <img src={specialtyGem} alt="Specialty" />
            </li>
            <li>
                Specialty
            </li>
        </ul>,
        range: "15%-40%",
        effect: "Shortens auto-attack interval",
        uid: "gem_steadyStriker"
    },
    {
        name: "Doublestrike",
        type: <ul>
            <li>
                <img src={specialtyGem} alt="Specialty" />
            </li>
            <li>
                Specialty
            </li>
        </ul>,
        range: "20%-40% / 15%-25%",
        effect: "Adds chance to strike twice per auto-attack",
        uid: "gem_doublestrike"
    },
    {
        name: "Empowered Combo",
        type: <ul>
            <li>
                <img src={specialtyGem} alt="Specialty" />
            </li>
            <li>
                Specialty
            </li>
        </ul>,
        range: "25%-75%",
        effect: "When canceling, boosts damage dealt",
        uid: "gem_empoweredCombo"
    },
    {
        name: "Disperse Bloodlust",
        type: <ul>
            <li>
                <img src={specialtyGem} alt="Specialty" />
            </li>
            <li>
               Specialty 
            </li>
        </ul>,
        range: "20%-45%",
        effect: "Reduces aggro generated when using Art",
        uid: "gem_disperseBloodlust"
    },
]