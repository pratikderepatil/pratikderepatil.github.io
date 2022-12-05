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
import React from "react";
import profile from "../Data/images/profile.png";
import { aboutme } from "../Data/aboutme";
import Typed from "react-typed";

const Home = () => {
	return (
		<Flex id="Home" flexDirection={"column"} pb="5">
			<Stack direction={{ base: "column", md: "row" }} id="Home">
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
					<Box w={["35%", "18%"]}>
						<a
							href="https://drive.google.com/uc?id=1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD&export=download"
							rel="noreferrer"
						>
							<Image
								src="https://img.shields.io/badge/Resume-ffb005?style=for-the-badge&logo=Adobe%20Acrobat%20Reader&logoColor=black&?labelColor=white"
								width={["xl"]}
							></Image>
						</a>
					</Box>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Home;
