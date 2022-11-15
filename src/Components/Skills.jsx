import { Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { techstack } from "../Data/techstack.js";
const Skills = () => {
	return (
		<Flex
			id="Skills"
			flexDirection={"column"}
			w="100%"
			alignItems="center"
			bgColor="#FFFBEC"
			pt="5"
			pb="5"
		>
			<Center>
				<Heading
					size={["lg", "xl"]}
					style={{ color: "#FFB005" }}
					pb={["5", "10"]}
				>
					Skills
				</Heading>
			</Center>
			<Flex wrap={"wrap"} w={"90%"} gap={["9", "14"]} justifyContent="center">
				{techstack?.map((tech) => {
					return (
						<Flex
							key={tech.language}
							alignItems="center"
							flexDirection={"column"}
						>
							<Image src={tech.image} h={["12", "24"]} />
							<Heading size={["sm", "md"]} pt={["4", "8"]}>
								{tech.language}
							</Heading>
						</Flex>
					);
				})}
			</Flex>
		</Flex>
	);
};

export default Skills;
