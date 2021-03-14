import {extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        nav: {
            background: "#fafafa",
            button: "#2f768a",
            boxShadow: "10px 5px 5px red"
        },
        site: {
            background: "#fafafa"
        }
    }
})

export default theme;