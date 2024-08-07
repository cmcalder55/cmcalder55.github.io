
import { Outlet, NavLink } from "react-router-dom";

import "../styles/style.css";

const HomeLayout = () => {
    return (
        <div className="home-layout">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" end>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" end>
                            About Me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link" end>
                            Projects
                        </NavLink>
                        {
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/projects/ann" className="dropdown-link">
                                        Artifical Neural Networks
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects/automation-and-controls" className="dropdown-link">
                                        Automation / Control Systems
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects/db-app-dev" className="dropdown-link">
                                        DB / App Development
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects/feature-extraction" className="dropdown-link">
                                        Feature Extraction
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects/optimization" className="dropdown-link">
                                        Optimization
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects/pattern-recognition" className="dropdown-link">
                                        Pattern Recognition
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects/pre-processing" className="dropdown-link">
                                        Pre-Processing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects/utils" className="dropdown-link">
                                        Utilities / Helpers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="https://github.com/cmcalder55/cmcalder55.github.io" className="dropdown-link">
                                        Portfolio Website (GitHub)
                                    </NavLink>
                                </li>
                                {/* Add more projects here */}
                            </ul>
                        }
                    </li>
                    <li className="nav-item">
                        <NavLink to="/interests" className="nav-link" end>
                            Interests
                        </NavLink>
                        {
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/interests/bookshelf" className="dropdown-link">
                                        Bookshelf
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/interests/technical" className="dropdown-link">
                                        Technical Reading
                                    </NavLink>
                                </li>
                            </ul>
                        }
                    </li>
                </ul>
            </nav>
            <main className="outlet">
                <Outlet />
            </main>
        </div>
    );
};

export default HomeLayout;
