import {
	Center,
	Flex,
	Heading,
	SimpleGrid,
	Stack,
	Text,
	Image,
} from "@chakra-ui/react";

import {
	SiNextdotjs,
	SiNodedotjs,
	SiTypescript,
	SiReact,
} from "react-icons/si";
import profile from "../Data/images/profile1.png";

import React from "react";

const About = () => {
	return (
		<Flex
			id="about"
			className="about section"
			flexDirection={"column"}
			pb="10"
			bgColor="#FFFBEC"
			pt="5"
		>
			<Center>
				<Heading size={["lg", "xl"]} pb={["5", "10"]}>
					About <span style={{ color: "#FFB005" }}>Me</span>
				</Heading>
			</Center>
			<Center>
				<Stack
					direction={{ base: "column", md: "row" }}
					id="Home"
					w={["100%", "70%"]}
					justifyContent="center"
					alignItems={"center"}
					gap={["5", "20"]}
				>
					<Image
						className="home-img"
						src={profile}
						alt={"Image"}
						objectFit={"cover"}
						width={["60%", "30%"]}
						height={["60%", "30%"]}
						borderRadius="30"
					/>
					<Center>
						<Flex
							direction="column"
							alignItems="start"
							justifyContent={"center"}
							width={["80%", "full"]}
							gap={[2, 6]}
						>
							<Text
								fontSize={["xl", "xl", "xl", "2xl"]}
								// pr={["", "10%", "6%", "15%"]}
							>
								Hi Everyone, I am <Text as="b">Pratik Derepatil</Text> from{" "}
								<Text as="b">Pune, Maharashtra.</Text> I have completed my post
								graduation in Master of Science from Fergusson College, Pune,
								Maharashtra. Currently, I'm skilled in both frontend and backend
								technology, especially <Text as="b">MERN Stack</Text>.
							</Text>
							<Text
								fontSize={["xl", "xl", "xl", "2xl"]}
								pr={["", "10%", "6%", "15%"]}
							>
								Here are a few technologies I’ve been working with recently:
								<SimpleGrid columns={2} mt={3} ml={[4, 10]}>
									<Flex gap={3} alignItems={"center"}>
										<SiReact />
										React JS
									</Flex>
									<Flex gap={3} alignItems={"center"}>
										<SiNodedotjs />
										Node JS
									</Flex>
									<Flex gap={3} alignItems={"center"}>
										<SiNextdotjs />
										Next JS
									</Flex>
									<Flex gap={3} alignItems={"center"}>
										<SiTypescript />
										TypeScript
									</Flex>
								</SimpleGrid>
							</Text>
						</Flex>
					</Center>
				</Stack>
			</Center>
		</Flex>
	);
};

export default About;
