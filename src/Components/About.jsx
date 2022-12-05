import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import Typed from "react-typed";
import React from "react";
import { aboutme } from "../Data/aboutme";

const About = () => {
	return (
		<Flex id="About" flexDirection={"column"} pb="5">
			<Stack direction={{ base: "column", md: "row" }} id="Home">
				<Stack flex={1} alignItems="center" justifyContent={"center"}>
					<Flex w="30%" flexDirection={"column"} gap="5">
						<a
							rel="noreferrer"
							href="https://www.linkedin.com/in/pratik-derepatil/"
							target="_blank"
						>
							<Image
								width={["sm", "md"]}
								src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
								alt="Linkedin"
							/>
						</a>
						<a
							rel="noreferrer"
							href="https://pratikderepatil.github.io/"
							target="_blank"
						>
							<Image
								width={["sm", "md"]}
								src="https://img.shields.io/badge/Portfolio-FF3850?style=for-the-badge&logo=Linkfire&logoColor=white"
								alt="Portfolio"
							/>
						</a>
						<a
							rel="noreferrer"
							href="mailto:pratikdere333@gmail.com"
							target="_blank"
						>
							<Image
								width={["sm", "md"]}
								src="https://img.shields.io/badge/Pratik%20Derepatil-EA4335?style=for-the-badge&logo=gmail&logoColor=white"
								alt="Gmail"
							/>
						</a>
						<a
							href="https://drive.google.com/uc?id=1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD&export=download"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								width={["sm", "md"]}
								src="https://img.shields.io/badge/Resume-ffb005?style=for-the-badge&logo=Google%20Drive&logoColor=black&?labelColor=white"
								alt="Resume"
							/>
						</a>
					</Flex>
				</Stack>
				<Flex
					w={["", "60%"]}
					direction="column"
					alignItems="start"
					justifyContent={"center"}
					pl="7"
					pr="7"
					gap={[2, 6]}
				>
					<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: "''",
								width: "full",
								height: useBreakpointValue({ base: "20%", md: "30%" }),
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "FFB005",
								zIndex: -1,
							}}
						>
							Hi, I Am
						</Text>
						<br />
						<Text color={"#FFB005"} as={"span"}>
							<Typed
								strings={[
									"Pratik Derepatil",
									"A Full-Stack Developer",
									"A Tech-Enthusiast",
								]}
								typeSpeed={150}
								backSpeed={100}
								loop
							></Typed>
						</Text>
					</Heading>

					<Text
						fontSize={["lg", "lg", "lg", "2xl"]}
						pr={["", "10%", "6%", "15%"]}
					>
						{aboutme.summary}
					</Text>
					<a
						href="https://drive.google.com/uc?id=1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD&export=download"
						rel="noreferrer"
					>
						<Button
							fontFamily={"heading"}
							size={["md", "md", "md", "lg"]}
							color="black"
							variant={"solid"}
							colorScheme="yellow"
						>
							Resume
						</Button>
					</a>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default About;
