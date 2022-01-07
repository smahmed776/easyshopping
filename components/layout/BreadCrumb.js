import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Breadcrumbs, Box } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { useRouter } from "next/router";

const BreadCrumb = () => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const { pathname } = useRouter();

  useEffect(() => {
    const paths = pathname.split("/");
    setBreadCrumbs([]);
    paths.forEach((path) => {
      if (path !== "") {
        setBreadCrumbs((prev) => {
          if (prev.length > 0) {
            return [
              ...prev,
              {
                title: `${path.charAt(0).toUpperCase()}${path.slice(1)}`,
                url: `/${prev[0].url.replace("/", "")}/${path}`,
              },
            ];
          }
          return [
            ...prev,
            {
              title: `${path.charAt(0).toUpperCase()}${path.slice(1)}`,
              url: `/${path}`,
            },
          ];
        });
      }
    });
  }, [pathname]);
  if (breadCrumbs.length > 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Breadcrumbs separator={<ChevronRight fontSize="small" />}>
          <Link href="/" sx={{ color: "primary.main" }} passHref>
            <Box component={"a"} sx={{"&:hover": {color: "primary.main"}}}>Home</Box>
          </Link>

          {breadCrumbs.map((nav, index, array) => {
           return (
             <>
             { index !== array.length -1 && (

           <Link
              href={nav.url}
              sx={{ color: "primary.main" }}
              key={nav.title}
              passHref
            >
              <Box component={"a"} sx={{"&:hover": {color: "primary.main"}}}>{nav.title}</Box>
            </Link>
             ) }
             {index === array.length - 1 && (
             <Box component={"span"} key={nav.title}>{nav.title}</Box>

             )}
             </>
           )
          })}
        </Breadcrumbs>
      </Box>
    );
  }
  return <div></div>;
};

export default BreadCrumb;
