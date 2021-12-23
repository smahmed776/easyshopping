import React from "react";
import { Button, Container, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import ad1 from "../../public/img/ad1.jpg";
import ad2 from "../../public/img/ad2.jpg";
import ad3 from "../../public/img/ad3.jpg";

const PrevButton = (props) => {
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      sx={{
        position: "absolute",
        boxShadow: 2,
        top: "50%",
        left: "0",
        zIndex: 1,
      }}
      color="primary"
      startIcon={<ArrowBackIosIcon />}
      onClick={onClick}
    ></Button>
  );
};
const NextButton = (props) => {
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      sx={{ position: "absolute", boxShadow: 2, top: "50%", right: "0" }}
      color="primary"
      startIcon={<ArrowForwardIosIcon />}
      onClick={onClick}
    ></Button>
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
