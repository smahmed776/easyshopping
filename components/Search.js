import React, { useEffect, useState } from 'react'
import { useCart } from './custom hooks/cartHook';
import SearchItem from './sub components/searchItem';
import queryString from 'query-string'

const Search = ({location}) => {
    const [item, setItem] = useState([]);
    const {addItem} = useCart();
    const searchstr = location.search;
    const parseStr = queryString.parse(searchstr)
    const final = searchstr.toString().replace("?q=", "");
    
    console.log(parseStr)



    const searchRequest = async (string) => {
        if(document.getElementById('searchload')){
            document.getElementById('searchload').classList.add('loading','min-height','d-block')
       }
        const req =  await fetch(`https://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=${string}&autoparse=true`);
        const res = await req.json();
        if(document.getElementById('searchload')){
            
            document.getElementById('searchload').classList.remove('loading','min-height','d-block');
            document.getElementById('searchload').style.display= "none"
        }
        setItem(res.results);
    }

    useEffect(()=> {
      
        
        searchRequest(final);
        
    }, [final])


    return (
        <div className="container electronics my-4"  id="">	  
            <p>You searched for : {parseStr.q}</p>
        		<h2 className="pb-0 text-center text-bold" style={{borderBottom : "1px solid green", "display" : "inline"}}> MOBILE PHONE AND ELECTRONICS</h2>
        		<hr className="w-100" />
                
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 overflow-hidden g-lg-2 g-3 w-100 mt-2 newrr"  id="rr2" style={{position: "relative"}}>
                    <div className="" id="searchload" style={{display: "none"}}></div>
                        {item.length?
                            item.map(item=> (
                                <SearchItem items={item} addItem= {addItem} />
                            ))
                             :
                            <div className="col-12 text-center" style={{minHeight: "90vh"}}>
                                <h5 className="mt-5" style={{minWidth: "60vw"}} >Nothing found.. Please search for items!</h5>
                            </div>
                        }
        
                </div>
        </div>
    )
}

export default Search
