import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
	return (
		<>
			<Heading
				style={{ color: "#FFB005" }}
				size={["lg", "xl"]}
				pb={["-3", "3", "5"]}
			>
				GitHub Stats
			</Heading>
			<Flex
				direction={["column", "row"]}
				justifyContent="center"
				alignItems={"center"}
				rowGap={"4"}
				columnGap={4}
			>
				<Image
					align="left"
					src="https://github-readme-streak-stats.herokuapp.com/?user=pratikderepatil&theme=vision-friendly-dark&dates=FFB005&currStreakNum=FFB005&background=FFFFFF&currStreakLabel=FFB005"
					alt="Pratik"
					w={["90%", "45%"]}
				/>
				<Image
					src="https://github-readme-stats.vercel.app/api?username=pratikderepatil&title_color=FFA000&text_color=FFB005&show_icons=true&icon_color=FFB005&bg_color=FFFFFF"
					w={["90%", "45%"]}
					alt="Pratik"
				/>
			</Flex>
		</>
	);
};

export default Stats;
