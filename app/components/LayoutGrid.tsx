"use client";

import { Container, Grid, GridCol, ScrollAreaAutosize } from "@mantine/core";
import { Sideview78 } from "../ui/sideview78";
import { Sideview910 } from "../ui/sideview910";
import { DocumentOutline } from "./DocumentOutline";
import { usePathname } from "next/navigation";

export function LayoutGrid({ children }: { children: any }) {
    const pathname = usePathname();
    const showSideview78 = pathname.startsWith("/klasse78");
    const showSideview910 = pathname.startsWith("/klasse910");
    const showOutline = showSideview78 || showSideview910;

    return (
        <Grid justify="space-between" gutter={0}>
            {showSideview78 && (
                <GridCol span={2.5}>
                    <Sideview78 />
                </GridCol>
            )}
            {showSideview910 && (
                <GridCol span={2.5}>
                    <Sideview910 />
                </GridCol>
            )}
            <GridCol span={showOutline ? 7 : 12}>
                <ScrollAreaAutosize mah={"calc(100vh - 56px)"}>
                    <Container size={"md"} pt={20}>
                        {children}
                    </Container>
                </ScrollAreaAutosize>
            </GridCol>
            {showOutline && (
                <GridCol span={2.5}>
                    <DocumentOutline />
                </GridCol>
            )}
        </Grid>
    );
}
