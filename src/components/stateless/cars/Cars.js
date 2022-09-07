import React from 'react';
import Car from './car/Car';

const cars = (props) => {
    return (
        <>
            {
                props.items.map(item => {
                    return(
                        <Car 
                            key={item._id} 
                            price={item.price} 
                            description={item.description}
                            image={item.image} 
                            addToCartHandler={() =>  props.addToCartHandler(item)}
                            lg = {props.lg}
                        />
                    )
                })
            }
        </>
    )
}

export default cars
