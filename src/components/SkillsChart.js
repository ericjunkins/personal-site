import React from "react";
import {Center, Flex, Text, Box, VStack} from "@chakra-ui/react";
import D3Container from "./D3Container";

import {GenerateChart} from "./d3/SpiderChart";
import {skills} from "../data/skillset";

const SkillsChart = (props) => {

    return (
        <Center pt={0} w="100%">
            <VStack w="100%" h="100%">
                {/* <Text fontSize="28px"> What do I do? </Text> */}
                <Box  h="780px" w="80%" maxW="900px">
                    <D3Container 
                        title="spider-chart"
                        generate={GenerateChart}
                        data={skills}
                        color="#49bede"
                        margin={{
                            top: 20,
                            bottom: 20,
                            left: 20,
                            right: 20
                        }}
                    />
                </Box>
            </VStack>
        </Center>
    )
}

export default SkillsChart;