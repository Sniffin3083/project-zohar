import { useState } from "react"
import { Link } from 'react-router-dom';
import { Dropdown } from "rsuite"; 


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
                            <li className="hover:font-bold hover:underline">
                                <Link to="/xeno1">Intro</Link>
                            </li>
                            <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                                <Dropdown title="Quests">
                                    <Dropdown.Item as="a" href="/xeno1/quests/story">
                                        Story Quests
                                    </Dropdown.Item>
                                    <Dropdown.Item as="a" href="/xeno1/quests/side">
                                        Side Quests
                                    </Dropdown.Item>
                                </Dropdown>
                            </li>
                            <li className="hover:font-bold hover:underline">
                                <Link to="/xeno1/umonster">Unique Monsters</Link>
                            </li>
                            <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                                <Dropdown title="Colony 6">
                                    <Dropdown.Item as="a" href="/xeno1/colony6/immigrants">
                                        Colony 6 Immigrants
                                    </Dropdown.Item>
                                    <Dropdown.Item as="a" href="/xeno1/colony6/reconstruction">
                                        Colony 6 Reconstruction
                                    </Dropdown.Item>
                                </Dropdown>
                            </li>
                            <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                                <Link to="/xeno1/collectopedia">Collectopedia</Link>
                            </li>
                            <li className="hover:font-bold hover:underline">
                                <Dropdown title="Time Attack">
                                    <Dropdown.Item as="a" href="/xeno1/timeattack/free">
                                        Time Attack - Free
                                    </Dropdown.Item>
                                    <Dropdown.Item as="a" href="/xeno1/timeattack/restricted">
                                        Time Attack - Restricted
                                    </Dropdown.Item>
                                </Dropdown>
                            </li>
                            <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                                <Link to="/xeno1/achievements">Achievements</Link>
                            </li>
                            <li className="hover:font-bold hover:underline">
                                <Link to="/xeno1/heart">Heart to Hearts</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Desktop NavBar */}
                <ul className="hidden md:flex text-xl m-4 pt-6 flex items-center flex-row justify-center">
                    <li className="hover:font-bold hover:underline">
                        <Link to="/xeno1">Intro</Link>
                    </li>
                    <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                        <Dropdown title="Quests">
                            <Dropdown.Item as="a" href="/xeno1/quests/story">
                                Story Quests
                            </Dropdown.Item>
                            <Dropdown.Item as="a" href="/xeno1/quests/side">
                                Side Quests
                            </Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li className="hover:font-bold hover:underline">
                        <Link to="/xeno1/umonster">Unique Monsters</Link>
                    </li>
                    <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                        <Dropdown title="Colony 6">
                            <Dropdown.Item as="a" href="/xeno1/colony6/immigrants">
                                Colony 6 Immigrants
                            </Dropdown.Item>
                            <Dropdown.Item as="a" href="/xeno1/colony6/reconstruction">
                                Colony 6 Reconstruction
                            </Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                        <Link to="/xeno1/collectopedia">Collectopedia</Link>
                    </li>
                    <li className="hover:font-bold hover:underline">
                        <Dropdown title="Time Attack">
                            <Dropdown.Item as="a" href="/xeno1/timeattack/free">
                                Time Attack - Free
                            </Dropdown.Item>
                            <Dropdown.Item as="a" href="/xeno1/timeattack/restricted">
                                Time Attack - Restricted
                            </Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li className="px-4 lg:px-12 hover:font-bold hover:underline">
                        <Link to="/xeno1/achievements">Achievements</Link>
                    </li>
                    <li className="hover:font-bold hover:underline">
                        <Link to="/xeno1/heart">Heart to Hearts</Link>
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