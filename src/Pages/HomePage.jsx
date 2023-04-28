import React from "react";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
// import Testimonials from "../Components/Testimonials";
import { VStack } from "@chakra-ui/react";
import Calendar from "../Components/Calendar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Home from "../Components/Home";

const HomePage = () => {
	return (
		<>
			<VStack className="container" w="100%" pt="14">
				<Home />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Calendar />
				{/* <Testimonials /> */}
				<Contact />
				<Footer />
			</VStack>
		</>
	);
};

export default HomePage;
