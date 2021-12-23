import React, {useEffect, useState, useContext } from 'react';
import { Item } from './item';
import { ItemContext } from '../contexts/itemContext';
import { useCart } from '../custom hooks/cartHook';


export const Items = () => {
    const [items] = useContext(ItemContext);
    const {addItem} = useCart();
    const [aitem, setAitem] = useState([]);

    async function req (){
        for (let i = 0; i < 12; i++) {
        
        // console.log(items)
        aitem.push(<Item items={items[i]} addItem={addItem}/>)
       await setAitem([...aitem
      ])
       
    
        
       }
    }

    useEffect(()=>{
        if(items.length >= 1){
            req();
            console.log(aitem);
        } 
    }, [items])
    // useEffect(()=>{
    //     console.log("working");
    //     if(aitem.length >= 1){
            
    //         console.log(aitem);
            
    //     } else {
    //         console.log("not greater");
    //     }
    // }, [aitem])


    return (
    <div className="container electronics my-4"  id="">	  
		<h2 className="pb-0 text-center text-bold" style={{borderBottom : "1px solid green", "display" : "inline"}}> MOBILE PHONE AND ELECTRONICS</h2>
		<hr className="w-100" />
        
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 overflow-hidden g-lg-2 g-3 w-100 mt-2 newrr"  id="rr2" style={{position: "relative"}}>
            <div className="" id="itemload" style={{display: "none"}}></div>
                {aitem.length?
                    aitem.map(item=> item)
                     : null
                }

        </div>
    </div>
    )
}


// export const RecipeItems = () => {
//     const [recipes] = useContext(RecipesItemContext);
//     const {addItem} = useCart();

//     // console.log(recipes);
//     return (
//     <div className="container electronics my-4 pe-0" id="">	  
// 		<h2 className="pb-0 text-center text-bold" style={{borderBottom : "1px solid green", "display" : "inline"}}> Recipes</h2>
// 		<hr className="w-100" />
        
//         <div className="row gx-0 row-cols-2 row-cols-md-3 row-cols-lg-6 py-4 overflow-hidden g-3 rr "  id="rr">
//             <div className="" id="recipeload" style={{display: "none"}}></div>
//             {recipes.map(r => (
//                 r.map(item=> (

//                     <RecipeItem items={item} addItem={addItem} key={item.sno}/>
//                     ))
//             ))}
//         </div>
//     </div>
//     )
// }