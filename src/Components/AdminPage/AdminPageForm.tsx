import React, { FormEventHandler } from "react";
import Input from "../UI/Input/Input";
import CheckboxAndRadio from "../UI/CheckboxAndRadio/CheckboxAndRadio";
import Button from "../UI/Button/Button";
import { Car } from "../types";

type AdminPageFormProps = {
  data: Car,
  onSubmit: FormEventHandler<HTMLFormElement>,
  dispatch: any
}

const AdminPageForm = (props: AdminPageFormProps) => {
  const {
    data,
    onSubmit,
    dispatch
  } = props;

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        label={'name'}
        value={data.name}
        onChange={(e: any) => dispatch({ type: 'NAME', payload: e.target.value })}
      />
      <Input
        type="text"
        label={"model"}
        value={data.model}
        onChange={(e: any) => dispatch({ type: 'MODEL', payload: e.target.value })}
      />
      <Input
        type="text"
        label={"price"}
        value={data.price}
        onChange={(e: any) => dispatch({ type: 'PRICE', payload: e.target.value })}
      />
      <CheckboxAndRadio
        label={"Car has Air Condition(Yes/No)?"}
        type="checkbox"
        checked={data.airCondition}
        onChange={(e: any) => dispatch({ type: 'AIR', payload: e.target.checked })}
      />
      <Input
        label={"Car transmission is?: "}
        type={"text"}
        value={data.transmission}
        onChange={(e: any) => dispatch({ type: 'TRANS', payload: e.target.value })}
      />
      <Input
        label={"Car image is?: "}
        type={"text"}
        value={data.img}
        onChange={(e: any) => dispatch({ type: 'IMG', payload: e.target.value })}
      />
      <Input
        label={"Car can take how many bags in back?: "}
        type={"text"}
        value={data.luggage}
        onChange={(e: any) => dispatch({ type: 'LUGGAGE', payload: e.target.value })}
      />
      <Input
        label={"Car has how many doors?: "}
        type={"text"}
        value={data.doors}
        onChange={(e: any) => dispatch({ type: 'DOORS', payload: e.target.value })}
      />
      <Input
        label={"Car can carry how many passengers?: "}
        type={"number"}
        value={data.passengers}
        onChange={(e: any) => dispatch({ type: 'PASSENGERS', payload: e.target.value })}
      />
      <CheckboxAndRadio
        label={"Car has trailer?: "}
        type={"checkbox"}
        checked={data.trailer}
        onChange={(e: any) => dispatch({ type: 'TRAILER', payload: e.target.checked })}
      />
      <CheckboxAndRadio
        label={"Car has GPS?: "}
        type={"checkbox"}
        checked={data.gps}
        onChange={(e: any) => dispatch({ type: 'GPS', payload: e.target.checked })}
      />
      <CheckboxAndRadio
        label={"Car supports Child Seat?: "}
        type={"checkbox"}
        checked={data.childSeat}
        onChange={(e: any) => dispatch({ type: 'CHILD', payload: e.target.checked })}
      />
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}

export default AdminPageForm;