import {
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue,
	IconButton,
	Link,
	Tooltip,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { aboutme } from "../Data/aboutme";
import Typed from "react-typed";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDocumentDuplicate } from "react-icons/hi";
import { MdEmail, MdCall } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
	return (
		<Flex id="Home" flexDirection={"column"} pt="10" h={["80vh", "110vh"]}>
			<Flex
				w={["90%", "60%"]}
				direction="column"
				alignItems="center"
				justifyContent={"center"}
				gap={[2, 6]}
				m="auto"
			>
				<Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
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
						Hi, I am{" "}
						<Text color={"#FFB005"} as="span">
							Pratik Derepatil
						</Text>
					</Text>
				</Heading>
				<Heading fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}>
					<Text color={"#FFB005"} as={"span"}>
						<Typed
							strings={["A Full-Stack Developer", "A Tech-Enthusiast"]}
							typeSpeed={150}
							backSpeed={100}
							loop
						></Typed>
					</Text>
				</Heading>

				<Text fontSize={["lg", "lg", "lg", "2xl"]} textAlign="center">
					{aboutme.summary}
				</Text>
			</Flex>
			<Stack
				w={["full", "30%"]}
				align="center"
				justify="space-evenly"
				m="auto"
				direction={"row"}
				pb="10"
				pt="5"
			>
				{/* MdCall */}
				<Link target="_blank" href="tel:+917745081531">
					<Tooltip label="Contact Me" hasArrow>
						<IconButton
							aria-label="contact"
							variant="ghost"
							size="lg"
							fontSize="3xl"
							icon={<MdCall />}
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
					href="https://drive.google.com/uc?id=1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD&export=download"
				>
					<Tooltip label="Resume" hasArrow>
						<IconButton
							aria-label="resume"
							variant="ghost"
							size="lg"
							fontSize="3xl"
							icon={<HiDocumentDuplicate />}
							_hover={{
								bg: "yellow.500",
								color: useColorModeValue("white", "gray.700"),
							}}
							isRound
						/>
					</Tooltip>
				</Link>
				<Link target="_blank" href="mailto:pratikdere333@gmail.com">
					<Tooltip label="Mail" hasArrow>
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
							isRound
						/>
					</Tooltip>
				</Link>
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

			<Flex
				w={"full"}
				h={["35vh", "50vh"]}
				backgroundImage={"url(https://wallpapercave.com/wp/1OiPBn0.jpg)"}
				backgroundSize={"cover"}
				backgroundPosition={"center bottom"}
			>
				<VStack
					w={"full"}
					justify={"center"}
					px={useBreakpointValue({ base: 4, md: 8 })}
					bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
				>
					<Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
						<Text
							color={"white"}
							fontWeight={700}
							lineHeight={1.2}
							fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
							fontFamily="Dancing script"
						>
							❞ 𝑶𝒏𝒍𝒚 𝒂 𝒇𝒂𝒊𝒍𝒖𝒓𝒆 𝒂𝒃𝒂𝒏𝒅𝒐𝒏𝒔 𝒉𝒊𝒔 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒍𝒆𝒔 𝒂𝒏𝒅 𝒑𝒓𝒊𝒅𝒆 ❞
						</Text>
						<Stack direction={"row"}>
							<Link
								_hover={{ textDecoration: "none" }}
								target={"_blank"}
								href="https://medium.com/@pd_13"
							>
								<Image src="https://img.shields.io/badge/Read%20my%20blogs-000000?style=for-the-badge&logo=medium&logoColor=white&?labelColor=white" />
							</Link>

							<ScrollLink
								activeClass="active"
								to={"Contact"}
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								<Image src="https://img.shields.io/badge/Talk%20to%20me-000000?style=for-the-badge&logo=&logoColor=white&?labelColor=white" />
							</ScrollLink>
						</Stack>
					</Stack>
				</VStack>
			</Flex>
		</Flex>
	);
};

export default Home;
