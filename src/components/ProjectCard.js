import React from "react";
import {Center, Flex, Box, Text, Icon, HStack, VStack} from "@chakra-ui/react";


const ProjectCard = ({icon, title, toggle, location}) => {

    const cardClick = () => {
        toggle(title)
        // window.location.replace("/#work-container")
    }

    return (
        <Center w="100%" h="100%" border="2px solid #3c97b0" borderRadius="5px" onClick={cardClick} cursor="pointer">
            <VStack>
                <Icon as={icon} color="nav.button" boxSize="60px"/>
                <Text fontSize="20px" fontWeight={500} color="nav.button"> {title} </Text>
            </VStack>
        </Center>
    )
}

export default ProjectCard;