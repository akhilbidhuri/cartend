import React, {useContext} from 'react'
import {store} from '../store/context'
import ProductCard from '../components/ProdCard'

const WishList = () => {
    const context = useContext(store)

    return (
         <>
    {
        context.state.cart.map(item=> (<ProductCard key={item._id} id={item.id}
            name={item.name}
            brand={item.brand}
            business_unit = {item.business_unit}
            category = {item.category}
            description = {item.description}
            image = {item.image}
            price = {item.price}
            />
            )
        )
    
}
</>
)
}
 
export default WishList;