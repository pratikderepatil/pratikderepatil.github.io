import {
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import profile from "../Data/images/Screenshot.png";
import { aboutme } from "../Data/aboutme";
import Typed from "react-typed";

const About = () => {
	return (
		<Stack direction={{ base: "column", md: "row" }} id="About">
			<Flex flex={1} alignItems="start" justifyContent={"start"}>
				<Image
					src={profile}
					alt={"Login Image"}
					objectFit={"cover"}
					width={["full", "md"]}
				/>
			</Flex>
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
							bg: "yellow.400",
							zIndex: -1,
						}}
					>
						Hi, I Am
					</Text>
					<br />
					<Text color={"yellow.400"} as={"span"}>
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
					href="https://drive.google.com/file/d/1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD/"
					target="_blank"
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
	);
};

export default About;
