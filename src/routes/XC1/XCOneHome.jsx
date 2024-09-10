import { Link } from 'react-router-dom';

import NavBar from './NavBar';

export default function XCOneHome() {
    return (
        <>
            <NavBar />
            
            <br />
            <div className="m-16 w-screen">
                <h1 className="text-2xl font-bold">Xenoblade Chronicles 1 Completetion Checklist</h1>
                <p>Hi there this is the completion checklist for all things Xenoblade Chronicles 1. This list is based on Definitive Edition but there shouldn't be any changes between the definitive version and the verion on Wii. All Future Connected related content is not on this list as it will added to its own separate list down the line. The tabs above should help take you where you need to go whether that be quests, unique monsters, Colony 6 reconstruction, etc. Just click the tab of the checklist you want to see and start checking away.</p>
                <h1 className="text-xl font-bold italic underline text-red-800">THIS IS NOT A SPOILER FREE LIST A SPOILER FREE VERSION IS COMING SOON</h1>
            </div>
        </>
    )
}