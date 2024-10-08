import { Link } from 'react-router-dom';
import { Dropdown } from "rsuite"; 
import "rsuite/dist/rsuite.min.css"; 

export default function NavBar() {
    return (
        <nav className="">
            <ul className="text-xl m-4 pt-6 flex items-center flex-row justify-center">
                <li>
                    <Link to="/xeno2/">Intro</Link>
                </li>
                <li className="px-4 lg:px-12">
                    <Dropdown title="Quests">
                        <Dropdown.Item as="a" href="/xeno2/quests/story">
                            Story Quests
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/quests/standard">
                            Side Quests
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/quests/blades">
                            Blade Quests
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/quests/dlc">
                            DLC Quests
                        </Dropdown.Item>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown title="Blades">
                        <Dropdown.Item as="a" href="/xeno2/blades/standard">
                            Standard Blades
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/blades/ngp">
                            NG+ Blades
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/blades/dlc">
                            DLC Blades
                        </Dropdown.Item>
                    </Dropdown>
                </li>
                <li className="px-4 lg:px-12">
                    <Link to="/xeno2/umonster">Unique Monsters</Link>
                </li>
                <li>
                    <Link to="/xeno2/hth">Heart to Hearts</Link>
                </li>
                <li className="pl-4 lg:pl-12">
                    <Link to="/xeno2/mercm">Merc Missions</Link>
                </li>
                <li className="px-4 lg:px-12">
                    <Link to="/xeno2/challenge">Challenge Mode</Link>
                </li>
                <li>
                    <Dropdown title="Others">
                        <Dropdown.Item as="a" href="/xeno2/foorara">
                            Foorara
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/poppim">
                            Poppi Manuals
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/pouche">
                            Pouch Expansions
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno2/deeds">
                            Shop Deeds
                        </Dropdown.Item>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
}