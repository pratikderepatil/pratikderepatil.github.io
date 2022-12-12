import {
	Button,
	Center,
	Flex,
	Heading,
	IconButton,
	Link,
	Stack,
	Text,
	Tooltip,
	useBreakpointValue,
	useClipboard,
	useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import Typed from "react-typed";
import React from "react";
import { aboutme } from "../Data/aboutme";

const About = () => {
	const { hasCopied, onCopy } = useClipboard("pratikdere333@gmail.com");

	return (
		<Flex id="About" flexDirection={"column"} pb="5">
			<Center>
				<Heading
					size={["lg", "xl"]}
					style={{ color: "#FFB005" }}
					pb={["5", "10"]}
				>
					About
				</Heading>
			</Center>
			<Stack
				direction={{ base: "column", md: "row" }}
				id="Home"
				justifyContent={"space-between"}
			>
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
				<Stack
					align="center"
					justify="space-around"
					direction={{ base: "row", md: "column" }}
					pr={[0, 20]}
					pl={[0, 20]}
					pt={[5, 0]}
				>
					<Tooltip
						label={hasCopied ? "Email Copied!" : "Copy Email"}
						closeOnClick={false}
						hasArrow
					>
						<IconButton
							aria-label="email"
							variant="ghost"
							size="lg"
							fontSize="3xl"
							icon={<MdEmail />}
							_hover={{
								bg: "yellow.500",
								color: useColorModeValue("white", "gray.700"),
							}}
							onClick={onCopy}
							isRound
						/>
					</Tooltip>

					<Link target="_blank" href="https://github.com/pratikderepatil">
						<Tooltip label="GitHub" hasArrow>
							<IconButton
								aria-label="github"
								variant="ghost"
								size={"lg"}
								fontSize="3xl"
								icon={<BsGithub />}
								_hover={{
									bg: "yellow.500",
									color: useColorModeValue("white", "gray.700"),
								}}
								isRound
							/>
						</Tooltip>
					</Link>

					<Link target="_blank" href="https://medium.com/@pd_13">
						<Tooltip label="Medium" hasArrow>
							<IconButton
								aria-label="medium"
								variant="ghost"
								size={"lg"}
								fontSize="3xl"
								icon={<BsMedium />}
								_hover={{
									bg: "yellow.500",
									color: useColorModeValue("white", "gray.700"),
								}}
								isRound
							/>
						</Tooltip>
					</Link>

					<Link
						target="_blank"
						href="https://www.linkedin.com/in/pratik-derepatil/"
					>
						<Tooltip label="LinkedIn" hasArrow>
							<IconButton
								aria-label="linkedin"
								variant="ghost"
								size="lg"
								icon={<BsLinkedin size="28px" />}
								_hover={{
									bg: "yellow.500",
									color: useColorModeValue("white", "gray.700"),
								}}
								isRound
							/>
						</Tooltip>
					</Link>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default About;
