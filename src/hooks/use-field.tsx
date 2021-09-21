import { useState } from "react";

const useField = (validateValue: any) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  // proveravamo da li nam je unos validan u odnosu na validate funkciju koju prosledjuemo hook-u
  const isValid = validateValue(value);
  // flagujemo da field ima errror samo ako je user kliknuo na field i ako je unos pogresan
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (e: any) => setValue(e.target.value);
  const reset = () => {
    setValue('');
    setIsTouched(false);
  }
  const valueBlurHandler = () => setIsTouched(true);

  return { value, hasError, isValid, valueChangeHandler, valueBlurHandler, reset }
}

export default useField;