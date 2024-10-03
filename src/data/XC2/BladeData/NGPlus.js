import darkElement from "../../../images/XC2/elements/element-dark.webp"
import earthElement from "../../../images/XC2/elements/element-earth.webp"
import electricElement from "../../../images/XC2/elements/element-electric.webp"
import fireElement from "../../../images/XC2/elements/element-fire.webp"
import windElement from "../../../images/XC2/elements/element-wind.webp"

export default [
    {
        blade: "Akhos",
        role: "Healer",
        stat: "Ether 15%",
        weapon: "Calamity Scythe",
        element: <img src={electricElement} alt="Electric" />,
        acquisition: "Random",
        uid: "ngpb_akhos"
    },
    {
        blade: "Patroka",
        role: "Attacker",
        stat: "Strength 15%",
        weapon: "Cobra Bardiche",
        element: <img src={earthElement} alt="Earth" />,
        acquisition: "Random",
        uid: "ngpb_patroka"
    },
    {
        blade: "Mikhail",
        role: "Tank",
        stat: "Agility 15%",
        weapon: "Infinity Fans",
        element: <img src={darkElement} alt="Dark" />,
        acquisition: "Talk at Megaflote Base in Land of Morytha after he falls out of battle in Chapter 9",
        uid: "ngpb_mikhail"
    },
    {
        blade: "Obrona",
        role: "Attacker",
        stat: "Agility 20%",
        weapon: "Brilliant Twinblades",
        element: <img src={electricElement} alt="Electric" />,
        acquisition: "Random",
        uid: "ngpb_obrona"
    },
    {
        blade: "Sever",
        role: "Tank",
        stat: "Strength 15%",
        weapon: "Sword Tonfa",
        element: <img src={windElement} alt="Wind" />,
        acquisition: "Random",
        uid: "ngpb_sever"
    },
    {
        blade: "Perdido",
        role: "Attacker",
        stat: "Strength 10%",
        weapon: "Decimation Cannon",
        element: <img src={fireElement} alt="Fire" />,
        acquisition: "Random",
        uid: "ngpb_perdido"
    },
    {
        blade: "Cressidus",
        role: "Tank",
        stat: "Max HP 20%",
        weapon: "Rockrending Gauntlets",
        element: <img src={earthElement} alt="Earth" />,
        acquisition: "Random",
        uid: "ngpb_cressidus"
    },
]