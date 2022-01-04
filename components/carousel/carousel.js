import React from "react";
import { Button, Container, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomIconButton from "../atoms/CustomIconButton"
import Slider from "react-slick";
import ad1 from "../../public/img/ad1.jpg";
import ad2 from "../../public/img/ad2.jpg";
import ad3 from "../../public/img/ad3.jpg";

const PrevButton = (props) => {
  const { onClick } = props;
  return (
    <CustomIconButton
      sx={{
        position: "absolute",
        boxShadow: 2,
        top: "50%",
        left: "-2%",
        zIndex: 1,
        p:1,
        borderRadius: "5px",
        bgcolor: "primary.main",
        color: "white",
        height: "35px",
        minWidth: "35px",
      }}
      
      onClick={onClick}
      >

        <ChevronLeftIcon />
      </CustomIconButton>
      );
};
const NextButton = (props) => {
  const { onClick } = props;
  return (
    <CustomIconButton
      variant="contained"
      sx={{ position: "absolute", bgcolor: "primary.main", color: "white", borderRadius: "5px", height: "35px", width: "35px", boxShadow: 2, top: "50%", right: "-2%", p:1 }}
      color="primary"
      onClick={onClick}
      >

        <ChevronRightIcon />
      </CustomIconButton>
  );
};

const Carousel = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Slider
        autoplay
        dots
        nextArrow={<NextButton />}
        prevArrow={<PrevButton />}
        customPaging={(i) => {
          return (
            <div className="carousel-indicators">
              <button type="button" data-bs-target>
                {i}
              </button>
            </div>
          );
        }}
      >
        <img
          className=""
          width="100vw"
          height="260px"
          src={ad1.src}
          aria-hidden="true"
          focusable="false"
          alt=""
        />

        <img
          className=""
          width="100vw"
          height="260px"
          src={ad2.src}
          aria-hidden="true"
          focusable="false"
          alt=""
        />

        <img
          className=""
          width="100vw"
          height="260px"
          src={ad3.src}
          aria-hidden="true"
          focusable="false"
          alt=""
        />
      </Slider>
    </Container>
  );
};

export default Carousel;
