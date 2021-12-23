import React, {useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import {useCart} from './custom hooks/cartHook'

const Cart = (props) => {
    const {cartItem, increase, decrease, removeItem, itemCount, total} = useCart();
  
    const cartshake = useRef(null);
    const mcartshake = useRef(null);
    const toast = useRef(null);
     const toastinnertext = (number) =>{
          let innerText = "";
          if(cartItem.length === 1){
              innerText = `${number} item added to cart.`
            } else {
                innerText = `total ${number} items added to cart.`
            }
            
            return innerText;
        }
    useEffect(() => {
        const toastText = toast.current;
        if(itemCount > 0){
            toastText.className = "showtoast";
            console.log("toast added");
            setTimeout(()=>{
                toastText.className= toastText.className.replace("showtoast", "");
                console.log('timout working!!');
            }, 800)
        } else {
            toastText.className.replace("show", "");
            console.log("toast removed");
        };

        if (props.mobile){
            const mreference = mcartshake.current;
            if(cartItem){
                mreference.classList.add("cartshake");
                toastText.className = "showtoast";
            } else {
                mreference.classList.remove('cartshake');
                // toastText.className.replace("show", "");
            } 
            setTimeout(()=>{
                mreference.classList.remove('cartshake');
                toastText.className= toastText.className.replace("showtoast", "");
                // console.log('timout working!!');
            }, 800)
        } else {

            const reference = cartshake.current;
            if(cartItem){
                reference.classList.add("cartshake");
                toastText.className = "showtoast";
            } else {
                reference.classList.remove('cartshake');
                // toastText.className.replace("show", "");
            } 
            setTimeout(()=>{
                reference.classList.remove('cartshake');
                toastText.className= toastText.className.replace("showtoast", "");
                // console.log('timout working!!');
            }, 800)
        }
        // console.log(cartItem);
    }, [cartItem.length]);

   



    return (
        <>
            <div className="" id="snackbar" ref={toast}>{toastinnertext(itemCount)}</div> 
            {(props.mobile?
                <>

                    <a ref={mcartshake} className="btn nav-link px-2 d-flex justify-content-center text-dark" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#dropdown2"
                    role="button"           
                    aria-controls="dropdown2" 
                    style={{
                        padding:"21px 8px!important"
                    }}>
                        <span className="bi bi-cart4" style={{fontSize:"17px",paddingRight:"5px", justifyContent:"flex-start", position:"relative"}}>
                            <span className={cartItem.length? "bage bg-primary rounded-pill cart" : "bage bg-danger rounded-pill cart"}   style={{position:"absolute",top:"0",right:"0"}} id="cartPill2">{itemCount}</span>
                        </span>
                        <span style={{marginBottom:"7px"}}>Cart</span>
                    </a>
                    <div className="offcanvas offcanvas-end " tabIndex="-1" id="dropdown2" aria-labelledby="dropdown2Label">
                        {cartItem.length?
                            <>
                                <div className="offcanvas-header justify-content-center align-items-center w-100 text-center" 
                                    style={{flexDirection: "column", boxShadow: "0 0 5px rgb(0 0 0 / 10%)"}}>
                                        
                                        <h4 className=" text-primary" id="cartDropDown">{`You have ${itemCount} items in your cart.`}
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </h4>
                                        <h6 className=" text-dark text-center" ><span className="m-auto">{`Total price: $${total}`}</span></h6>
                                              
                                       
                                </div>        
                                <div className="offcanvas-body">
                                        <div className=" cartdrop ps-4">
                                            {cartItem.map(c => (
                                                <>
                                                    <div className="p-2 mt-2" key={c.id}>
                                                        <h5 key={c.id}>{c.itemName} </h5> 
                                                        <div className="d-block h-auto">
                                                            <img className="mb-2" style={{float: "left"}} src={c.profileURL} alt={c.name} height="55px" width="55px" />
                                                            
                                                            <div style={{float: "right"}}>
                                                            <small className="ps-3 mt-1 text-muted d-block">Price: ${c.price}</small>
                                                                <button  className="btn bi bi-plus-circle-fill text-success" id={`p${c.id}`} data-product={c.id} onClick={()=>increase(c)}></button>
                                                                <span>Quantity: {c.quantity}</span>                                                    
                                                                <button className="btn bi bi-dash-circle-fill text-danger" id={`p${c.id}`}  onClick={()=>decrease(c)}></button>                                                    
                                                                <button className="btn bi bi-trash-fill text-danger"  onClick={()=>removeItem(c)}></button>                                                    
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="w-100 m-0" />
                                                </>
                                            ))}
                                        </div>
                                </div>
                                <div className="cartButton">
                                   <Link to="/checkout" className="btn btn-primary w-100 m-0 cbutton" data-bs-dismiss="offcanvas" aria-label="Close">Go to checkout</Link>
                                </div>
                            </>
                            :
                            <div className="d-flex justify-content-center pt-3" style={{flexDirection: "column"}}>
                                <button type="button" className="btn-close text-reset text-center m-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <p className="p-3" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                            </div>
                        }
                    </div>
                    
                </>
            

                :


                <>
            
                    <a ref={cartshake} className="nav-link px-2 d-flex justify-content-center" role="button" data-bs-toggle="offcanvas" data-bs-target="#dropdown1"  aria-controls="dropdown1" style={{ padding: "4px 8px" }} >
                        <i className= "bi bi-cart3 "  style={{ fontSize: "21px", paddingRight: "5px", WebkitBoxPack: "start", WebkitJustifyContent: "flex-start", msFlexPack: "start", justifyContent: "flex-start" }}></i>
                        <span className={cartItem.length? "bage bg-primary rounded-pill cart" : "bage bg-danger rounded-pill cart"} id="cartPill">{itemCount}</span>
                    </a>

                    <div className="offcanvas offcanvas-end "  tabIndex="-1"  aria-labelledby="dropdown1Label" id="dropdown1">
                        {cartItem.length?
                            <> 
                                <div className="offcanvas-header justify-content-center align-items-center w-100 text-center" 
                                style={{flexDirection: "column", boxShadow: "0 0 5px rgb(0 0 0 / 10%)"}}>
                                    <h4 className=" text-primary" id="cartDropDown">{`You have ${itemCount} items in your cart.`}
                                    <button type="button" className="btn-close text-reset ps-2" data-bs-dismiss="offcanvas" aria-label="Close"></button></h4>
                                    <h6 className=" text-dark text-center" ><span className="m-auto">{`Total price: ${total} Taka`}</span></h6>
                                </div>  

                                <div className="offcanvas-body">
                                    <div className="cartdrop ps-4">
                                        {cartItem.map(c => (
                                            <div className="p-2 mt-2" key={c.id}>
                                                <h5 key={c.id} style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", width: "90%"}}>{c.itemName}</h5>
                                                <img className="mb-2" src={c.profileURL} alt={c.name} height="55px" width="55px" />
                                                <button  className="btn bi bi-plus-circle-fill text-success" id={`p${c.id}`} data-product={c.id} onClick={()=>increase(c)}></button>
                                                <span>Quantity: {c.quantity}</span>                                                    
                                                <button className="btn bi bi-dash-circle-fill text-danger" id={`p${c.id}`}  onClick={()=>decrease(c)}></button>                                                    
                                                <button className="btn bi bi-trash-fill text-danger"  onClick={()=>removeItem(c)}></button>                                                    
                                                <hr />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <Link to="/checkout" role="button" className="btn btn-primary w-100 m-0 cbutton" data-bs-dismiss="offcanvas" aria-label="Close" >Go to checkout</Link> 
                                </div>
                            </>
                            :
                            <div className="d-flex justify-content-center pt-3" style={{flexDirection: "column"}}>
                                <button type="button" className="btn-close text-reset text-center m-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <p className="p-3" id="cartDropDown">Your cart is empty! Please add some items to cart to procced.</p>
                            </div>
                        }
                    </div>
                </>

            )} 
        </>
    )
}

export default Cart
