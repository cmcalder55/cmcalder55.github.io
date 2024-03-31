// import { useState } from "react";
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
                  <NavLink
                    to="/projects/control_systems"
                    className="dropdown-link"
                  >
                    Control Systems
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects/machine_learning_ai"
                    className="dropdown-link"
                  >
                    Machine Learning / AI
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/automation" className="dropdown-link">
                    Automation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects/optimization"
                    className="dropdown-link"
                  >
                    Optimization
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/robotics" className="dropdown-link">
                    Robotics
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/misc" className="dropdown-link">
                    Miscellaneous
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
                  <NavLink to="/interests/art" className="dropdown-link">
                    Art
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/interests/fun_games" className="dropdown-link">
                    Games
                  </NavLink>
                </li>
                {/* Add more projects here */}
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
