import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	Image,
	ListItem,
	SimpleGrid,
	Stack,
	Tag,
	TagLabel,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
// https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=Github
// https://img.shields.io/badge/Deployment-FF3850?style=for-the-badge&logo=Linkfire&logoColor=white
import { projects } from "../Data/projects";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Projects = () => {
	let [show, setShow] = useState(2);
	const handleshow = () => {
		show === 2 ? setShow(7) : setShow(2);
	};
	return (
		<Flex flexDirection={"column"} id="projects" pt="5" pb="5">
			<Center>
				<Heading
					size={["lg", "xl"]}
					style={{ color: "#FFB005" }}
					pb={["5", "10"]}
				>
					Projects
				</Heading>
			</Center>
			<SimpleGrid columns={1} w={["90%"]} m="auto" gap={[4, 4]} h="100%">
				{projects?.map((project, i) => {
					return i < show ? (
						<Stack key={project.projectname} pt="5">
							<Flex direction={["column", "row"]} m="auto" gap={["0", "4"]}>
								<Box w={["full", "50%"]}>
									<Carousel
										autoPlay="true"
										infiniteLoop="true"
										showArrows={true}
										showThumbs={true}
									>
										{project.projectimages?.map((image, key) => {
											return (
												<div key={key}>
													<Image src={image} alt={image} borderTopRadius={10} />
												</div>
											);
										})}
									</Carousel>
								</Box>
								<Flex
									direction={"column"}
									gap={3}
									p="3"
									w={["full", "50%"]}
									mt={["-8", "-3"]}
								>
									<Heading size={["md", "lg"]} style={{ color: "#FFB005" }}>
										{project.projectname}
									</Heading>
									<Flex gap={3} wrap={"wrap"}>
										{project.tags?.map((tag) => {
											return (
												<Tag key={tag} size={["md", "lg"]} colorScheme="orange">
													<TagLabel>{tag}</TagLabel>
												</Tag>
											);
										})}
									</Flex>
									<Flex gap={3} wrap={"wrap"}>
										{project.techstack?.map((tag) => {
											return (
												<Tag key={tag} size={["md", "lg"]} colorScheme="gray">
													<TagLabel>{tag}</TagLabel>
												</Tag>
											);
										})}
									</Flex>
									<Text fontSize={["md", "lg"]}>{project.description}</Text>
									<SimpleGrid
										columns={[1, 2]}
										gap={["2", "4"]}
										justifyContent={"space-between"}
										grid-template-columns="repeat(auto-fill, minmax(120px, 1fr))"
										grid-template-rows="masonry"
									>
										<Flex direction={"column"}>
											<Text fontSize={["md", "lg"]} as="b" w="full">
												Features:
											</Text>
											<UnorderedList pl={4}>
												{project.features?.map((feature) => {
													return <ListItem key={feature}>{feature}</ListItem>;
												})}
											</UnorderedList>
										</Flex>
										{project.areaofresponsibility === null ? (
											<></>
										) : (
											<Flex direction={"column"} w="full">
												<Text fontSize={["md", "lg"]} as="b">
													Area of Responsibility:
												</Text>
												<UnorderedList pl={4}>
													{project.areaofresponsibility?.map((feature) => {
														return <ListItem key={feature}>{feature}</ListItem>;
													})}
												</UnorderedList>
											</Flex>
										)}
									</SimpleGrid>
									<Flex gap={3}>
										<a
											href={project.deploymentlink}
											target="_blank"
											rel="noreferrer"
										>
											<Image
												size={["sm", "lg"]}
												src="https://img.shields.io/badge/Deployment-FF3850?style=for-the-badge&logo=Linkfire&logoColor=white"
											/>
										</a>
										<a
											href={project.githublink}
											target="_blank"
											rel="noreferrer"
										>
											<Image
												size={["sm", "lg"]}
												src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=Github"
											/>
										</a>
									</Flex>
								</Flex>
							</Flex>
							{i === projects.length - 1 ? (
								""
							) : (
								<Divider colorScheme={"yellow"} borderWidth="5" mb={[2, 4]} />
							)}
						</Stack>
					) : (
						<></>
					);
				})}
				<Flex justifyContent={"right"}>
					<Button
						variant={"link"}
						colorScheme="yellow"
						rightIcon={show === 2 ? <MdExpandMore /> : <MdExpandLess />}
						onClick={handleshow}
					>
						{show === 2 ? "Show More" : "Show Less"}
					</Button>
				</Flex>
			</SimpleGrid>
		</Flex>
	);
};

export default Projects;
