import { Link } from 'react-router-dom';
import { Dropdown } from "rsuite"; 
import "rsuite/dist/rsuite.min.css"; 

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
                    {/* <select>
                        <option><Link to="/colony6immigrants">Immigrants</Link></option>
                        <option><Link to="/colony6reconstruction">Reconstruction</Link></option>
                    </select>
                    <Link to="/xeno1/colony6">Colony 6</Link> */}

                    <Dropdown title="Colony 6">
                        <Dropdown.Item as="a" href="/xeno1/colony6immigrants">
                            Colony 6 Immigrants
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno1/colony6reconstruction">
                            Colony 6 Reconstruction
                        </Dropdown.Item>
                    </Dropdown>
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