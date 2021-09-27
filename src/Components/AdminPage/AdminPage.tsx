import React, {useReducer, useState} from "react";
import Button from "../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {productsState} from "../../store/products-store";
import {sendCarData} from "../../actions/admin-actions";
import {adminReducer} from "../../reducers/admin-page-reducer";
import Dialog from "../UI/Dialog/Dialog";
import AdminPageCarList from "./AdminPageCarList";
import AdminPageForm from "./AdminPageForm";

const AdminPage = () => {
    const dispatch = useDispatch();
    const [dialogOpened, setDialogOpened] = useState(false);
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
        doors: '',
        passengers: '',
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
        // use utility function
        dispatch(sendCarData(newCar))
    }

    return (
        <>
            <Button
                primary
                onClick={() => setDialogOpened(true)}
            >
                Add product
            </Button>
            <Dialog
                title={'Add new product'}
                open={dialogOpened}
                close={() => setDialogOpened(false)}
            >
                <AdminPageForm
                    data={{
                        name: name,
                        model: model,
                        price: price,
                        img: img,
                        airCondition: airCondition,
                        transmission: transmission,
                        luggage: luggage,
                        doors: doors,
                        passengers: passengers,
                        trailer: trailer,
                        gps: gps,
                        childSeat: childSeat,
                        extraDriver: extraDriver
                    }}
                    onSubmit={formSubmitHandler}
                    dispatch={adminDispatch}
                />
            </Dialog>
            <AdminPageCarList products={products} />
        </>
    );
}

export default AdminPage;