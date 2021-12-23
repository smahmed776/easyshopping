import React from 'react'
import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'




export const Item = ({items, addItem}) => {
    const productId = () =>{
        const url = items.url;
        const urlStr = url.toString();
        const firstSide = urlStr.substring(urlStr.indexOf("/dp/") + 4);
        const lastSide = firstSide.substring(firstSide.indexOf("/ref"));
        const pid = firstSide.replace(lastSide, "");
        return pid;
    }
    const addObj = {
        ...items, itemName: items.name, price: items.price, profileURL: items.image, sno: productId()
    }

    // console.log(items);

    return (
        <div className="col" id="top" style={{height: "fit-content"}} key={items.name}>
        <div className="border h-100 px-1">

            <div className="itemimg">
                {/* <img src="img/discount.jpg" className="discount" alt="" /> */}
                <img className="pimg" src={items.image} alt={items.name} height="80%" width="100%" />
            </div>
            <div className="pname" >
                <p className="p-0 m-0" id="itemName">{items.name}</p>
                <p className="text-muted pt-2"></p>
            </div>

            <div className="card-body p-0">
                <div className="d-flex justify-content-around mt-3 m-0 px-2">
                    <div style={{fontSize: ".7rem"}}>

                        <span className={`bi bi-star-fill ${items.firststar}`}></span>
                        <span className={`bi bi-star-fill ${items.secondstar}`}></span>
                        <span className={`bi bi-star-fill ${items.thirdstar}`}></span>
                        <span className={`bi bi-star-fill ${items.fourthstar}`}></span>
                        <span className={`bi bi-star-fill ${items.fifthstar}`}></span>
                    </div>
                    <span className="bi bi-heart fav ms-5" ></span>
                </div>
                <div className="card-text m-0">
                    <p className="d-flex justify-content-between px-1 my-0">
                        <span className="">${items.price} only</span>
                    <span className="text-muted text-decoration-line-through">${items.price}</span>

                    </p>
                </div>


                <div className="d-flex justify-content-around btns mt-2 overflow-visible">

                <Link to={`/product?id=${productId()}#list=item`} id="dbtn" style={{width: "33%"}}><button className="btn btn-outline-info bi bi-list mb-2 mt-1"  title="See Product in detail" id="cartButton1" ></button></Link>
                <button className="btn btn-outline-dark  mb-2 mt-1 Mbutton" id={'cartButton'+items.price_string}
                 data-name={items.itemName}
                 data-src={items.profileURL}
                 data-bs-pid={items.sno}
                 onClick= {()=> addItem(addObj)}>
                     <span className="bi bi-cart4"></span>
                </button>
                </div>
            </div>
        </div>
    </div>
    )
}







// export const RecipeItem = ({items, addItem}) => {
//     const obj = { itemName: items.i.label, sno: items.sno, profileURL: items.i.image, price: parseInt(items.i.totalWeight), url: items.i.uri, quantity: 1 }

//     const url = () =>{
//         const link = items.i.uri;
//         const str = link.toString();
//        const newUrl = str.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "")
//        return newUrl;
//     } 

    
//     return (
//     <div className="col pb-2" id="top" key={items.sno}>
//         <div className="itemimg">
//             <img className="pimg" src={items.i.image} alt={items.i.label} height="80%" width="100%" />
//         </div>
//         <div className="pname" >
//             <p className="p-0 m-0" id="itemName">{items.i.label}</p>
//             <p className="text-muted pt-2">{`calories: ${items.i.calories}`}</p>
//         </div>
//         <div className="pbody">
//             <img src="img/discount.jpg" className="discount" alt="" />
//             <img className="pimg" id="lgimg" src={items.i.image} alt={items.i.label} height="80%" width="100%" />

//         </div>
//         <div className="card-body ">
//             <div className="mt-3 m-0 ps-2">
//                 <span className={`bi bi-star-fill ${items.firststar}`}></span>
//                 <span className={`bi bi-star-fill ${items.secondtstar}`}></span>
//                 <span className={`bi bi-star-fill ${items.thirdstar}`}></span>
//                 <span className={`bi bi-star-fill ${items.fourthstar}`}></span>
//                 <span className={`bi bi-star-fill ${items.fifthstar}`}></span>
//                 <span className="bi bi-heart fav ms-5" ></span>
//             </div>
//             <div className="card-text m-0">
//                 <p className="d-flex justify-content-between px-1 my-0">
//                     <span className="">Tk.{parseInt(items.i.totalWeight)} only</span>
//                     <span className="text-muted text-decoration-line-through">{parseInt(items.i.totalWeight)}</span>
//                 </p>
//             </div>

//             <Link to={`/product?id=${url()}`}><button className="btn btn-outline-info w-100 mb-2 Mbutton" title="See Product in detail" id="cartButton1">Details</button></Link>
            
            
//             <button className="btn btn-outline-dark w-100 Mbutton" id={'cartButton'+items.i.sno}
//              data-name={items.i.label}
//              data-src={items.i.image}
//              data-bs-pid={items.i.sno}
//              onClick={()=> addItem(obj)}

//             >Add to cart</button>
//         </div>
//     </div>
//     )
// }
