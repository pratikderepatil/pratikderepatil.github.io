import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Stack,
	Textarea,
	Tooltip,
	useToast,
	useClipboard,
	useColorModeValue,
	VStack,
	Center,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const toast = useToast();
	const { hasCopied, onCopy } = useClipboard("pratikdere333@gmail.com");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_tkkzgoa",
				"template_b7gnppv",
				form.current,
				"wDcJ3yTpLEm6rTKJ2"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<Flex
			w="100%"
			bgColor={"#FFFBEC"}
			align="center"
			justify="center"
			id="Contact"
		>
			<Box borderRadius="lg" p={5}>
				<Box>
					<VStack spacing={3}>
						<Center>
							<Heading
								size={["lg", "xl"]}
								style={{ color: "#FFB005" }}
								pb={["5", "5"]}
							>
								Get in touch
							</Heading>
						</Center>

						<Stack
							spacing={{ base: 4, md: 8, lg: 20 }}
							direction={{ base: "column", md: "row" }}
						>
							<Stack
								align="center"
								justify="space-around"
								direction={{ base: "row", md: "column" }}
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
								</Link>

								<Link
									target="_blank"
									href="https://www.linkedin.com/in/pratik-derepatil/"
								>
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
								</Link>
							</Stack>

							<Box
								bg={useColorModeValue("white", "gray.700")}
								borderRadius="lg"
								p={8}
								color={useColorModeValue("gray.700", "whiteAlpha.900")}
								shadow="base"
							>
								<VStack spacing={5}>
									<form ref={form} onSubmit={sendEmail}>
										<FormControl isRequired>
											<FormLabel>Name</FormLabel>
											<InputGroup>
												<InputLeftElement children={<BsPerson />} />
												<Input
													onPaste={(e) => {
														e.preventDefault();
														return false;
													}}
													onCopy={(e) => {
														e.preventDefault();
														return false;
													}}
													type="text"
													name="to_name"
													placeholder="Your Name"
												/>
											</InputGroup>
										</FormControl>
										<FormControl isRequired>
											<FormLabel>Email</FormLabel>
											<InputGroup>
												<InputLeftElement children={<MdOutlineEmail />} />
												<Input
													onPaste={(e) => {
														e.preventDefault();
														return false;
													}}
													onCopy={(e) => {
														e.preventDefault();
														return false;
													}}
													type="email"
													name="from_name"
													placeholder="Your Email"
												/>
											</InputGroup>
										</FormControl>
										<FormControl isRequired>
											<FormLabel>Message</FormLabel>
											<Textarea
												onPaste={(e) => {
													e.preventDefault();
													return false;
												}}
												onCopy={(e) => {
													e.preventDefault();
													return false;
												}}
												name="message"
												placeholder="Your Message"
												rows={6}
												resize="none"
											/>
										</FormControl>
										<Button
											onClick={() =>
												toast({
													title: "Sucess!",
													description: "Thanks for connecting.",
													status: "success",
													duration: 9000,
													isClosable: true,
												})
											}
											type="submit"
											value={"send"}
											colorScheme="yellow"
											color="black"
											size={"sm"}
											w="full"
											mt={"5"}
										>
											Send Message
										</Button>
									</form>
								</VStack>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
