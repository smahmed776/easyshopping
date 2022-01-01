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
    setBreadCrumbs([])
    paths.forEach((path) => {
      if (path !== "") {
        setBreadCrumbs((prev) => {
          if(prev.length > 0){
            
            return [...prev, {title: `${path.charAt(0).toUpperCase()}${path.slice(1)}`, url: `/${prev[0].url.replace("/", '')}/${path}`}]
          }
         return [...prev, { title:`${path.charAt(0).toUpperCase()}${path.slice(1)}`, url: `/${path}` }]
         });
      }
    });
  }, [pathname]);
  return (
    <Box sx={{p:2}}>
      <Breadcrumbs separator={<ChevronRight fontSize="small" />}>
        {breadCrumbs.length > 0 && (
          <Link href="/" sx={{ color: "primary.main" }} passHref>
            <a>Home</a>
          </Link>
        )}

        {breadCrumbs.length > 0 &&
          breadCrumbs.map((nav) => (
            <Link
              href={nav.url}
              sx={{ color: "primary.main" }}
              key={nav.title}
              passHref
            >
              <a>{nav.title}</a>
            </Link>
          ))}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumb;
