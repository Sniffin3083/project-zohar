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

import XCOneHome from './routes/XC1/XCOneHome.jsx'
import XCOneQuests from './routes/XC1/XCOneQuests.jsx';
import XCOneUMonster from './routes/XC1/XCOneUMonster';
import XCOneColony6 from './routes/XC1/XCOneColony6';
import XCOneCollection from './routes/XC1/XCOneCollection';
import XCOneAchievements from './routes/XC1/XCOneAchievements';
import XCOneHeart from './routes/XC1/XCOneHeart';

import XCTwo from './routes/XCtwo.jsx';
import XCThree from './routes/XCthree.jsx';

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
        path: "xeno1/colony6",
        element: <XCOneColony6 />
    },
    {
        path: "xeno1/collection",
        element: <XCOneCollection />
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
        element: <XCTwo />
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
