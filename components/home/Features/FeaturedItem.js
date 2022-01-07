import React from 'react';
import Slider from "react-slick";
import SingleItem from '../../singleItem/SingleItem';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Typography } from '@mui/material';
import { useCart } from "../../custom hooks/cartHook"

const FeaturedItem = () => {
  const {cartItem, addItem, openToastContext, toastTextContext } = useCart();
  const [openToast, setOpenToast] = openToastContext;
  const [toastText, setToastText] = toastTextContext;

    const items = [
        {
            "type": "search_product",
            "name": "Activ Life 2-Tire Pack LED Bike Wheel Lights with Batteries Included! Get 100% Brighter and Visible from All Angles for Ultimate Safety and Style",
            "image": "https://m.media-amazon.com/images/I/81mframq3PL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.5,
            "total_reviews": null,
            "url": "https://www.amazon.com/Activ-Life-Batteries-Included-Color-Changing/dp/B07PBXKHRX/ref=sr_1_2?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-2",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$28.99",
            "price_symbol": "$",
            "price": 28.99,
        },
        {
            "type": "search_product",
            "name": "Bike Phone Front Frame Bag Bicycle Bag Waterproof Bike Phone Mount Top Tube Bag Bike Phone Case Holder Accessories Cycling Pouch Compatible with iPhone 11 XS Max XR Fit 6.5”",
            "image": "https://m.media-amazon.com/images/I/8189pErz+KL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.5,
            "total_reviews": null,
            "url": "https://www.amazon.com/RockBros-Cycling-Waterproof-Pannier-Mobile/dp/B079QKP848/ref=sr_1_3?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-3",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$21.99",
            "price_symbol": "$",
            "price": 21.99
        },
        {
            "type": "search_product",
            "name": "Wise Owl Outfitters Camping Hammocks - Portable Hammock Single or Double Hammock for Outdoor, Indoor w/ Tree Straps - Backpacking, Travel, and Camping Gear",
            "image": "https://m.media-amazon.com/images/I/81Waa1G+FDL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.8,
            "total_reviews": null,
            "url": "https://www.amazon.com/Wise-Owl-Outfitters-Lightweight-Parachute/dp/B07B875HDY/ref=sr_1_4?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-4",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$34.95",
            "price_symbol": "$",
            "price": 34.95
        },
        {
            "type": "search_product",
            "name": "TOPFORT 187/230pcs Fishing Accessories Kit, Including Jig Hooks, Bullet Bass Casting Sinker Weights, Fishing Swivels Snaps, Sinker Slides, Fishing Set with Tackle Box…",
            "image": "https://m.media-amazon.com/images/I/81xQkXUOGjL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.3,
            "total_reviews": null,
            "url": "https://www.amazon.com/TOPFORT-Fishing-Accessories-Including-Casting/dp/B08XYHT7ZC/ref=sr_1_5?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-5",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$34.99",
            "price_symbol": "$",
            "price": 34.99
        },
        {
            "type": "search_product",
            "name": "NEENCA Professional Knee Brace,Knee Compression Sleeve Support for Men Women with Patella Gel Pads & Side Stabilizers,Medical Grade Knee Pads for Running,Meniscus Tear,ACL,Arthritis,Joint Pain Relief",
            "image": "https://m.media-amazon.com/images/I/815wxQcePIL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.3,
            "total_reviews": null,
            "url": "https://www.amazon.com/NEENCA-Professional-Compression-Protector-Arthritis/dp/B085QD4RV6/ref=sr_1_6?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-6",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$21.98",
            "price_symbol": "$",
            "price": 21.98
        },
        {
            "type": "search_product",
            "name": "VAULTEK LifePod Secure Waterproof Travel Case Rugged Electronic Lock Box Travel Organizer Portable Handgun Case with Backlit Keypad",
            "image": "https://m.media-amazon.com/images/I/61s4yz-7KtL.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.8,
            "total_reviews": null,
            "url": "https://www.amazon.com/Vaultek-LifePod-Waterproof-Portable-Accessory/dp/B08126DHPM/ref=sr_1_7?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-7",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$34.99",
            "price_symbol": "$",
            "price": 34.99
        },
        {
            "type": "search_product",
            "name": "RoverTac Camping Accessories Multitool Hatchet Survival Gear Christmas Gifts for Men Dad Husband 14 in 1 Multi Tool Axe Hammer Knife Saw Screwdrivers Pliers Bottle Opener Durable Sheath",
            "image": "https://m.media-amazon.com/images/I/71U3GkJuW0L.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.6,
            "total_reviews": null,
            "url": "https://www.amazon.com/RoverTac-Accessories-Multitool-Christmas-Screwdrivers/dp/B078D7CD77/ref=sr_1_8?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-8",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$25.99",
            "price_symbol": "$",
            "price": 25.99
        },
        {
            "type": "search_product",
            "name": "AlpsWolf Rechargeable Flashlight, LED Spotlight Flashlight 15000mAh 4000LM 20h Ultra-Long Standby Ultra Bright Flashlight Waterproof with USB Output as a Power Bank for Camping Accessories",
            "image": "https://m.media-amazon.com/images/I/61ytNHUxJsL.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": true,
            "stars": 4.4,
            "total_reviews": null,
            "url": "https://www.amazon.com/Rechargeable-Flashlight-Spotlight-Ultra-long-Waterproof/dp/B089GYCKLP/ref=sr_1_9?keywords=accessories&qid=1640115209&s=sporting-goods&smid=A3QJGZNWP88CXO&sr=1-9",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$39.08",
            "price_symbol": "$",
            "price": 39.08
        },
     
        {
            "type": "search_product",
            "name": "Roc Inflatable Stand Up Paddle Board with Premium sup Accessories & Backpack, Non-Slip Deck, Waterproof Bag, Leash, Paddle and Hand Pump.",
            "image": "https://m.media-amazon.com/images/I/81EYc9AMdoL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.8,
            "total_reviews": null,
            "url": "https://www.amazon.com/Roc-Inflatable-Paddle-Premium-Accessories/dp/B07ZJWVY71/ref=sr_1_11?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-11",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$289.95",
            "price_symbol": "$",
            "price": 289.95
        },
        {
            "type": "search_product",
            "name": "4Monster Camping Towels Super Absorbent, Fast Drying Microfiber Travel Towel, Ultra Soft Compact Gym Towel for Beach Hiking Yoga Travel Sports Backpack",
            "image": "https://m.media-amazon.com/images/I/61BoTjmZZBL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.6,
            "total_reviews": null,
            "url": "https://www.amazon.com/4Monster-Camping-Absorbent-Microfiber-Backpack/dp/B07WCTJZTP/ref=sr_1_12?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-12",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$20.99",
            "price_symbol": "$",
            "price": 20.99
        },
        {
            "type": "search_product",
            "name": "DESERT FOX GOLF Phone Caddy",
            "image": "https://m.media-amazon.com/images/I/8199WgLMLlL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.7,
            "total_reviews": null,
            "url": "https://www.amazon.com/Desert-Fox-Golf-Phone-Caddy/dp/B08NZZ3XH2/ref=sr_1_16?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-16",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$24.99",
            "price_symbol": "$",
            "price": 24.99
        },
        {
            "type": "search_product",
            "name": "Mockins 2 Pack Black & Blue Inflatable Loungers Hangout Sofa Bed with Travel Bag Pouch The Portable Inflatable Couch Air Lounger is Perfect for Music Festivals & Camping Accessories Inflatable Hammock",
            "image": "https://m.media-amazon.com/images/I/61aa4mUKw5L.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 3.9,
            "total_reviews": null,
            "url": "https://www.amazon.com/Mockins-Inflatable-Portable-Festivals-Accessories/dp/B085LNXZ62/ref=sr_1_17?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-17",
            "availability_quantity": 1,
            "spec": {},
            "price_string": "$44.99",
            "price_symbol": "$",
            "price": 44.99
        },
        {
            "type": "search_product",
            "name": "HomeMount Portable Speaker Mount for Golf Cart Accessories - Adjustable Strap Fits Bluetooth Wireless Speaker Strap Attachment to Railing/Cross bar/Frame Black",
            "image": "https://m.media-amazon.com/images/I/81t1l5hU00L.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.6,
            "total_reviews": null,
            "url": "https://www.amazon.com/HomeMount-Portable-Speaker-Mount-Accessories/dp/B07X3C67CL/ref=sr_1_18?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-18",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$13.99",
            "price_symbol": "$",
            "price": 13.99
        },
        {
            "type": "search_product",
            "name": "Premium Boat Scuff Erasers | Magic Boating Accessories for Cleaning Black Streak Deck Marks and More",
            "image": "https://m.media-amazon.com/images/I/61f55bpWLhL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.5,
            "total_reviews": null,
            "url": "https://www.amazon.com/Premium-Boat-Erasers-Accessories-Cleaning/dp/B07MMWMFDV/ref=sr_1_19?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-19",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$12.99",
            "price_symbol": "$",
            "price": 12.99
        },
        {
            "type": "search_product",
            "name": "Dirrelo Bands Compatible for Fitbit Versa 3 & Sense, (4-Pack) Replacement TPU Sport Wristbands Accessories Strap for Versa 3 Sense Band Women Men, Large (Black Dark Blue Indigo Gray)",
            "image": "https://m.media-amazon.com/images/I/71d0eOk34OL.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.5,
            "total_reviews": null,
            "url": "https://www.amazon.com/Dirrelo-Compatible-Replacement-Wristbands-Accessories/dp/B08QRKFF8N/ref=sr_1_20?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-20",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$12.99",
            "price_symbol": "$",
            "price": 12.99
        },
        {
            "type": "search_product",
            "name": "Jungle Gym Kingdom Swing Set Hangers - 4 Heavy Duty Brackets with Locking Snap Hooks for Porch, Patio, Playground - Indoor/Outdoor Hardware & Accessories",
            "image": "https://m.media-amazon.com/images/I/81Be-PHRZJL.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": true,
            "stars": 4.8,
            "total_reviews": null,
            "url": "https://www.amazon.com/Jungle-Gym-Kingdom-Playground-Capacity/dp/B08D6686B3/ref=sr_1_21?keywords=accessories&qid=1640115209&s=sporting-goods&smid=A1DT1OYFNGDVOF&sr=1-21",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$31.44",
            "price_symbol": "$",
            "price": 31.44
        },
        {
            "type": "search_product",
            "name": "Bicycle Repair Bag & Bicycle Tire Pump, Home Bike Tool Portable Patches Fixes, Fixe, Inflator, Maintenance For Camping Travel Essentials Tool Bag Bike Repair Tool Kit Safety Emergency All In One Tool",
            "image": "https://m.media-amazon.com/images/I/71iV6-bOOHL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.5,
            "total_reviews": null,
            "url": "https://www.amazon.com/Portable-Inflator-Maintenance-Essentials-Emergency/dp/B079K5N7KF/ref=sr_1_22?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-22",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$26.89",
            "price_symbol": "$",
            "price": 26.89
        },
        {
            "type": "search_product",
            "name": "Botepon 2Pcs Boat Dock Line, Bungee Cords for Boats, Boating Gifts for Men, Boat Accessories, Pontoon Accessories, Perfect for Jet Ski, SeaDoo, Yamaha WaveRunner, Kayak, Pontoon (4 Feet)",
            "image": "https://m.media-amazon.com/images/I/61P4JSST3IL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.7,
            "total_reviews": null,
            "url": "https://www.amazon.com/Botepon-Boating-Accessories-Pontoon-WaveRunner/dp/B07H6BCFPR/ref=sr_1_23?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-23",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$22.99",
            "price_symbol": "$",
            "price": 22.99
        },
        {
            "type": "search_product",
            "name": "HEETA Waterproof Dry Bag for Women Men, 5L/ 10L/ 20L/ 30L/ 40L Roll Top Lightweight Dry Storage Bag Backpack with Phone Case for Travel, Swimming, Boating, Kayaking, Camping and Beach",
            "image": "https://m.media-amazon.com/images/I/71JaVSP+d+S.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.6,
            "total_reviews": null,
            "url": "https://www.amazon.com/HEETA-Waterproof-Lightweight-Backpack-Transparent/dp/B07BSWDTBK/ref=sr_1_24?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-24",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$14.99",
            "price_symbol": "$",
            "price": 14.99
        },
        {
            "type": "search_product",
            "name": "Toker Poker - Lighter Case Multi-Tool - Retractable Stainless Steel Poker and Stainless Steel Tamper/Hammer",
            "image": "https://m.media-amazon.com/images/I/81NFk-DFMLL.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.8,
            "total_reviews": null,
            "url": "https://www.amazon.com/Toker-Poker-Turquiose/dp/B018ZSEV7Q/ref=sr_1_25?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-25",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$9.95",
            "price_symbol": "$",
            "price": 9.95
        },
        {
            "type": "search_product",
            "name": "Vinsguir Mens Headband (4 Pack), Sports Headbands for Men, Workout Accessories, Sweat Band, Sweat Wicking Head Band Sweatbands for Running Gym Training Tennis Basketball Football, Unisex Hairband",
            "image": "https://m.media-amazon.com/images/I/81roUOf-olS.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.4,
            "total_reviews": null,
            "url": "https://www.amazon.com/Vinsguir-Headbands-Accessories-Sweatbands-Basketball/dp/B097M55ZWC/ref=sr_1_26?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-26",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$13.99",
            "price_symbol": "$",
            "price": 13.99
        },
        {
            "type": "search_product",
            "name": "Skater Trainers Skateboarding Accessories - Learn Skate Tricks Faster and Safer. Works on any Skateboard and Anyone- Beginner Kids, Teens, Adults, Boys and Girls -.Ollie, Kickflip, and More",
            "image": "https://m.media-amazon.com/images/I/71ERU+Z0ahL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.6,
            "total_reviews": null,
            "url": "https://www.amazon.com/SkaterTrainer-2-0-Skateboarding-Perfecting-Flip-Learn/dp/B01F49C8NI/ref=sr_1_27?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-27",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$25.95",
            "price_symbol": "$",
            "price": 25.95
        },
        {
            "type": "search_product",
            "name": "Graduated Medical Compression Socks for Women&Men 20-30mmhg Knee High Sock",
            "image": "https://m.media-amazon.com/images/I/71FymoMhLgL.jpg",
            "has_prime": true,
            "is_best_seller": true,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.3,
            "total_reviews": null,
            "url": "https://www.amazon.com/Graduated-Medical-Compression-20-30mmhg-Multicoloured/dp/B085M76WM6/ref=sr_1_28?keywords=accessories&qid=1640115209&s=sporting-goods&sr=1-28",
            "availability_quantity": null,
            "spec": {},
            "price_string": "$19.99",
            "price_symbol": "$",
            "price": 19.99
        }
    ]


    const PrevButton = (props) => {
        const { onClick } = props;
        return (
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              boxShadow: 2,
              top: "50%",
              left: "-5%",
              zIndex: 1,
            }}
            color="primary"
            endIcon={<ArrowBackIosIcon />}
            onClick={onClick}
          ></Button>
        );
      };
      const NextButton = (props) => {
        const { onClick } = props;
        return (
          <Button
            variant="contained"
            sx={{ position: "absolute", boxShadow: 2, top: "50%", right: "-5%" }}
            color="primary"
            startIcon={<ArrowForwardIosIcon />}
            onClick={onClick}
          ></Button>
        );
      };


    return (
        <Box sx={{ py: 1 }}>
            <Typography align="center" variant="h5" sx={{ p:2, mt:2}}>
                Featured Products
            </Typography>
            <div style={{display: "flex", justifyContent: "center" , width: "100%", padding: "1rem"}}>

            <Button variant='outlined' color="secondary" sx={{mr: 1, borderBottom: 1}}>Best Sells</Button>
            <Button variant='outlined' color="success" sx={{mr: 1, borderBottom: 1}}>Featured</Button>
            <Button variant='outlined' color="primary" sx={{mr:1, borderBottom: 1}}>Sells</Button>
            </div>
        <Slider
          

          nextArrow={<NextButton />}
          prevArrow={<PrevButton />}
          slidesToShow={5}
          slidesPerRow={3}
          slidesToScroll={2}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 285,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              },
            },
          ]}
        >
          {items.map((item, index) => (
            <SingleItem cartItem={cartItem} items={item} addItem={addItem} key={index} setOpenToast={setOpenToast} setToastText={setToastText}/>
          ))}
        </Slider>
      </Box>
    )
}

export default FeaturedItem
