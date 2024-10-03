import darkElement from "../../../images/XC2/elements/element-dark.webp"
import fireElement from "../../../images/XC2/elements/element-fire.webp"
import lightElement from "../../../images/XC2/elements/element-light.webp"
import windElement from "../../../images/XC2/elements/element-wind.webp"

export default [
    {
        blade: "Poppibuster",
        role: "Tank",
        stat: "Agility 15%",
        weapon: "Shield Hammer",
        element: <img src={lightElement} alt="Element" />,
        acquisition: "Shiny New Power Quest",
        uid: "dlcb_poppibuster"
    },
    {
        blade: "Shulk",
        role: "Attacker",
        stat: "Ether 20%",
        weapon: "Monado",
        element: <img src={lightElement} alt="Light" />,
        acquisition: "Challenge Battle Mode",
        uid: "dlcb_shulk"
    },
    {
        blade: "Fiora",
        role: "Healer",
        stat: "Strength 15%",
        weapon: "Knives",
        element: <img src={windElement} alt="Wind" />,
        acquisition: "Challenge Battle Mode",
        uid: "dlcb_fiora"
    },
    {
        blade: "Crossette",
        role: "Healer",
        stat: "Ether 20%",
        weapon: "Bitball",
        element: <img src={fireElement} alt="Fire" />,
        acquisition: "Ebullient Core Crystal",
        uid: "dlcb_crossette"
    },
    {
        blade: "Corvin",
        role: "Tank",
        stat: "Agility 20%",
        weapon: "Uchigatana",
        element: <img src={lightElement} alt="Light" />,
        acquisition: "Divine Core Crystal",
        uid: "dlcb_corvin"
    },
    {
        blade: "Elma",
        role: "Attacker",
        stat: "Ether 20%",
        weapon: "Dual Swords",
        element: <img src={darkElement} alt="Dark" />,
        acquisition: "Challenge Battle Mode",
        uid: "dlcb_elma"
    },
]