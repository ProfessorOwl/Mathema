"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
    /* Put your mantine theme override here */
    fontSizes: {
        md: "16pt",
    },
    primaryColor: "teal",
    lineHeights: {
        xs: "1.6",
        sm: "1.65",
        md: "1.7",
        lg: "1.75",
        xl: "1.8",
    },
});
