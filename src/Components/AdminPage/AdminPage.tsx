import React, {useReducer, useRef} from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {productsState} from "../../store/products-store";
import {sendCarData} from "../../actions/admin-actions";
import ProductItem from "../ProductItem/ProductItem";
import {Car} from "../types";
import {truthyCar} from "../../util";
import CheckboxAndRadio from "../UI/CheckboxAndRadio/CheckboxAndRadio";
import {adminReducer} from "../../reducers/admin-page-reducer";

const AdminPage = () => {
    const dispatch = useDispatch();
    //@ts-ignore
    const [{
        name,
        model,
        price,
        img,
        airCondition,
        transmission,
        luggage,
        doors,
        passengers,
        trailer,
        gps,
        childSeat,
        extraDriver
    }, adminDispatch] = useReducer(adminReducer, {
        name: '',
        model: '',
        price: '',
        img: '',
        airCondition: false,
        transmission: '',
        luggage: '',
        doors: null,
        passengers: null,
        trailer: false,
        gps: false,
        childSeat: false,
        extraDriver: false
    });
    // for later use when creating admin page
    const products = useSelector((state: productsState) => state.products);

    const formSubmitHandler = async (e: any) => {
        e.preventDefault();

        const newCar = {
            name,
            model,
            price,
            img,
            airCondition,
            transmission,
            luggage,
            doors,
            passengers,
            trailer,
            gps,
            childSeat
        }
        dispatch(sendCarData(newCar))
    }

    return (
        <div>
            <form
                onSubmit={formSubmitHandler}
                style={{
                    padding: '20px',
                    border: '1px solid black',
                    margin: '20px'
                }}
            >
                <Input
                    type="text"
                    label={'name'}
                    value={name}
                    onChange={(e: any) => adminDispatch({type: 'NAME', payload: e.target.value})}
                />
                <Input
                    type="text"
                    label={"model"}
                    value={model}
                    onChange={(e: any) => adminDispatch({type: 'MODEL', payload: e.target.value})}
                />
                <Input
                    type="text"
                    label={"price"}
                    value={price}
                    onChange={(e: any) => adminDispatch({type: 'PRICE', payload: e.target.value})}
                />
                <CheckboxAndRadio
                    label={"Car has Air Condition(Yes/No)?"}
                    type="checkbox"
                    value={airCondition}
                    onChange={(e: any) => adminDispatch({type: 'AIR', payload: e.target.checked})}
                />
                <Input
                    label={"Car transmission is?: "}
                    type={"text"}
                    value={transmission}
                    onChange={(e: any) => adminDispatch({type: 'TRANS', payload: e.target.value})}
                />
                <Input
                    label={"Car can take how many bags in back?: "}
                    type={"text"}
                    value={luggage}
                    onChange={(e: any) => adminDispatch({type: 'LUGGAGE', payload: e.target.value})}
                />
                <Input
                    label={"Car has how many doors?: "}
                    type={"text"}
                    value={doors}
                    onChange={(e: any) => adminDispatch({type: 'DOORS', payload: e.target.value})}
                />
                <Input
                    label={"Car can carry how many passengers?: "}
                    type={"number"}
                    value={passengers}
                    onChange={(e: any) => adminDispatch({type: 'PASSENGERS', payload: e.target.value})}
                />
                <CheckboxAndRadio
                    label={"Car has trailer?: "}
                    type={"checkbox"}
                    value={trailer}
                    onChange={(e: any) => adminDispatch({type: 'TRAILER', payload: e.target.value})}
                />
                <CheckboxAndRadio
                    label={"Car has GPS?: "}
                    type={"checkbox"}
                    value={gps}
                    onChange={(e: any) => adminDispatch({type: 'GPS', payload: e.target.value})}
                />
                <CheckboxAndRadio
                    label={"Car supports Child Seat?: "}
                    type={"checkbox"}
                    value={childSeat}
                    onChange={(e: any) => adminDispatch({type: 'CHILD', payload: e.target.value})}
                />
                <Button type="submit">
                    Submit
                </Button>
            </form>
            <ul>
                {products.map((product: Car, index) => {
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
        </div>
    );
}

export default AdminPage;