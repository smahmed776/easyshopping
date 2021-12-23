import React, { useState, useEffect } from 'react'
import { Items } from './sub components/items'
import BabyItems from './sub components/babyItems'
import MensFashion from './sub components/MensFashion'
import HealthItems from './sub components/HealthItems'
import SportsItems from './sub components/SportsItems'
import { useCart } from './custom hooks/cartHook'

const Feed = () => {
    const [baby, setBaby] = useState([]);
    const [Mens, setMens] = useState([]);
    const [Health, setHealth] = useState([]);
    const [Sports, setSports] = useState([]);
    const { addItem } = useCart();


    const babyRequest = async() => {
        // const req = await fetch("./items.json");
        const req = await fetch("https://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=Baby+%26+Toddler+Toys&autoparse=true");

        const res = await req.json();
        setBaby(res.results)
        // console.log(res);
    }


    const mensRequest = async() => {
        // const req = await fetch("./items.json");
        const req = await fetch("https://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=clothing&i=fashion-mens-intl-ship&autoparse=true");

        const res = await req.json();
        setMens(res.results)
        // console.log(res);
    }
    
    
    const healthRequest = async() => {
        // const req = await fetch("./items.json");
        const req = await fetch("https://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=health+care+products&i=hpc-intl-ship&autoparse=true");

        const res = await req.json();
        setHealth(res.results)
        // console.log(res);
    }
    
    
    const sportRequest = async() => {
        // const req = await fetch("./items.json");
        const req = await fetch("https://api.scraperapi.com?api_key=ebef1c7e0ffdba97eb4c58c541012efb&url=https://www.amazon.com/s?k=accessories&i=sporting-intl-ship&autoparse=true");

        const res = await req.json();
        setSports(res.results)
        // console.log(res.results);
    }


    useEffect(()=>{
        babyRequest();
        mensRequest();
        healthRequest();
        sportRequest();
    }, [])

    return (
        <div>
            <div>
                <h2 className="App bg-light my-3 py-4">Computers & Mobile Phones</h2>
                <Items />
            </div>
            <div>
                <h2 className="App bg-light my-3 py-4">Baby Items</h2>
                <BabyItems items={baby} addItem={addItem}/>
            </div>
            <div>
                <h2 className="App bg-light my-3 py-4">Men's Fashion</h2>
                <MensFashion items={Mens} addItem={addItem}/>
            </div>
            <div>
                <h2 className="App bg-light my-3 py-4">Health & Household</h2>
                <HealthItems items={Health} addItem={addItem}/>
            </div>
            <div>
                <h2 className="App bg-light my-3 py-4">Sports & Outdoors</h2>
                <SportsItems items={Sports} addItem={addItem}/>
            </div>

        </div>
    )
}

export default Feed
