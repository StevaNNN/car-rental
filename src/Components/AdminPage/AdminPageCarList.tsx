import React from "react";
import {Car} from "../types";
import {truthyCar} from "../../util";
import ProductItem from "../ProductItem/ProductItem";

type PROPS = {
    products: Car[]
}

const AdminPageCarList = (props: PROPS) => {

    return(
        <ul>
            <h1>Products list:</h1>
            {props.products.map((product: Car, index: number) => {
                return (
                    truthyCar(product) && <ProductItem
                        key={index}
                        name={product.name}
                        model={product.model}
                        price={product.price}
                        img={product.img}
                        airCondition={product.airCondition}
                        transmission={product.transmission}
                        luggage={product.luggage}
                        doors={product.doors}
                        passengers={product.passengers}
                        trailer={product.trailer}
                        gps={product.gps}
                        childSeat={product.childSeat}
                        extraDriver={product.extraDriver}
                    />
                );
            })}
        </ul>
    )
}
export default AdminPageCarList;