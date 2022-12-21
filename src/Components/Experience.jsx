import {
	Center,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../Data/experience";
import { MdWork } from "react-icons/md";
import { BsLink45Deg, BsFillStarFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

const Experience = () => {
	return (
		<Flex
			id="Experience"
			flexDirection={"column"}
			p={["2%", "auto"]}
			w={["90%", "80%"]}
		>
			<Center>
				<Heading size={["lg", "xl"]} pb={["5", "10"]}>
					My <span style={{ color: "#FFB005" }}>Timeline</span>
				</Heading>
			</Center>

			<VerticalTimeline lineColor={"#FFB005"}>
				{experience.map((ele) => {
					return (
						<VerticalTimelineElement
							key={ele.title}
							className="vertical-timeline-element--education"
							contentStyle={{ background: "#FFFBEC", color: "#FFB005" }}
							contentArrowStyle={{
								borderRight: "16px solid  #FFB005",
							}}
							date={ele.date}
							iconStyle={{
								background: "#FFFBEC",
								color: "#FFB005",
							}}
							icon={ele.logo ? <MdWork /> : <FaGraduationCap />}
							p="4"
						>
							<Flex flexDirection={"column"} gap="2">
								<Heading as="h1" size={["sm", "md"]}>
									<Flex justifyContent={"space-between"}>
										{ele.title}
										{ele.link === "" ? (
											<></>
										) : (
											<a href={ele.link} target="_blank" rel="noreferrer">
												<BsLink45Deg size={"4vh"} />
											</a>
										)}
									</Flex>
								</Heading>
								<Text as={"cite"} fontSize={["sm", "lg"]} color="black" mb="-4">
									{ele.subtitle}
								</Text>
								<Text color={"black"} fontSize={["sm", "lg"]}>
									<UnorderedList>
										{ele.description.map((elem, i) => {
											return <ListItem key={i}>{elem}</ListItem>;
										})}
									</UnorderedList>
								</Text>
							</Flex>
						</VerticalTimelineElement>
					);
				})}
				<VerticalTimelineElement
					iconStyle={{ background: "#FFFBEC", color: "#FFB005" }}
					icon={<BsFillStarFill />}
				/>
			</VerticalTimeline>
		</Flex>
	);
};

export default Experience;
