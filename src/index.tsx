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
import XCOneQuests from './routes/XC1/Quests.jsx';
import XCOneUMonster from './routes/XC1/UMonster';
import XCOneColony6Immigrants from './routes/XC1/Colony6Immigrants';
import XCOneColony6Reconstruction from './routes/XC1/Colony6Reconstruction';
import XCOneCollectopedia from './routes/XC1/Collectopedia';
import XCOneTimeAttackFree from './routes/XC1/TimeAttackFree';
import XCOneTimeAttackRestricted from './routes/XC1/TimeAttackRestricted';
import XCOneAchievements from './routes/XC1/Achievements';
import XCOneHeart from './routes/XC1/Heart';

import XCTwoHome from './routes/XC2/Home.jsx';

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
        path: "xeno1/quests",
        element: <XCOneQuests />
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
