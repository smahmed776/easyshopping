import React, { useEffect, useState } from 'react'
import BabyItem from './babyItem';

const BabyItems = ({items, addItem}) => {


    const [aitem, setAitem] = useState([]);

    async function req (){
        for (let i = 0; i < 12; i++) {
        
        // console.log(items)
        aitem.push(<BabyItem items={items[i]} addItem={addItem}/>)
       await setAitem([...aitem
      ])
       
    
        
       }
    }

    useEffect(()=>{
        if(items.length >= 1){
            req();
            // console.log(aitem);
        } 
    }, [items])


    return (
        <div className="container electronics my-4 "  id="">	  
		<h2 className="pb-0 text-center text-bold" style={{borderBottom : "1px solid green", "display" : "inline"}}>Baby Items</h2>
		<hr className="w-100" />
        
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 overflow-hidden g-lg-2 g-3 w-100 mt-2 newrr "  id="rr2" style={{position: "relative"}}>
            <div className="" id="itemload" style={{display: "none"}}></div>
                {aitem.length?
                    aitem.map(item=> item)
                     : null
                }

        </div>
    </div>
    )
}

export default BabyItems
