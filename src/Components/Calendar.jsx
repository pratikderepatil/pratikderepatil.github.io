import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Stats from "./Stats";

const Calendar = () => {
	const selectLastHalfYear = (contributions) => {
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
		const shownMonths = 7;

		return contributions.filter((day) => {
			const date = new Date(day.date);
			const monthOfDay = date.getMonth();

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			);
		});
	};
	return (
		<Flex
			bgColor="#FFFBEC"
			w="full"
			alignItems={"center"}
			justifyContent="center"
			direction="column"
			p={["2%", "auto"]}
			pt="5"
		>
			<Heading size={["lg", "xl"]} pb={["5", "10"]}>
				Days I <span style={{ color: "#FFB005" }}>Code</span>
			</Heading>
			<Box p={"3%"} borderWidth="1px" borderRadius="lg" w={["90%", "auto"]}>
				<GitHubCalendar
					username="pratikderepatil"
					transformData={selectLastHalfYear}
					hideColorLegend
					blockSize={24}
					fontSize={15}
					color={"#FFDE59"}
					blockMargin={5}
					style={{ fontFamily: "open sans" }}
				>
					<ReactTooltip delayShow={20} html />
				</GitHubCalendar>
			</Box>
			<Stats />
		</Flex>
	);
};

export default Calendar;
