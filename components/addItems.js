import React, {useContext, useState} from 'react'
import { ItemContext } from './itemContext'

const AddItems = () => {
    const [items, setItems] = useContext(ItemContext);
    const [name, setName] = useState('');
    const [Id, setId] = useState('');
    const [Url, setUrl] = useState('');
    const [Price, setPrice] = useState('');


    const updateName = e => {
        setName(e.target.value);
    } 

    const updateId = e => {
        setId(e.target.value);
    } 
    const updateUrl = e => {
        setUrl(e.target.value);
    } 
    const updatePrice = e => {
        setPrice(e.target.value);
    } 
    
    const updateItems = (e) => {
        e.preventDefault();
        setItems([...items, {itemName: name, pid: Id, profileURL: Url, price: Price}]);
        setName('');
        setId('');
        setUrl('');
        setPrice('');
        console.log(items);
    }


    return (
        <div>
            <form onSubmit={updateItems}>
                <input type="text" name="itemName" id="" value={name} onChange={updateName} placeholder="item name"/><br />
                <input type="text" name="itemName" id="" value={Url} onChange={updateUrl} placeholder="image url"/><br />
                <input type="text" name="itemName" id="" value={Price} onChange={updatePrice} placeholder="price"/><br />
                <input type="text" name="pid" id="" value={Id} onChange={updateId}/><br />
                <button type="submit">Submit</button>               
            </form> 
        </div>
    )
}

export default AddItems
