"use client";

import { Container, Grid, GridCol, ScrollAreaAutosize } from "@mantine/core";
import { Sideview78 } from "../ui/sideview78";
import { Sideview910 } from "../ui/sideview910";
import { usePathname } from "next/navigation";

export function LayoutGrid({ children }: { children: any }) {
  const pathname = usePathname();
  const showSideview78 =  pathname.startsWith("/klasse78") 
  const showSideview910 = pathname.startsWith("/klasse910");

  return (
    <Grid justify="space-between" gutter={0}>
      {showSideview78 && (
        <GridCol span={2.5}>
          <Sideview78 />
        </GridCol>
      )}
      {showSideview910 && (
        <GridCol span={2.5}>
          <Sideview910/>
        </GridCol>
      )}
      <GridCol span={showSideview78 || showSideview910 ? 9.5 : 12}>
       <ScrollAreaAutosize mah={"calc(100vh - 56px)"}><Container size={"md"} pt={20}>{children}</Container></ScrollAreaAutosize>
      </GridCol>
    </Grid>
  );
}