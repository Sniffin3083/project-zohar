import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import ErrorPage from './error-page';

import XCOneHome from './routes/XC1/Home'
import XCOneSideQuests from './routes/XC1/Quests/Side';
import XCOneStoryQuests from './routes/XC1/Quests/Story';
import XCOneUMonster from './routes/XC1/UMonster';
import XCOneColony6Immigrants from './routes/XC1/ColonySix/Immigrants';
import XCOneColony6Reconstruction from './routes/XC1/ColonySix/Reconstruction';
import XCOneCollectopedia from './routes/XC1/Collectopedia';
import XCOneTimeAttackFree from './routes/XC1/TimeAttack/Free';
import XCOneTimeAttackRestricted from './routes/XC1/TimeAttack/Restricted';
import XCOneAchievements from './routes/XC1/Achievements';
import XCOneHeart from './routes/XC1/Heart';

import XCTwoHome from './routes/XC2/Home.jsx';
import XCTwoStoryQuests from './routes/XC2/Quests/Story';
import XCTwoSideQuests from './routes/XC2/Quests/Side';
import XCTwoBladeQuests from './routes/XC2/Quests/Blade';
import XCTwoDLCQuests from './routes/XC2/Quests/DLC';
import XCTwoSBlades from './routes/XC2/Blades/Standard';
import XCTwoDLCBlades from './routes/XC2/Blades/DLC';
import XCTwoNGPlusBlades from './routes/XC2/Blades/NGPlus';
import XCTwoDeeds from './routes/XC2/Deeds';
import XCTwoFoorara from './routes/XC2/Foorara';
import XCTwoHTH from './routes/XC2/Heart';
import XCTwoMercM from './routes/XC2/MercM';
import XCTwoPoppiM from './routes/XC2/PoppiM';
import XCTwoPouchE from './routes/XC2/PouchE';
import XCTwoUMonster from './routes/XC2/UMonster';
import XCTwoChallenge from './routes/XC2/Challenge';

import XCThreeHome from './routes/XC3/Home';
import XCThreeChallenge from './routes/XC3/Challenge';
import XCThreeClassNoah from './routes/XC3/Class/Noah';
import XCThreeClassMio from './routes/XC3/Class/Mio';
import XCThreeClassEunie from './routes/XC3/Class/Eunie';
import XCThreeClassTaion from './routes/XC3/Class/Taion';
import XCThreeClassLanz from './routes/XC3/Class/Lanz';
import XCThreeClassSena from './routes/XC3/Class/Sena';
import XCThreeGems from './routes/XC3/Gems';
import XCThreeHero from './routes/XC3/Hero';
import XCThreeQuestDLC from './routes/XC3/Quest/DLC';
import XCThreeQuestHero from './routes/XC3/Quest/Hero';
import XCThreeQuestSide from './routes/XC3/Quest/Side';
import XCThreeQuestStory from './routes/XC3/Quest/Story';
import XCThreeQuestUnmarked from './routes/XC3/Quest/Unmarked';
import XCThreeSTNoah from './routes/XC3/SoulTree/Noah';
import XCThreeSTMio from './routes/XC3/SoulTree/Mio';
import XCThreeSTEunie from './routes/XC3/SoulTree/Eunie';
import XCThreeSTTaion from './routes/XC3/SoulTree/Taion';
import XCThreeSTLanz from './routes/XC3/SoulTree/Lanz';
import XCThreeSTSena from './routes/XC3/SoulTree/Sena';
import XCThreeUMonster from './routes/XC3/UMonster';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "xeno1",
        element: <XCOneHome />
    },
    {
        path: "xeno1/quests/side",
        element: <XCOneSideQuests />
    },
    {
        path: "xeno1/quests/story",
        element: <XCOneStoryQuests />
    },
    {
        path: "xeno1/umonster",
        element: <XCOneUMonster />
    },
    {
        path: "xeno1/colony6/immigrants",
        element: <XCOneColony6Immigrants />
    },
    {
        path: "xeno1/colony6/reconstruction",
        element: <XCOneColony6Reconstruction />
    },
    {
        path: "xeno1/collectopedia",
        element: <XCOneCollectopedia />
    },
    {
        path: "xeno1/timeattack/free",
        element: <XCOneTimeAttackFree />
    },
    {
        path: "xeno1/timeattack/restricted",
        element: <XCOneTimeAttackRestricted />
    },
    {
        path: "xeno1/achievements",
        element: <XCOneAchievements />
    },
    {
        path: "xeno1/heart",
        element: <XCOneHeart />
    },
    {
        path: "xeno2",
        element: <XCTwoHome />
    },
    {
        path: "xeno2/quests/story",
        element: <XCTwoStoryQuests />
    },
    {
        path: "xeno2/quests/standard",
        element: <XCTwoSideQuests />
    },
    {
        path: "xeno2/quests/blades",
        element: <XCTwoBladeQuests />
    },
    {
        path: "xeno2/quests/dlc",
        element: <XCTwoDLCQuests />
    },
    {
        path: "xeno2/deeds",
        element: <XCTwoDeeds />
    },
    {
        path: "xeno2/blades/standard",
        element: <XCTwoSBlades />
    },
    {
        path: "xeno2/blades/dlc",
        element: <XCTwoDLCBlades />
    },
    {
        path: "xeno2/blades/ngp",
        element: <XCTwoNGPlusBlades />
    },
    {
        path: "xeno2/foorara",
        element: <XCTwoFoorara />
    },
    {
        path: "xeno2/hth",
        element: <XCTwoHTH />
    },
    {
        path: "xeno2/mercm",
        element: <XCTwoMercM />
    },
    {
        path: "xeno2/poppim",
        element: <XCTwoPoppiM />
    },
    {
        path: "xeno2/pouche",
        element: <XCTwoPouchE />
    },
    {
        path: "xeno2/umonster",
        element: <XCTwoUMonster />
    },
    {
        path: "xeno2/challenge",
        element: <XCTwoChallenge />
    },
    {
        path: "xeno3",
        element: <XCThreeHome />
    },
    {
        path: "xeno3/challenge",
        element: <XCThreeChallenge />
    },
    {
        path: "xeno3/class/noah",
        element: <XCThreeClassNoah />
    },
    {
        path: "xeno3/class/mio",
        element: <XCThreeClassMio />
    },
    {
        path: "xeno3/class/eunie",
        element: <XCThreeClassEunie />
    },
    {
        path: "xeno3/class/taion",
        element: <XCThreeClassTaion />
    },
    {
        path: "xeno3/class/lanz",
        element: <XCThreeClassLanz />
    },
    {
        path: "xeno3/class/sena",
        element: <XCThreeClassSena />
    },
    {
        path: "xeno3/gems",
        element: <XCThreeGems />
    },
    {
        path: "xeno3/hero",
        element: <XCThreeHero />
    },
    {
        path: "xeno3/quests/dlc",
        element: <XCThreeQuestDLC />
    },
    {
        path: "xeno3/quests/hero",
        element: <XCThreeQuestHero />
    },
    {
        path: "xeno3/quests/side",
        element: <XCThreeQuestSide />
    },
    {
        path: "xeno3/quests/story",
        element: <XCThreeQuestStory />
    },
    {
        path: "xeno3/quests/unmarked",
        element: <XCThreeQuestUnmarked />
    },
    {
        path: "xeno3/soul/noah",
        element: <XCThreeSTNoah />
    },
    {
        path: "xeno3/soul/mio",
        element: <XCThreeSTMio />
    },
    {
        path: "xeno3/soul/eunie",
        element: <XCThreeSTEunie />
    },
    {
        path: "xeno3/soul/taion",
        element: <XCThreeSTTaion />
    },
    {
        path: "xeno3/soul/lanz",
        element: <XCThreeSTLanz />
    },
    {
        path: "xeno3/soul/sena",
        element: <XCThreeSTSena />
    },
    {
        path: "xeno3/umonster",
        element: <XCThreeUMonster />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
