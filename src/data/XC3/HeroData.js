import attacker from "../../images/XC3/roleIcons/attacker_role.webp"
import healer from "../../images/XC3/roleIcons/healer_role.webp"
import defender from "../../images/XC3/roleIcons/defender_role.webp"

import keves from "../../images/XC3/nationIcons/keves_icon.webp"
import agnus from "../../images/XC3/nationIcons/agnus_icon.webp"
import city from "../../images/XC3/nationIcons/city_icon.webp"
import mobius from "../../images/XC3/nationIcons/mobius_icon.webp"
import nopon from "../../images/XC3/nationIcons/nopon_icon.webp"

export default [
    {
        name: "Ethel",
        class: "Flash Fencer",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={keves} alt="Keves" />,
        quest: "No Want of Courage",
        uid: "hero_ethel"
    },
    {
        name: "Valdi",
        class: "War Medic",
        role: <img src={healer} alt="Healer" />,
        nation: <img src={keves} alt="Keves" />,
        quest: "The Kind Right Hand",
        uid: "hero_valdi"
    },
    {
        name: "Zeon",
        class: "Guardian Commander",
        role: <img src={defender} alt="Defender" />,
        nation: <img src={keves} alt="Keves" />,
        quest: "Where The Heart Is",
        uid: "hero_zeon"
    },
    {
        name: "Teach",
        class: "Thaumaturge",
        role: <img src={healer} alt="Healer" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Going Beyond Power",
        uid: "hero_teach"
    },
    {
        name: "Riku & Manana",
        class: "Yumsmith",
        role: <img src={attacker} alt="Attacker" />,
        nation: <ul>
                    <li>   
                        <img src={keves} alt="Keves" />
                    </li>
                    <li>
                        <img src={agnus} alt="Agnus" />
                    </li>
                </ul>,
        quest: "A Nopon's Counsel",
        uid: "hero_rikuAndManana"
    },
    {
        name: "Gray",
        class: "Full Metal Jaguar",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={city} alt="City" />,
        quest: "A Gray Matter",
        uid: "hero_gray"
    },
    {
        name: "Isurd",
        class: "Strategos",
        role: <img src={healer} alt="Healer" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Unwavering Resolve",
        uid: "hero_isurd"
    },
    {
        name: "Juniper",
        class: "Stalker",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Natural Selection",
        uid: "hero_juniper"
    },
    {
        name: "Ashera",
        class: "Lone Exile",
        role: <img src={defender} alt="Defender" />,
        nation: <img src={keves} alt="Keves" />,
        quest: "The Wrath of Ashera",
        uid: "hero_ashera"
    },
    {
        name: "Alexandria",
        class: "Incursor",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Her Reasons",
        uid: "hero_alexandria"
    },
    {
        name: "Monica",
        class: "Lost Vanguard",
        role: <img src={defender} alt="Defender" />,
        nation: <img src={city} alt="City" />,
        quest: "Vandham's Heir",
        uid: "hero_monica"
    },
    {
        name: "Fiona",
        class: "Signifer",
        role: <img src={healer} alt="Healer" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Transparent Dreams",
        uid: "hero_fiona"
    },
    {
        name: "Triton",
        class: "Soulhacker",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={mobius} alt="Mobius" />,
        quest: "Doing It My Way",
        uid: "hero_triton"
    },
    {
        name: "Ghondor",
        class: "Martial Artist",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={city} alt="City" />,
        quest: "Chapter 6",
        uid: "hero_ghondor"
    },
    {
        name: "Miyabi",
        class: "Troubadour",
        role: <img src={healer} alt="Healer" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Side Story: Mio",
        uid: "hero_miyabi"
    },
    {
        name: "Cammuravi",
        class: "Seraph",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "A Twist of Fate",
        uid: "hero_cammuravi"
    },
    {
        name: "Segiri",
        class: "Machine Assassin",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={mobius} alt="Mobius" />,
        quest: "Inhumanity",
        uid: "hero_segiri"
    },
    {
        name: "Nia",
        class: "Lifesage",
        role: <img src={healer} alt="Healer" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Go to the Hall of the Serene in the Cloudkeep after completing the main story",
        uid: "hero_nia"
    },
    {
        name: "Melia",
        class: "Royal Summoner",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={keves} alt="Keves" />,
        quest: "Go to the Main Castle Gate of Keves Castle after completing the main story",
        uid: "hero_melia"
    },
    {
        name: "Ino (DLC)",
        class: "Noponic Champion",
        role: <img src={defender} alt="Defender" />,
        nation: <img src={nopon} alt="Nopon Caravans" />,
        quest: "Champion of the Nopon",
        uid: "hero_ino"
    },
    {
        name: "Masha (DLC)",
        class: "Lapidarist",
        role: <img src={healer} alt="Healer" />,
        nation: <img src={city} alt="City" />,
        quest: "Lapidarist Extraordinaire",
        uid: "hero_masha"
    },
    {
        name: "Shulk (DLC)",
        class: "Grand Marshal",
        role: <img src={defender} alt="Defender" />,
        nation: <img src={keves} alt="Keves" />,
        quest: "Clear Challenge Battle The Two Saviors",
        uid: "hero_shulk"
    },
    {
        name: "Rex (DLC)",
        class: "Master Driver",
        role: <img src={attacker} alt="Attacker" />,
        nation: <img src={agnus} alt="Agnus" />,
        quest: "Clear Challenge Battle The Two Saviors",
        uid: "hero_rex"
    },
]