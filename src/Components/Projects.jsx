import {
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
import homepagedark from "../Data/images/shop/homepagedark.png";
import homepagelight from "../Data/images/shop/homepagelight.png";
import logindark from "../Data/images/shop/logindark.png";
import loginlight from "../Data/images/shop/loginlight.png";
import signupdark from "../Data/images/shop/signupdark.png";
import signuplight from "../Data/images/shop/signuplight.png";

const Projects = () => {
	return (
		<div id="Projects">
			<Center>
				<Heading
					size={["lg", "xl"]}
					style={{ color: "#FFB005" }}
					pb={["5", "10"]}
				>
					Projects
				</Heading>
			</Center>
			<SimpleGrid columns={[1, 2]} w={["90%"]} m="auto" gap={4}>
				{projects?.map((project) => {
					return (
						<Flex
							borderWidth={1}
							p="3"
							gap={3}
							direction="column"
							key={project.projectname}
							m="auto"
							borderRadius={10}
						>
							{/* <Carousel> */}
							{project.projectimages?.map((image) => {
								return <Image src={image} alt={image} key={image} />;
							})}
							<div>
								<p className="legend">Legend 1</p>
							</div>
							{/* </Carousel> */}
							<Flex gap={3} wrap={"wrap"}>
								{project.tags?.map((tag) => {
									return (
										<Tag key={tag} size={["sm", "lg"]} colorScheme="orange">
											<TagLabel>{tag}</TagLabel>
										</Tag>
									);
								})}
							</Flex>
							<Flex gap={3} wrap={"wrap"}>
								{project.techstack?.map((tag) => {
									return (
										<Tag key={tag} size={["sm", "lg"]} colorScheme="gray">
											<TagLabel>{tag}</TagLabel>
										</Tag>
									);
								})}
							</Flex>
							<Heading size={["md", "lg"]} style={{ color: "#FFDE59" }}>
								{project.projectname}
							</Heading>
							<Text fontSize={["md", "lg"]}>{project.description}</Text>
							<SimpleGrid columns={2}>
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
										size={["xs", "sm"]}
										variant={"outline"}
										colorScheme="blackAlpha"
										rightIcon={<AiOutlineLink />}
									>
										Deployment
									</Button>
								</a>
								<a href={project.githublink} target="_blank" rel="noreferrer">
									<Button
										size={["xs", "sm"]}
										colorScheme="blackAlpha"
										variant={"outline"}
										rightIcon={<AiOutlineGithub />}
									>
										GitHub
									</Button>
								</a>
							</Flex>
						</Flex>
					);
				})}
			</SimpleGrid>
		</div>
	);
};

export default Projects;
