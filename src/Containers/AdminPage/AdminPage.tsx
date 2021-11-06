import React, { useReducer, useState } from "react";
import Button from "../../Components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { productsState } from "../ProductsPage/ProductsPageSlice/products-slice";
import { editCarData, removeCarData, sendCarData } from "./AdminPageActions/admin-actions";
import { adminFormReducer } from "./AdminPageReducers/admin-page-form-reducer";
import Dialog from "../../Components/UI/Dialog/Dialog";
import AdminPageCarList from "./AdminPageStatelesComponents/AdminPageCarList";
import AdminPageForm from "./AdminPageStatelesComponents/AdminPageForm";
import { carInitialState, validateForm } from "../../utils";
import { Car } from "../../types";
import { getCarById } from "../../api";
import { adminEditFormReducer } from "./AdminPageReducers/admin-page-form-edit-reducer";

const AdminPage = () => {
  const dispatch = useDispatch();
  const [addDialogOpened, setAddDialogOpened] = useState(false);
  const [editDialogOpened, setEditDialogOpened] = useState(false);
  const products = useSelector((state: productsState) => state.products);
  const [addFormData, addFormDispatch] = useReducer(adminFormReducer, { ...carInitialState });
  const [editFormData, editFormDispatch] = useReducer(adminEditFormReducer, { ...carInitialState });

  const addFormSubmitHandler = (e: any) => {
    e.preventDefault();
    const newCar: Car = addFormData;
    validateForm(newCar) && dispatch(sendCarData(newCar));
    addFormDispatch({ type: 'RESET', payload: { ...carInitialState } });
    setAddDialogOpened(false);
  }

  const editFormSubmitHandler = (e: any) => {
    e.preventDefault();
    validateForm(editFormData) && dispatch(editCarData(editFormData.id, editFormData));
    editFormDispatch({ type: 'RESET', payload: { ...carInitialState } });
    setEditDialogOpened(false);
  }

  const deleteItemHandler = (id: any) => dispatch(removeCarData(id));

  const editItemHandler = async (id: any) => {
    setEditDialogOpened(true);
    const selectedCarData: Car = await getCarById(id);
    editFormDispatch({ type: 'ALL', payload: { ...selectedCarData, id } });
  }

  return (
    <>
      <Button
        primary
        onClick={() => setAddDialogOpened(true)}
      >
        Add product
      </Button>
      <AdminPageCarList
        products={products}
        deleteItem={deleteItemHandler}
        editItem={editItemHandler}
      />
      <Dialog
        title={'Add new car'}
        open={addDialogOpened}
        close={() => setAddDialogOpened(false)}
      >
        <AdminPageForm
          data={{ ...addFormData }}
          onSubmit={addFormSubmitHandler}
          dispatch={addFormDispatch}
        />
      </Dialog>
      <Dialog
        title={'Edit car'}
        open={editDialogOpened}
        close={() => setEditDialogOpened(false)}
      >
        <AdminPageForm
          data={{ ...editFormData }}
          onSubmit={editFormSubmitHandler}
          dispatch={editFormDispatch}
        />
      </Dialog>
    </>
  );
}

export default AdminPage;