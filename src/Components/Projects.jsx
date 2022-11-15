import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	ListItem,
	SimpleGrid,
	Tag,
	TagLabel,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { projects } from "../Data/projects";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
	return (
		<Flex
			flexDirection={"column"}
			id="Projects"
			bgColor="#FFFBEC"
			pt="5"
			pb="5"
		>
			<Center>
				<Heading
					size={["lg", "xl"]}
					style={{ color: "#FFB005" }}
					pb={["5", "10"]}
				>
					Projects
				</Heading>
			</Center>
			<SimpleGrid columns={1} w={["90%"]} m="auto" gap={4}>
				{projects?.map((project) => {
					return (
						<Flex
							direction={["column", "row"]}
							key={project.projectname}
							m="auto"
						>
							<Box w={["full", "50%"]}>
								<Carousel autoPlay="true" infiniteLoop="true">
									{project.projectimages?.map((image) => {
										return (
											<div key={image}>
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
								<Heading size={["md", "lg"]} style={{ color: "#FFDE59" }}>
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
								<SimpleGrid columns={[1, 2]}>
									<Flex direction={"column"}>
										<Text fontSize={["md", "lg"]} as="b">
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
										<Flex direction={"column"}>
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
										<Button
											size={["sm", "md"]}
											variant={"outline"}
											colorScheme="blackAlpha"
											rightIcon={<AiOutlineLink />}
										>
											Deployment
										</Button>
									</a>
									<a href={project.githublink} target="_blank" rel="noreferrer">
										<Button
											size={["sm", "md"]}
											colorScheme="blackAlpha"
											variant={"outline"}
											rightIcon={<AiOutlineGithub />}
										>
											GitHub
										</Button>
									</a>
								</Flex>
							</Flex>
						</Flex>
					);
				})}
			</SimpleGrid>
		</Flex>
	);
};

export default Projects;
