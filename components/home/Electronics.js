import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../custom hooks/cartHook";
import SingleItem from "../singleItem/SingleItem";

const Electronics = () => {
  const { cartItem, addItem, openToastContext, toastTextContext } = useCart();
  const [openToast, setOpenToast] = openToastContext;
  const [toastText, setToastText] = toastTextContext;

  const trending = [
    {
      type: "sponsored_product",
      name: "Ayeboovi Toddler Toys Talking Hamster Repeats What You Say Educational Talking Toy Repeating Hamster Toy Gift for Boys and Girls Children's Day Gift",
      image: "https://m.media-amazon.com/images/I/81B-cX-W4TL.jpg",
      has_prime: true,
      is_best_seller: false,
      is_amazon_choice: false,
      is_limited_deal: false,
      stars: 4.2,
      total_reviews: null,
      url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A07363153SWMG3L1PAFY5&url=%2FAyeboovi-Talking-Hamster-Repeats-Children%2Fdp%2FB075XQ314Q%2Fref%3Dsr_1_1_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-1-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_atf",
      availability_quantity: null,
      spec: {},
      price_string: "$27.99",
      price_symbol: "$",
      price: 27.99,
    },
    {
      type: "sponsored_product",
      name: "Geyiie Toddler Baby Toy Cars, Die Cast Cartoon Car Toys Mini Cars Vehicles Set Alloy School Bus Train Airplane Boat 1:64 Scale, Small Play Cars for Kids Boys Girls Party Favor",
      image: "https://m.media-amazon.com/images/I/71UgGV2RZmL.jpg",
      has_prime: true,
      is_best_seller: false,
      is_amazon_choice: false,
      is_limited_deal: false,
      stars: 4.3,
      total_reviews: null,
      url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A0492162S5ZS2I71558B&url=%2FGeyiie-Cartoon-Helicopter-Vehicle-Toddlers%2Fdp%2FB07YZ9VGNJ%2Fref%3Dsr_1_2_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-2-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_atf",
      availability_quantity: 12,
      spec: {},
      price_string: "$22.90",
      price_symbol: "$",
      price: 22.9,
    },
    {
      type: "sponsored_product",
      name: "Pinkfong Baby Shark Sing-Alongs Sound Book | Premium 10 Button Read and Sing-Alongs, Music and Song Book | Learning & Education Toys, Gifts for Kids and Toddlers",
      image: "https://m.media-amazon.com/images/I/81RxqTXan1L.jpg",
      has_prime: true,
      is_best_seller: false,
      is_amazon_choice: false,
      is_limited_deal: false,
      stars: 4.8,
      total_reviews: null,
      url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A05747902HEFS8IYQGS71&url=%2FPinkfong-Baby-Shark-Sing-Alongs-Sound%2Fdp%2FB08BHX1RMV%2Fref%3Dsr_1_15_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-15-spons%26psc%3D1%26smid%3DA3T6IJECTS6OVJ&qualifier=1640098450&id=642341191617533&widgetName=sp_mtf",
      availability_quantity: null,
      spec: {},
      price_string: "$19.99",
      price_symbol: "$",
      price: 19.99,
    },
    {
      type: "sponsored_product",
      name: "TEMI 7 Pieces Jumbo Dinosaur Toys for Kids and Toddlers,Jurassic World Dinosaur T-Rex Triceratops, Large Soft Dinosaur Toys Set for Dinosaur Lovers - Dinosaur Party Favors, Birthday Gifts",
      image: "https://m.media-amazon.com/images/I/61gXQrkngxL.jpg",
      has_prime: true,
      is_best_seller: false,
      is_amazon_choice: false,
      is_limited_deal: false,
      stars: 3.3,
      total_reviews: null,
      url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A02046191T9VKDHM05OJU&url=%2FTEMI-Dinosaur-Toddlers-Jurassic-Triceratops%2Fdp%2FB08ZS48YMG%2Fref%3Dsr_1_16_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-16-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_mtf",
      availability_quantity: null,
      spec: {},
      price_string: "$43.99",
      price_symbol: "$",
      price: 43.99,
    },
    // {
    //   type: "sponsored_product",
    //   name: "TEMI Carrier Truck Transport Play Vehicles Christmas Toys - 5 in 1 Toys for 3 4 5 6 7 Year Old Boys, Kids Toys Car for Girls Boys Toddlers Friction Power Set, Push and Go Play Vehicles Toys",
    //   image: "https://m.media-amazon.com/images/I/716mWGxYgVL.jpg",
    //   has_prime: true,
    //   is_best_seller: true,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.5,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A06193601ZDNFODJ4YUGV&url=%2FTEMI-Carrier-Truck-Transport-Vehicles%2Fdp%2FB08937X78W%2Fref%3Dsr_1_17_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-17-spons%26psc%3D1%26smid%3DA298XY3U6S0N1Y&qualifier=1640098450&id=642341191617533&widgetName=sp_mtf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$39.99",
    //   price_symbol: "$",
    //   price: 39.99,
    // },
    // {
    //   type: "sponsored_product",
    //   name: "TOY Life Baby Toy Keys with Steering Wheel Toy - Toy Key for Toddler and Infant and Kids Steering Wheel - Play Keys Toys - Baby Musical Light Up Toys for Babies 18 Months (Car Keys & Steering Wheel)",
    //   image: "https://m.media-amazon.com/images/I/71dCU2O7edL.jpg",
    //   has_prime: true,
    //   is_best_seller: false,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.5,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A02237271PILTQ5ESCT37&url=%2FTOY-Life-Baby-Musical-Wheel%2Fdp%2FB08FHWH177%2Fref%3Dsr_1_30_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-30-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_mtf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$15.97",
    //   price_symbol: "$",
    //   price: 15.97,
    // },
    // {
    //   type: "sponsored_product",
    //   name: "TEMI Mist Spay Storage Transport Plane Cargo with 6 Free Wheel Diecast Construction Vehicles and Playmat, Kids Toy Jet Aircraft with Lights & Sounds for 3 4 5 6 Years Old Boys and Girls",
    //   image: "https://m.media-amazon.com/images/I/81oI3bnASGL.jpg",
    //   has_prime: true,
    //   is_best_seller: false,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.2,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A0024353394SFY8OIR53S&url=%2FTemi-Transport-Construction-Vehicles-Aircraft%2Fdp%2FB089LPSRPG%2Fref%3Dsr_1_31_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-31-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_mtf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$59.99",
    //   price_symbol: "$",
    //   price: 59.99,
    // },
    // {
    //   type: "sponsored_product",
    //   name: "Pinkfong Baby Shark ABC Alphabet Bus , 2nd Edition",
    //   image: "https://m.media-amazon.com/images/I/71nA5N1Q-xL.jpg",
    //   has_prime: true,
    //   is_best_seller: false,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.7,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A05749462J6AY39UX3N15&url=%2FPinkfong-Baby-Shark-Official-Alphabet%2Fdp%2FB07WFHRZ55%2Fref%3Dsr_1_32_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-32-spons%26psc%3D1%26smid%3DA3T6IJECTS6OVJ&qualifier=1640098450&id=642341191617533&widgetName=sp_mtf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$49.99",
    //   price_symbol: "$",
    //   price: 49.99,
    // },
    // {
    //   type: "sponsored_product",
    //   name: "Water Doodle Mat - Kids Painting Writing Doodle Toy Mat - Color Doodle Drawing Mat Bring Magic Pens Educational Toys for Age 2 3 4 5 6 7 Year Old Girls Boys Age Toddler Gift",
    //   image: "https://m.media-amazon.com/images/I/81yu8G68eTL.jpg",
    //   has_prime: true,
    //   is_best_seller: false,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.5,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A033683311XREXMDEWR2W&url=%2FToyk-Aqua-Magic-Mat-Educational%2Fdp%2FB07GKWLBN2%2Fref%3Dsr_1_57_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-57-spons%26psc%3D1%26smid%3DA2L60UBZDWGJVM&qualifier=1640098450&id=642341191617533&widgetName=sp_btf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$31.97",
    //   price_symbol: "$",
    //   price: 31.97,
    // },
    // {
    //   type: "sponsored_product",
    //   name: "HOLA Hammering Pounding 1 Year Old Toys, Ball Pound and Tap Bench Toy with Xylophone , Musical Developmental Educational Toddler Toys Age 1-2, 18 24 Months, 1 2 3 Year Old Baby Boy Girl Toys",
    //   image: "https://m.media-amazon.com/images/I/61hgzk9JVNS.jpg",
    //   has_prime: true,
    //   is_best_seller: false,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.5,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A04530433HIWL2SGYBB6Z&url=%2FHOLA-Hammering-Xylophone-Developmental-Educational%2Fdp%2FB089NKLWDF%2Fref%3Dsr_1_58_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-58-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_btf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$22.97",
    //   price_symbol: "$",
    //   price: 22.97,
    // },
    // {
    //   type: "sponsored_product",
    //   name: "QZMTOY Counting Shape Stacker Wooden Count Sort Stacking Tower with Wood Colorful Number Shape Math Blocks for Kids Preschool Educational Toddlers Toy",
    //   image: "https://m.media-amazon.com/images/I/21f4DnOg90L.jpg",
    //   has_prime: true,
    //   is_best_seller: false,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.6,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A04422432MPIE0CH41FF2&url=%2FCounting-Stacking-Colorful-Preschool-Educational%2Fdp%2FB07HFD9WGF%2Fref%3Dsr_1_59_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-59-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_btf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$17.49",
    //   price_symbol: "$",
    //   price: 17.49,
    // },
    // {
    //   type: "sponsored_product",
    //   name: "KMUYSL Bigger Talking Hamster - Repeats What You Say - Interactive Stuffed Plush Animal Talking Toy - Early Educational Toy, Fun Gift for Toddlers 1 2 3 Years Old, Boys & Girls, 2 Pack Included",
    //   image: "https://m.media-amazon.com/images/I/81InKqMz4bL.jpg",
    //   has_prime: true,
    //   is_best_seller: false,
    //   is_amazon_choice: false,
    //   is_limited_deal: false,
    //   stars: 4.3,
    //   total_reviews: null,
    //   url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0837478TUB3W7INPGBF&url=%2FKMUYSL-Bigger-Talking-Hamster-Interactive%2Fdp%2FB08HJ7C566%2Fref%3Dsr_1_60_sspa%3Fkeywords%3DBaby%2B%2526%2BToddler%2BToys%26qid%3D1640098450%26sr%3D8-60-spons%26psc%3D1&qualifier=1640098450&id=642341191617533&widgetName=sp_btf",
    //   availability_quantity: null,
    //   spec: {},
    //   price_string: "$39.99",
    //   price_symbol: "$",
    //   price: 39.99,
    // },
  ];

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "primary.main" }}>
        <Typography
          variant="h6"
          sx={{
            width: { xs: "fit-content", md: "max-content" },
            marginBottom: "-1px",
            bgcolor: "primary.main",
            color: "white",
            p: {xs:2, sm:0.5},
          }}
          component="div"
        >
          ELECTRONICS
        </Typography>
      </Box>

      <Box sx={{ py: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={4} sm={4} md={2}>
            <Box>
              <img
                src="https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/cat03a.jpg"
                style={{ height: "450px", width: "100%" }}
              />
              <Box sx={{ border: 1, borderColor: "text.muted" }}>
                <Typography variant="body2" sx={{ p: 1 }}>
                  Hot category
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={10}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={9}>
                <Box>
                  <img
                    src="https://cdn11.bigcommerce.com/s-3hw107r738/images/stencil/1280x1280/x/08_electronic_800x525__81534.original.jpg"
                    style={{ height: "400px", width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <SingleItem
                  cartItem={cartItem}
                  items={trending[0]}
                  addItem={addItem}
                  setOpenToast={setOpenToast}
                  setToastText={setToastText}
                />
              </Grid>
              {trending.map((item, index) => (
                <Grid item xs={6} md={3} key={index} sx={{p:0}}>
                  <SingleItem
                    cartItem={cartItem}
                    items={item}
                    index={index}
                    addItem={addItem}
                    setOpenToast={setOpenToast}
                    setToastText={setToastText}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Electronics;
