import {
	Center,
	Flex,
	Heading,
	IconButton,
	Link,
	SimpleGrid,
	Stack,
	Text,
	Tooltip,
	useClipboard,
	useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

import React from "react";

const About = () => {
	const { hasCopied, onCopy } = useClipboard("pratikdere333@gmail.com");

	return (
		<Flex id="About" flexDirection={"column"} pb="5" bgColor="#FFFBEC" pt="5">
			<Center>
				<Heading size={["lg", "xl"]} pb={["5", "10"]}>
					About <span style={{ color: "#FFB005" }}>Me</span>
				</Heading>
			</Center>
			<Center>
				<Stack
					direction={{ base: "column", md: "row" }}
					id="Home"
					w={["100%", "80%"]}
					justifyContent="center"
				>
					<Stack
						align="center"
						justify="space-around"
						direction={{ base: "row", md: "column" }}
						pr={[0, 20]}
						pl={[0, 20]}
						pt={[3, 0]}
						pb={[3, 0]}
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

					<Center>
						<Flex
							direction="column"
							alignItems="start"
							justifyContent={"center"}
							pl="7"
							pr="7"
							gap={[2, 6]}
						>
							<Text
								fontSize={["xl", "xl", "xl", "3xl"]}
								// pr={["", "10%", "6%", "15%"]}
							>
								Hi Everyone, I am <Text as="b">Pratik Derepatil</Text> from{" "}
								<Text as="b">Pune, Maharashtra.</Text> I have completed my post
								graduation in Master of Science from Fergusson College, Pune,
								Maharashtra. Currently, I'm skilled in both frontend and backend
								technology, especially <Text as="b">MERN Stack</Text>.
							</Text>
							<Text
								fontSize={["xl", "xl", "xl", "3xl"]}
								pr={["", "10%", "6%", "15%"]}
							>
								Here are a few technologies I’ve been working with recently:
								<SimpleGrid columns={2} mt={3} ml={[4, 10]}>
									<Flex gap={3} alignItems={"center"}>
										<AiOutlineSend />
										React JS
									</Flex>
									<Flex gap={3} alignItems={"center"}>
										<AiOutlineSend />
										Node JS
									</Flex>
									<Flex gap={3} alignItems={"center"}>
										<AiOutlineSend />
										Next JS
									</Flex>
									<Flex gap={3} alignItems={"center"}>
										<AiOutlineSend />
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
