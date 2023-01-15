import {
	Button,
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
import { MdWork, MdExpandMore, MdExpandLess } from "react-icons/md";
import { BsLink45Deg, BsFillStarFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

const Experience = () => {
	let [show, setShow] = useState(3);
	const handleshow = () => {
		show === 3 ? setShow(10) : setShow(3);
	};
	return (
		<Flex
			id="Experience"
			flexDirection={"column"}
			p={["2%", "auto"]}
			bgColor="#FFFBEC"
			pt="5"
			w="full"
		>
			<Center>
				<Heading size={["lg", "xl"]} pb={["5", "10"]}>
					My <span style={{ color: "#FFB005" }}>Timeline</span>
				</Heading>
			</Center>

			<VerticalTimeline lineColor={"#FFB005"}>
				{experience.map((ele, i) => {
					return i < show ? (
						<>
							<VerticalTimelineElement
								key={ele.title}
								className="vertical-timeline-element--education"
								contentStyle={{ background: "", color: "" }}
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
									<Text
										as={"cite"}
										fontSize={["sm", "lg"]}
										color="black"
										mb="-4"
									>
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
							{i === experience.length - 1 ? (
								<VerticalTimelineElement
									iconStyle={{ background: "#FFFBEC", color: "#FFB005" }}
									icon={<BsFillStarFill />}
								/>
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					);
				})}
				<Flex justifyContent={"right"}>
					<Button
						variant={"link"}
						colorScheme="yellow"
						rightIcon={show === 3 ? <MdExpandMore /> : <MdExpandLess />}
						onClick={handleshow}
					>
						{show === 3 ? "Show More" : "Show Less"}
					</Button>
				</Flex>
			</VerticalTimeline>
		</Flex>
	);
};

export default Experience;
