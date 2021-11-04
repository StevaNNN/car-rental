import React from "react";
import classes from './CheckboxAndRadio.module.scss';
import Container from "../Container/Container";
import classNames from "classnames";
import { ChangeEventHandler } from "react";

export type TRT = {
	value?: "true" | "false"
	checked?: boolean  | undefined
	id?: any,
	label? : string | number,
	type: "checkbox" | "radio",
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

const CheckboxAndRadio = React.forwardRef((props: TRT, ref:any) => {
	const {
		checked,
		id,
		label,
		value,
		type,
		onChange
	} = props;

	const checkboxAndRadioClassName = classNames(
		`${classes.checkbox}`,
		{
			[`${classes.radio}`] : type === 'radio'
		}
	)

	return(
		<Container
			alignItemsCenter
			hBox
			className={checkboxAndRadioClassName}
		>
			<label htmlFor={id}>
				{label}
			</label>
			<input
				type={type}
				id={id}
				checked={checked}
				ref={ref}
				value={value}
				onChange={onChange}
			/>
		</Container>
	)
})

export default CheckboxAndRadio;