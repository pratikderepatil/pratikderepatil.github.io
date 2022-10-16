import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import TechStack from "../Components/TechStack";
import Testimonials from "../Components/Testimonials";

const HomePage = () => {
	return (
		<>
			<div className="fixed">
				<Navbar />
			</div>
			<div className="container">
				<About />
				{/* <Experience />
				<Projects />
				<Skills />
				<TechStack />
				<Testimonials /> */}
			</div>
		</>
	);
};

export default HomePage;
