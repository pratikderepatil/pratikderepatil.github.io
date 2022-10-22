import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import TechStack from "../Components/TechStack";
import Testimonials from "../Components/Testimonials";
import { VStack } from "@chakra-ui/react";
import Calendar from "../Components/Calendar";
import Stats from "../Components/Stats";

const HomePage = () => {
	return (
		<>
			<div className="fixed">
				<Navbar />
			</div>
			<VStack className="container" gap={5} w="100%" pb="10">
				<About />
				{/* <TechStack />
				<Skills />
				<Experience /> */}
				<Projects />
				<Calendar />
				<Stats />
				{/* <Testimonials /> */}
			</VStack>
		</>
	);
};

export default HomePage;
