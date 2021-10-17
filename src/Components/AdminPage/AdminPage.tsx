import React, { useReducer, useState } from "react";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { productsState } from "../../store/products-store";
import { editCarData, removeCarData, sendCarData } from "../../actions/admin-actions";
import { adminFormReducer } from "../../reducers/admin-page-reducer";
import Dialog from "../UI/Dialog/Dialog";
import AdminPageCarList from "./AdminPageCarList";
import AdminPageForm from "./AdminPageForm";
import { carInitialState, validateForm } from "../../util";
import { Car } from "../types";

const AdminPage = () => {
  const dispatch = useDispatch();
  const [dialogOpened, setDialogOpened] = useState(false);
  const products = useSelector((state: productsState) => state.products);
  // @ts-ignore
  const [adminFormState, adminFormDispatch] = useReducer(adminFormReducer, { ...carInitialState });

  const formSubmitHandler = (e: any) => {
    e.preventDefault();

    const newCar: Car = adminFormState;
    if (validateForm(newCar)) {
      dispatch(sendCarData(newCar))
    }
    // @ts-ignore
    adminFormDispatch({ type: 'RESET', payload: { ...carInitialState } });
    setDialogOpened(false);
  }

  const deleteItemHandler = (index: number) => {
    dispatch(removeCarData(index));
  }

  const editItemHandler = (index: number) => {
    const editedCar: Car = {...carInitialState};
    dispatch(editCarData(index, editedCar))
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
          data={{ ...adminFormState }}
          onSubmit={formSubmitHandler}
          dispatch={adminFormDispatch}
        />
      </Dialog>
      <AdminPageCarList
        products={products}
        deleteItem={deleteItemHandler}
        editItem={editItemHandler}
      />
    </>
  );
}

export default AdminPage;