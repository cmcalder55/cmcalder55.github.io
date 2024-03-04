
// src/router/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Wiki from '../pages/Wiki';
import Projects from '../pages/Projects';
import ProjectsLayout from '../components/ProjectsLayout';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';
import HomeLayout from '../components/HomeLayout';
import Auto from '../pages/projects/auto';
import Flower from '../pages/projects/flower';

export default function AppRouter() {
	return(
		<Router>
			<Routes>
				{/* Redirect to Home as the default route */}					
				<Route path="/" element={<HomeLayout />}>				
					<Route index element={<Home />} />
					{/* Projects page with subroutes */}
					<Route path="projects" element={<ProjectsLayout />}>
						<Route index element={<Projects />} />
						<Route path="blender-flowers" element={<Flower />} />
						<Route path="auto-driving" element={<Auto />} />
					</Route>

					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="wiki" element={<Wiki />} />
					{/* Catch any undefined URLs (404 error) */}
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

