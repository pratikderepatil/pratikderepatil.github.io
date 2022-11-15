import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const Footer = () => {
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
					<Button size={["xs", "md"]} variant="none" leftIcon={<HiPhone />}>
						<a href="tel:+917745081531">+91-77450-81531</a>
					</Button>
					<Button size={["xs", "md"]} variant="none" leftIcon={<HiEnvelope />}>
						<a href="mailto:pratikdere333@gmail.com">pratikdere333@gmail.com</a>
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
