import darkElement from "../../images/XC2/elements/element-dark.webp"
import earthElement from "../../images/XC2/elements/element-earth.webp"
import electricElement from "../../images/XC2/elements/element-electric.webp"
import fireElement from "../../images/XC2/elements/element-fire.webp"
import iceElement from "../../images/XC2/elements/element-ice.webp"
import lightElement from "../../images/XC2/elements/element-light.webp"
import waterElement from "../../images/XC2/elements/element-water.webp"
import windElement from "../../images/XC2/elements/element-wind.webp"

export default [
    {
        blade: "Godfrey",
        role: "Tank",
        stat: "Max HP 15%",
        weapon: "Shield Hammer",
        element: <img src={iceElement} alt="Ice" />,
        acquisition: "Random",
        uid: "sb_godfrey"
    },
    {
        blade: "Wulfric",
        role: "Attacker",
        stat: "Strength 15%",
        weapon: "Megalance",
        element: <img src={earthElement} alt="Earth" />,
        acquisition: "Beastly Core Crystal",
        uid: "sb_wulfric"
    },
    {
        blade: "Perceval",
        role: "Tank",
        stat: "Agility 10%",
        weapon: "Chroma Katana",
        element: <img src={darkElement} alt="Dark" />,
        acquisition: "Random",
        uid: "sb_perceval"
    },
    {
        blade: "Vale",
        role: "Attacker",
        stat: "Ether 15%",
        weapon: "Megalance",
        element: <img src={darkElement} alt="Dark" />,
        acquisition: "Random",
        uid: "sb_vale"
    },
    {
        blade: "Agate",
        role: "Attacker",
        stat: "Dexterity 10%",
        weapon: "Greataxe",
        element: <img src={earthElement} alt="Earth" />,
        acquisition: "Random",
        uid: "sb_agate"
    },
    {
        blade: "Gorg",
        role: "Attacker",
        stat: "Max HP 15%",
        weapon: "Greataxe",
        element: <img src={waterElement} alt="Water" />,
        acquisition: "Random",
        uid: "sb_gorg"
    },
    {
        blade: "Boreas",
        role: "Healer",
        stat: "Max HP 15%",
        weapon: "Bitball",
        element: <img src={windElement} alt="Wind" />,
        acquisition: "Random",
        uid: "sb_boreas"
    },
    {
        blade: "Dagas",
        role: "Attacker",
        stat: "Strength 5% then 10% after Blade quest is complete",
        weapon: "Greataxe",
        element: <img src={fireElement} alt="Fire" />,
        acquisition: "Random",
        uid: "sb_dagas"
    },
    {
        blade: "Kasandra",
        role: "Tank",
        stat: "Max HP 15%",
        weapon: "Shield Hammer",
        element: <img src={darkElement} alt="Dark" />,
        acquisition: "Lucky Core Crystal",
        uid: "sb_kasandra"
    },
    {
        blade: "Praxis",
        role: "Attacker",
        stat: "Dexterity 10%",
        weapon: "Megalance",
        element: <img src={waterElement} alt="Water" />,
        acquisition: "Crystal Clear Quest",
        uid: "sb_praxis"
    },
    {
        blade: "Theory",
        role: "Tank",
        stat: "Agility 15%",
        weapon: "Chroma Katana",
        element: <img src={iceElement} alt="Ice" />,
        acquisition: "Blade-Sharp Memory Quest",
        uid: "sb_theory"
    },
    {
        blade: "Perun",
        role: "Attacker",
        stat: "Dexterity 10%",
        weapon: "Megalance",
        element: <img src={iceElement} alt="Ice" />,
        acquisition: "Random",
        uid: "sb_perun"
    },
    {
        blade: "Kora",
        role: "Kora",
        stat: "Ether 10%",
        weapon: "Knuckle Claws",
        element: <img src={electricElement} alt="Electric" />,
        acquisition: "Random",
        uid: "sb_kora"
    },
    {
        blade: "Azami",
        role: "Attacker",
        stat: "Ether 15%",
        weapon: "Ether Cannon",
        element: <img src={darkElement} alt="Dark" />,
        acquisition: "Random",
        uid: "sb_azami"
    },
    {
        blade: "Ursula",
        role: "Healer",
        stat: "Agility 10%",
        weapon: "Knuckle Claws",
        element: <img src={iceElement} alt="Ice" />,
        acquisition: "Random",
        uid: "sb_ursula"
    },
    {
        blade: "Newt",
        role: "Tank",
        stat: "Max HP 20%",
        weapon: "Chroma Katana",
        element: <img src={fireElement} alt="Fire" />,
        acquisition: "Random",
        uid: "sb_newt"
    },
    {
        blade: "Nim",
        role: "Healer",
        stat: "Dexterity 10%",
        weapon: "Knuckle Claws",
        element: <img src={earthElement} alt="Earth" />,
        acquisition: "Random",
        uid: "sb_nim"
    },
    {
        blade: "Sheba",
        role: "Attacker",
        stat: "Ether 15%",
        weapon: "Ether Cannon",
        element: <img src={waterElement} alt="Water" />,
        acquisition: "Inherited Core Crystal",
        uid: "sb_sheba"
    },
    {
        blade: "Vess",
        role: "Healer",
        stat: "Max HP 10%",
        weapon: "Bitball",
        element: <img src={electricElement} alt="Electric" />,
        acquisition: "Tranquility Quest",
        uid: "sb_vess"
    },
    {
        blade: "Adenine",
        role: "Healer",
        stat: "Dexterity 15%",
        weapon: "Knuckle Claws",
        element: <img src={windElement} alt="Wind" />,
        acquisition: "Random",
        uid: "sb_adenine"
    },
    {
        blade: "Electra",
        role: "Tank",
        stat: "Max HP 15%",
        weapon: "Shield Hammer",
        element: <img src={electricElement} alt="Electric" />,
        acquisition: "Random",
        uid: "sb_electra"
    },
    {
        blade: "Zenobia",
        role: "Attacker",
        stat: "Strength 15%",
        weapon: "Greataxe",
        element: <img src={windElement} alt="Wind" />,
        acquisition: "Random",
        uid: "sb_zenobia"
    },
    {
        blade: "Finch",
        role: "Tank",
        stat: "Agility 15%",
        weapon: "Shield Hammer",
        element: <img src={windElement} alt="Wind" />,
        acquisition: "Random",
        uid: "sb_finch"
    },
    {
        blade: "Floren",
        role: "Healer",
        stat: "Ether 10%",
        weapon: "Bitball",
        element: <img src={earthElement} alt="Earth" />,
        acquisition: "Random",
        uid: "sb_floren"
    },
    {
        blade: "KOS-MOS",
        role: "Attacker",
        stat: "Ether 20%",
        weapon: "Ether Cannon",
        element: <img src={lightElement} alt="Light" />,
        acquisition: "Random",
        uid: "sb_kosmos"
    },
    {
        blade: "Herald",
        role: "Attacker",
        stat: "Strength 15%",
        weapon: "Ether Cannon",
        element: <img src={electricElement} alt="Electric" />,
        acquisition: "Sealed Core Crystal",
        uid: "sb_herald"
    },
    {
        blade: "Dahlia",
        role: "Healer",
        stat: "Dexterity 10%",
        weapon: "Bitball",
        element: <img src={iceElement} alt="Ice" />,
        acquisition: "Random",
        uid: "sb_dahlia"
    },
    
    {
        blade: "T-elos",
        role: "Attacker",
        stat: "Strength 15%",
        weapon: "Greatax",
        element: <img src={darkElement} alt="Dark" />,
        acquisition: "Random | version 1.4.0 is required",
        uid: "sb_telos"
    },
]