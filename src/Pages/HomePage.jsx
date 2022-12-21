import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
// import Testimonials from "../Components/Testimonials";
import { VStack } from "@chakra-ui/react";
import Calendar from "../Components/Calendar";
import Stats from "../Components/Stats";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Home from "../Components/Home";

const HomePage = () => {
	return (
		<>
			<div className="fixed">
				<Navbar />
			</div>
			<VStack className="container" w="100%">
				<Home />
				{/* <About /> */}
				<Skills />
				<Experience />
				<Projects />
				<Calendar />
				<Stats />
				{/* <Testimonials /> */}
				<Contact />
				<Footer />
			</VStack>
		</>
	);
};

export default HomePage;
