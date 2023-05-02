import {
	Box,
	Button,
	Container,
	Flex,
	Stack,
	Text,
	useClipboard,
	Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const Footer = () => {
	const { hasCopied, onCopy } = useClipboard("pratikdere333@gmail.com");
	return (
		<Box w="100%" bgColor={"#FFFBEC"}>
			<Container
				as={Stack}
				maxW={"90%"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={3}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Text as="b" fontSize={["sm", "lg"]}>
					© 2022 Pratik Derepatil. All rights reserved
				</Text>
				<Flex>
					<Tooltip label={"Contact Me"} closeOnClick={false} hasArrow>
						<Button
							size={["xs", "md"]}
							variant="none"
							leftIcon={<HiPhone />}
							id="contact-phone"
						>
							<a href="tel:+917745081531">+91-77450-81531</a>
						</Button>
					</Tooltip>
					<Tooltip
						label={hasCopied ? "Email Copied!" : "Copy Email"}
						closeOnClick={false}
						hasArrow
					>
						<Button
							size={["xs", "md"]}
							variant="none"
							leftIcon={<HiEnvelope />}
							onClick={onCopy}
							id="contact-email"
						>
							pratikdere333@gmail.com
						</Button>
					</Tooltip>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
