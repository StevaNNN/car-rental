import classes from './Input.module.scss'
import { ChangeEventHandler, forwardRef } from "react";
import Container from "../Container/Container";

export type INPUT_PROPS = {
	type?: string,
	name?: string,
	id?: any,
	value?: string | number | undefined,
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
	label? : string | number
}

const Input = forwardRef( (props: INPUT_PROPS, ref: any) => {
	
	const {
		type,
		name,
		id,
		label,
		value,
		onChange
	} = props;
	
	return(
		<Container
			vBox
		>
			<label htmlFor={id}>
				{label}
			</label>
			<input
				className={classes.input}
				type={type}
				autoComplete={"false"}
				id={id}
				ref={ref}
				value={value}
				onChange={onChange}
				name={name}
			/>
		</Container>
	);
});

export default Input;