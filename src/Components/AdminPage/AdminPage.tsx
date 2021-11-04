import React, {useReducer, useState} from "react";
import Button from "../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {productsState} from "../../store/products-store";
import {editCarData, removeCarData, sendCarData} from "../../actions/admin-actions";
import {adminFormReducer} from "../../reducers/admin-page-form-reducer";
import Dialog from "../UI/Dialog/Dialog";
import AdminPageCarList from "./AdminPageCarList";
import AdminPageForm from "./AdminPageForm";
import {carInitialState, validateForm} from "../../util";
import {Car} from "../types";
import {getCarById} from "../../api";
import {adminEditFormReducer} from "../../reducers/admin-page-form-edit-reducer";

const AdminPage = () => {
  const dispatch = useDispatch();
  const [addDialogOpened, setAddDialogOpened] = useState(false);
  const [editDialogOpened, setEditDialogOpened] = useState(false);
  const products = useSelector((state: productsState) => state.products);
  const [addFormData, addFormDispatch] = useReducer(adminFormReducer, {...carInitialState});
  const [editFormData, editFormDispatch] = useReducer(adminEditFormReducer, {...carInitialState});

  const addFormSubmitHandler = (e: any) => {
    e.preventDefault();
    const newCar: Car = addFormData;
    if (validateForm(newCar)) {
      dispatch(sendCarData(newCar));
    }
    addFormDispatch({type: 'RESET', payload: {...carInitialState}});
    setAddDialogOpened(false);
  }

  const deleteItemHandler = (id: any) => dispatch(removeCarData(id));

  const editFormSubmitHandler = (e: any) => {
    e.preventDefault();
    if (validateForm(editFormData)) dispatch(editCarData(editFormData.id, editFormData));
    editFormDispatch({type: 'RESET', payload: {...carInitialState}});
    setEditDialogOpened(false);
  }

  const editItemHandler = async (id: any) => {
    setEditDialogOpened(true);
    const selectedCarData: Car = await getCarById(id);
    editFormDispatch({type: 'ALL', payload: {...selectedCarData, id}});
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
          data={{...addFormData}}
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
          data={{...editFormData}}
          onSubmit={editFormSubmitHandler}
          dispatch={editFormDispatch}
        />
      </Dialog>
    </>
  );
}

export default AdminPage;