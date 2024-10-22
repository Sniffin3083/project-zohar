import { useState } from "react"
import { Link } from 'react-router-dom';
import { Dropdown } from "rsuite"; 

function reset() {
    localStorage.clear();
}

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <nav>
                {/* Mobile NavBar */}
                <section className="flex md:hidden">
                    <div 
                        className="m-5 space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div 
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        {/* Mobile Navigation Open */}
                        <ul className="flex flex-col items-center space-y-5 justify-betweeen min-h-[250px]">
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
                                    <Dropdown.Item as="a" href="/xeno3/quests/unmarked">
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
                            <li className="mx-8 p-2 bg-green-600 hover:bg-green-800 text-white border border-solid border-black">
                                <button onClick={reset()}>
                                    Reset All Progress
                                </button>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Desktop NavBar */}
                <ul className="hidden md:flex text-xl m-4 pt-6 flex items-center flex-row justify-center">
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
                            <Dropdown.Item as="a" href="/xeno3/quests/unmarked">
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
                    <li className="mx-8 p-2 bg-green-600 hover:bg-green-800 text-white border border-solid border-black">
                        <button onClick={reset()}>
                            Reset All Progress
                        </button>
                    </li>
                </ul>
            </nav>
            <style>{`
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: white;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
           `}</style>
        </div>
    )
}