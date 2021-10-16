import React, {useReducer, useState} from "react";
import Button from "../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {productsState} from "../../store/products-store";
import {sendCarData} from "../../actions/admin-actions";
import {adminFormInitialState, adminFormReducer} from "../../reducers/admin-page-reducer";
import Dialog from "../UI/Dialog/Dialog";
import AdminPageCarList from "./AdminPageCarList";
import AdminPageForm from "./AdminPageForm";
import {validateForm} from "../../util";
import {ICar} from "../types";

const AdminPage = () => {
    const dispatch = useDispatch();
    const [dialogOpened, setDialogOpened] = useState(false);
    const products = useSelector((state: productsState) => state.products);
    const [adminFormState, adminFormDispatch] = useReducer(adminFormReducer, {...adminFormInitialState});

    const formSubmitHandler = (e: any) => {
        e.preventDefault();

        const newCar: ICar = adminFormState;
        if (validateForm(newCar)) {
            dispatch(sendCarData(newCar))
        }
        // @ts-ignore
        adminFormDispatch({type: 'RESET', payload: {...adminFormInitialState}});
        setDialogOpened(false);
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
          data={{...adminFormState}}
          onSubmit={formSubmitHandler}
          dispatch={adminFormDispatch}
        />
      </Dialog>
      <AdminPageCarList products={products} />
    </>
  );
}

export default AdminPage;