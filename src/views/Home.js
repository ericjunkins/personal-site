import React, {useState} from "react";
import {Center, Box, Flex, Text, Divider} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import SkillsChart from "../components/SkillsChart";
import Work from "./../components/Work";
import About from "../components/About";
import Contact from "./../components/Contact";

const Home = (props) => {

    return (
        <Center w="100vw" bg="site.background">
            <Box w="100%" bg="site.background">
                <Navbar />
                <Introduction />
                <SkillsChart />
                <Work />
                <About />
                <Center w="100%">
                    <Box borderBottom="1px solid #000" w="80%" maxW="1500px">

                    </Box>
                </Center>

                <Contact />
            </Box>
        </Center>
    )
}

export default Home;