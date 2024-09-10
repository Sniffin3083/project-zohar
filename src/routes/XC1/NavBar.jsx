import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="">
            <ul className="text-xl m-4 pt-6 flex items-center flex-row justify-center">
                <li className="hover:font-bold hover:underline">
                    <Link to="/xeno1">Intro</Link>
                </li>
                <li className="px-12 hover:font-bold hover:underline">
                    <Link to="/xeno1/quests">Quests</Link>
                </li>
                <li className="hover:font-bold hover:underline">
                    <Link to="/xeno1/umonster">Unique Monsters</Link>
                </li>
                <li className="px-12 hover:font-bold hover:underline">
                    <Link to="/xeno1/colony6">Colony 6</Link>
                </li>
                <li className="hover:font-bold hover:underline">
                    <Link to="/xeno1/collection">Collection</Link>
                </li>
                <li className="px-12 hover:font-bold hover:underline">
                    <Link to="/xeno1/achievements">Achievements</Link>
                </li>
                <li className="hover:font-bold hover:underline">
                    <Link to="/xeno1/heart">Heart to Hearts</Link>
                </li>
            </ul>
        </nav>
    )
}