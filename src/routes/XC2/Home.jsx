import { Link } from 'react-router-dom';

import NavBar from './Navbar';

export default function XCTwoHome() {
    return (
        <>
            <NavBar />
            
            <br />
            <div className="m-16 w-screen">
                <h1 className="text-2xl font-bold">Xenoblade Chronicles 2 Completetion Checklist</h1>
                <p>Hi there this is the completion checklist for all things Xenoblade Chronicles 2</p>
                <h1 className="text-xl font-bold italic underline text-red-800">THIS IS NOT A SPOILER FREE LIST A SPOILER FREE VERSION IS COMING SOON</h1>
            </div>
        </>
    )
}