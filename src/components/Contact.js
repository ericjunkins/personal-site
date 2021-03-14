import React from "react";
import {Center, Flex, Box, Text, Icon, HStack, Link} from "@chakra-ui/react";


import {FaLinkedin, FaFacebookSquare} from "react-icons/fa";

const Contact = (props) => {

    return (
        <Center w="100%" py={10}> 
            <Box w="80%" maxW="1500px" textAlign="start" px={5} textAlign="center">
                <Text fontSize="30px"> Find Me </Text>
                <Center py={10}>
                    <HStack spacing="10px">
                        <Icon boxSize="40px" as={FaLinkedin} color="nav.button" />
                        <Icon boxSize="40px" as={FaFacebookSquare} color="nav.button" />
                    </HStack>
                </Center>
                <Text> <Link href="mailto:eric.junkins@colorado.edu"> eric.junkins@colorado.edu </Link></Text>
            </Box>
        </Center>

    )
}

export default Contact;