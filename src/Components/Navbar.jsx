import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	Image,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";
import React from "react";
import logo from "../Data/images/name1.png";
import { Link } from "react-scroll";

const Links = [
	{ id: "home", class: "nav-link home" },
	{ id: "about", class: "nav-link about" },
	{ id: "skills", class: "nav-link skills" },
	{ id: "experience", class: "" },
	{ id: "projects", class: "nav-link projects" },
	{ id: "contact", class: "nav-link contact" },
];
// https://drive.google.com/uc?id=1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD&export=download
const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const NavLink = ({ children }) => (
		<Link
			style={{ cursor: "pointer" }}
			px={2}
			py={1}
			rounded={"md"}
			activeClass="active"
			to={children}
			spy={true}
			smooth={true}
			offset={-100}
			duration={500}
			onClick={onClose}
		>
			{children}
		</Link>
	);
	return (
		<>
			<Flex
				w="full"
				justifyContent="space-between"
				p={6}
				display={{ base: "none", lg: "flex" }}
				bgColor="#FFFBEC"
				id="nav-menu"
				zIndex={18}
				pos={"fixed"}
			>
				<HStack w={"75%"} gap={5} alignItems="left">
					{Links.map((ele) => {
						return (
							<Box
								borderBottomWidth={2}
								borderBottomLeftRadius={"25"}
								borderTopWidth={2}
								borderTopRightRadius={"25"}
								pl={"3"}
								pr={"3"}
								borderColor="#FFDE59"
								key={ele.id}
							>
								<Button
									size="lg"
									fontFamily={"heading"}
									pl={"3"}
									pr={"3"}
									color="black"
									variant={"unstyled"}
								>
									<NavLink key={ele.id} className={ele.class}>
										{ele.id}
									</NavLink>
								</Button>
							</Box>
						);
					})}
					<Box
						borderBottomWidth={2}
						borderBottomLeftRadius={"25"}
						borderTopWidth={2}
						borderTopRightRadius={"25"}
						pl={"3"}
						pr={"3"}
						borderColor="#FFDE59"
					>
						<Button
							size="lg"
							fontFamily={"heading"}
							pl={"3"}
							pr={"3"}
							color="black"
							variant={"unstyled"}
							className="nav-link resume"
						>
							<a
								href="https://drive.google.com/uc?id=1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD&export=download"
								id="resume-button-1"
								className="nav-link resume"
								target="_blank"
								rel="noreferrer"
							>
								Resume
							</a>
						</Button>
					</Box>
				</HStack>
				<Image src={logo} w={["50%", "50%", "30%", "18%"]} />
			</Flex>
			<Flex
				p={4}
				w="full"
				justifyContent="space-between"
				mb={0}
				bgColor="#FFFBEC"
				display={{ base: "flex", lg: "none" }}
				id="nav-menu"
				pos={"fixed"}
				zIndex={1}
			>
				<Button size={"2xl"} variant="unstyled" onClick={onOpen}>
					<TfiMenu w={10} />
				</Button>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent bgColor="transparent">
						<DrawerHeader
							bgColor={"#FFDE59"}
							borderBottomRightRadius={"25"}
							borderBottomWidth="1px"
							fontFamily={"heading"}
							fontWeight="bold"
						>
							Menu
						</DrawerHeader>

						<DrawerBody bgColor={"whitesmoke"} w={"93%"} onClose={onClose}>
							<VStack
								pl={4}
								pt={4}
								gap={5}
								w={"75%"}
								alignItems="left"
								onClick={onClose}
							>
								{Links.map((ele) => {
									return (
										<Box
											borderBottomWidth={2}
											borderBottomLeftRadius={"25"}
											borderTopWidth={2}
											borderTopRightRadius={"25"}
											pl={"4"}
											pr={"4"}
											borderColor="#FFDE59"
											key={ele.id}
										>
											<Button
												size="lg"
												fontFamily={"heading"}
												pl={"4"}
												color="black"
												variant={"unstyled"}
											>
												<NavLink key={ele.id} className={ele.class}>
													{ele.id}
												</NavLink>
											</Button>
										</Box>
									);
								})}
								<Box
									borderBottomWidth={2}
									borderBottomLeftRadius={"25"}
									borderTopWidth={2}
									borderTopRightRadius={"25"}
									pl={"3"}
									pr={"3"}
									borderColor="#FFDE59"
								>
									<Button
										size="lg"
										fontFamily={"heading"}
										pl={"3"}
										pr={"3"}
										color="black"
										variant={"unstyled"}
										id="resume-button-1"
									>
										<a
											href="https://drive.google.com/uc?id=1-XCEzhMjrPIuctcDcL6dQ7AkNocQTmQD&export=download"
											className="nav-link resume"
											id="resume-link-1"
											target="_blank"
											rel="noreferrer"
										>
											Resume
										</a>
									</Button>
								</Box>
							</VStack>
						</DrawerBody>
						<DrawerFooter
							bgColor={"#FFDE59"}
							borderTopWidth="1px"
							w={"93%"}
							borderBottomRightRadius={"25"}
							fontFamily={"heading"}
							onClick={onClose}
						>
							~ pratikderepatil
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
				<Image src={logo} w={["50%", "50%", "30%", "20%"]} />
			</Flex>
		</>
	);
};

export default Navbar;
