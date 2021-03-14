import React, {useState} from "react";
import {Center, Box, Flex, Text, HStack} from "@chakra-ui/react";
import styled from "styled-components";



const NavButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

`

const Navbar = (props) => {
    return (
        <Flex justify="space-between" background="nav.background" py={4} w="100%" px={20} boxShadow="6px 5px 5px #ababab">
            <Box></Box>
            <HStack spacing="30px" pt="10px">
                <NavButton>
                    <Text color="nav.button" fontSize="20px" fontWeight={500}> Home </Text>
                </NavButton>
                <NavButton>
                    <Text color="nav.button" fontSize="20px" fontWeight={500}> Work </Text>
                </NavButton>
                <NavButton>
                    <Text color="nav.button" fontSize="20px" fontWeight={500}> About </Text>
                </NavButton>
                <NavButton>
                    <Text color="nav.button" fontSize="20px" fontWeight={500}> Contact </Text>
                </NavButton>
                <NavButton>
                    <Text color="nav.button" fontSize="20px" fontWeight={500}> Resume </Text>
                </NavButton>
            </HStack>
        </Flex>
    )
}

export default Navbar;