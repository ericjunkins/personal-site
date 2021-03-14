import React from "react";
import {Center, Flex, Box, Text, SimpleGrid, Image, HStack, VStack} from "@chakra-ui/react";

import Myself from "./../assets/avatar.svg";

const Introduction = (props) => {
    return (
        <Center textAlign="start" w="100%" pt={15} >
            <Flex justify="space-between" w="80%" maxW="1200px" px={20}>
                <Center h="200px">
                <VStack textAlign="start" px={5}>
                    <Text fontSize="48px" w="100%" > Hi, I'm Eric </Text>
                    <Text fontSize="22px"> I like to design and build robots, mechanisms, electronics, and generally tinker with things. I employ rapid prototyping principles to my designs for quick and inexpensive iteration. I also dabble with data visualization, front end development, and UI design</Text>
                </VStack>
                </Center>
                <Image src={Myself} alt="Robot" boxSize="200px"/>
            </Flex>
        </Center>
    )
}

export default Introduction;