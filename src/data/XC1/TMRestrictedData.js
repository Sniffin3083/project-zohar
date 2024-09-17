import onePepper from "../../images/XC1/timeAttackPeppers/1_pepper.webp"
import twoPepper from "../../images/XC1/timeAttackPeppers/2_pepper.webp"
import threePepper from "../../images/XC1/timeAttackPeppers/3_pepper.webp"
import fourPepper from "../../images/XC1/timeAttackPeppers/4_pepper.webp"

export default [
    {
        name: "Humble Beginnings",
        prerequisites: "None",
        waves: 3,
        difficulty: <img src={onePepper} alt="1 Pepper" />,
        formation: "Reyn, Shulk",
        uid: "tmRestricted_humbleBeginnings"
    },
    {
        name: "Fair Game",
        prerequisites: "None",
        waves: 3,
        difficulty: <img src={onePepper} alt="1 Pepper" />,
        formation: "Sharla, Shulk, Reyn",
        uid: "tmRestricted_fairGame"
    },
    {
        name: "The Walls Have Eyes",
        prerequisites: "After completing the events of the Ether Mine",
        waves: 3,
        difficulty: <img src={onePepper} alt="1 Pepper" />,
        formation: "Dunban, Reyn, Sharla",
        uid: "tmRestricted_theWallsHaveEyes"
    },
    {
        name: "Shaggy-Dog Story",
        prerequisites: "Sometime after reaching Frontier Village and before reaching Eryth Sea",
        waves: 2,
        difficulty: <img src={twoPepper} alt="2 Peppers" />,
        formation: "Riki, Sharla, Shulk",
        uid: "tmRestricted_shaggyDogStory"
    },
    {
        name: "Oh, Brother!",
        prerequisites: "After completing the events at the High Entia Tomb",
        waves: 3,
        difficulty: <img src={twoPepper} alt="2 Peppers" />,
        formation: "Melia, Dunban, Riki",
        uid: "tmRestricted_ohBrother"
    },
    {
        name: "Third Wheel",
        prerequisites: "After completing Fiora's Treatment",
        waves: 3,
        difficulty: <img src={twoPepper} alt="2 Peppers" />,
        formation: "Fiora, Melia, Dunban",
        uid: "tmRestricted_thirdWheel"
    },
    {
        name: "Sparks Fly, You Die",
        prerequisites: "After reaching the Central Factory",
        waves: 2,
        difficulty: <img src={threePepper} alt="3 Peppers" />,
        formation: "Shulk, Reyn, Fiora",
        uid: "tmRestricted_sparksFlyYouDie"
    },
    {
        name: "Lost in a Dark Dream",
        prerequisites: "After clearing the main story of Future Connected",
        waves: 1,
        difficulty: <img src={threePepper} alt="3 Peppers" />,
        formation: "Melia, Riki, Fiora",
        uid: "tmRestricted_lostInADarkDream"
    },
    {
        name: "He of the Metal Face",
        prerequisites: "After reaching Bionis' Interior for the second time",
        waves: 2,
        difficulty: <img src={threePepper} alt="3 Peppers" />,
        formation: "Dunban, Sharla, Riki",
        uid: "tmRestricted_heOfTheMetalFace"
    },
    {
        name: "Uniquely Disadvantaged",
        prerequisites: "After reaching Prison Island for the second time",
        waves: 3,
        difficulty: <img src={fourPepper} alt="4 Pepper" />,
        formation: "Fiora, Melia, Sharla",
        uid: "tmRestricted_uniquelyDisadvantaged"
    },
]
/*
{
    name: "",
    prerequisites: "",
    waves: ,
    difficulty: <img src={} alt="" />,
    formation: "",
    uid: "tmRestricted_"
},
*/