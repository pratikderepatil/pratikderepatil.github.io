import {
	Box,
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	Image,
	useColorModeValue,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";
import React from "react";
import logo from "../Data/images/name1.png";
import { Link } from "react-scroll";

const Links = ["About", "Skills", "Experience", "Projects", "Testimonials"];

const NavLink = ({ children }) => (
	<Link
		style={{ cursor: "pointer" }}
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		activeClass="active"
		to={children}
		spy={true}
		smooth={true}
		offset={-100}
		duration={500}
	>
		{children}
	</Link>
);

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Flex
				p={4}
				pl={[4, 8]}
				justifyContent="space-between"
				mb={0}
				display={{ base: "none", lg: "flex" }}
				bgColor="#FFFBEC"
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
								key={ele}
							>
								<Button
									size="lg"
									fontFamily={"heading"}
									pl={"3"}
									pr={"3"}
									color="black"
									variant={"unstyled"}
								>
									<NavLink key={ele}>{ele}</NavLink>
								</Button>
								<Divider w={"75%"} colorScheme />
							</Box>
						);
					})}
				</HStack>
				<Image src={logo} w={["50%", "50%", "30%", "20%"]} />
			</Flex>
			<Flex
				p={4}
				pl={[4, 8]}
				justifyContent="space-between"
				mb={0}
				bgColor="#FFFBEC"
				display={{ base: "flex", lg: "none" }}
			>
				<Button ref={btnRef} size={"2xl"} variant="unstyled" onClick={onOpen}>
					<TfiMenu w={10} />
				</Button>
				<Drawer
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					finalFocusRef={btnRef}
				>
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

						<DrawerBody bgColor={"whitesmoke"} w={"93%"}>
							<VStack pl={4} pt={4} gap={5} w={"75%"} alignItems="left">
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
											key={ele}
										>
											<Button
												size="lg"
												fontFamily={"heading"}
												pl={"4"}
												color="black"
												variant={"unstyled"}
												ref={btnRef}
												onClick={onClose}
											>
												<NavLink key={ele}>{ele}</NavLink>
											</Button>
											<Divider w={"75%"} colorScheme />
										</Box>
									);
								})}
							</VStack>
						</DrawerBody>
						<DrawerFooter
							bgColor={"#FFDE59"}
							borderTopWidth="1px"
							w={"93%"}
							borderBottomRightRadius={"25"}
							fontFamily={"heading"}
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
