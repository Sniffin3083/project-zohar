import { Link } from 'react-router-dom';
import { Dropdown } from "rsuite"; 
import "rsuite/dist/rsuite.min.css"; 

export default function NavBar() {
    return (
        <nav className="">
            <ul className="text-xl m-4 pt-6 flex items-center flex-row justify-center">
                <li>
                    <Link to="/xeno3/">Intro</Link>
                </li>
                <li className="px-4 lg:px-12">
                    <Dropdown title="Quests">
                        <Dropdown.Item as="a" href="/xeno3/quests/story">
                            Story Quests
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/quests/side">
                            Side Quests
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/quests/hero">
                            Hero Quests
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/quests/dlc">
                            DLC Quests
                        </Dropdown.Item>
                        <Dropdown.Item as="a" hreg="/xeno3/quests/unmarked">
                            Unmarked Quests
                        </Dropdown.Item>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown title="Class">
                        <Dropdown.Item as="a" href="/xeno3/class/noah">
                            Noah's Classes
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/class/mio">
                            Mio's Classes
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/class/eunie">
                            Eunie's Classes
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/class/taion">
                            Taion's Classes
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/class/lanz">
                            Lanz's Classes
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/class/sena">
                            Sena's Classes
                        </Dropdown.Item>
                    </Dropdown>
                </li>
                <li className="px-4 lg:px-12">
                    <Link to="/xeno3/umonster">Unique Monsters</Link>
                </li>
                <li>
                    <Link to="/xeno3/gems">Gems</Link>
                </li>
                <li className="pl-4 lg:pl-12">
                    <Link to="/xeno3/hero">Heroes</Link>
                </li>
                <li className="px-4 lg:px-12">
                    <Link to="/xeno3/challenge">Challenge Mode</Link>
                </li>
                <li>
                    <Dropdown title="Soul Tree">
                        <Dropdown.Item as="a" href="/xeno3/soul/noah">
                            Noah's Soul Tree
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/soul/mio">
                            Mio's Soul Tree
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/soul/eunie">
                            Eunie's Soul Tree
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/soul/taion">
                            Taion's Soul Tree
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/soul/lanz">
                            Lanz's Soul Tree
                        </Dropdown.Item>
                        <Dropdown.Item as="a" href="/xeno3/soul/sena">
                            Sena's Soul Tree
                        </Dropdown.Item>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
}