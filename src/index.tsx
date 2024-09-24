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

import XCOneHome from './routes/XC1/Home.jsx'
import XCOneSideQuests from './routes/XC1/SideQuests.jsx';
import XCOneStoryQuests from './routes/XC1/StoryQuests';
import XCOneUMonster from './routes/XC1/UMonster';
import XCOneColony6Immigrants from './routes/XC1/Colony6Immigrants';
import XCOneColony6Reconstruction from './routes/XC1/Colony6Reconstruction';
import XCOneCollectopedia from './routes/XC1/Collectopedia';
import XCOneTimeAttackFree from './routes/XC1/TimeAttackFree';
import XCOneTimeAttackRestricted from './routes/XC1/TimeAttackRestricted';
import XCOneAchievements from './routes/XC1/Achievements';
import XCOneHeart from './routes/XC1/Heart';

import XCTwoHome from './routes/XC2/Home.jsx';
import XCTwoStoryQuests from './routes/XC2/StoryQuests';
import XCTwoSideQuests from './routes/XC2/SideQuests';
import XCTwoBladeQuests from './routes/XC2/BladeQuests';
import XCTwoDLCQuests from './routes/XC2/DLCQuests';
import XCTwoSBlades from './routes/XC2/SBlades';
import XCTwoDLCBlades from './routes/XC2/DLCBlades';
import XCTwoNGPlusBlades from './routes/XC2/NGPlusBlades';
import XCTwoDeeds from './routes/XC2/Deeds';
import XCTwoFoorara from './routes/XC2/Foorara';
import XCTwoHTH from './routes/XC2/Heart';
import XCTwoMercM from './routes/XC2/MercM';
import XCTwoNoponD from './routes/XC2/NoponD';
import XCTwoPoppiM from './routes/XC2/PoppiM';
import XCTwoPouchE from './routes/XC2/PouchE';
import XCTwoUMonster from './routes/XC2/UMonster';
import XCTwoChallenge from './routes/XC2/Challenge';

import XCThree from './routes/XC3/XCthree.jsx';

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
        path: "xeno2/nopond",
        element: <XCTwoNoponD />
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
        element: <XCThree />
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
