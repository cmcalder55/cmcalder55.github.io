
import { Outlet, NavLink } from "react-router-dom";

import "../styles/style.css";

const HomeLayout = () => {
    return (
        <div className="home-layout">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" end>
                            All,
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link" end>
                            Projects,
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" end>
                            About
                        </NavLink>
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
