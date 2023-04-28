import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
	return (
		<>
			<Heading
				style={{ color: "#FFB005" }}
				size={["lg", "xl"]}
				pb={["-3", "3", "5"]}
				mt="4"
				mb="4"
			>
				GitHub Stats
			</Heading>

			<Image
				align="left"
				id="github-streak-stats"
				src="https://github-readme-streak-stats.herokuapp.com/?user=pratikderepatil&theme=vision-friendly-dark&dates=FFB005&currStreakNum=FFB005&background=FFFBEC&currStreakLabel=FFB005"
				alt="Pratik"
				w={["90%", "45%"]}
				mb="2"
			/>
			<Flex
				direction={["column", "row"]}
				justifyContent="center"
				alignItems={"center"}
				rowGap={"2"}
				columnGap={4}
				pb="5"
			>
				<Image
					align="left"
					id="github-top-langs"
					src="https://github-readme-stats.vercel.app/api/top-langs/?username=pratikderepatil&title_color=FFA000&text_color=FFB005&bg_color=FFFBEC&layout=compact"
					alt="Pratik"
					h={["90%", "45%"]}
					w={["90%", "45%"]}
				/>

				<Image
					id="github-stats-card"
					src="https://github-readme-stats.vercel.app/api?username=pratikderepatil&title_color=FFA000&text_color=FFB005&show_icons=true&icon_color=FFB005&bg_color=FFFBEC"
					h={["90%", "45%"]}
					w={["90%", "45%"]}
					alt="Pratik"
				/>
			</Flex>
		</>
	);
};

export default Stats;
