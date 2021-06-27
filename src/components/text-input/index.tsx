import { InputContainer, Label } from "./TextInput.styles";

interface TextInputModel {
	Shape: any;
	inputValue: string;
	setInputValue: any;
	label: string;
	placeholder: string;
	type: string;
	bottom?: boolean;
}
export const TextInput: React.FC<TextInputModel> = ({
	Shape,
	inputValue,
	setInputValue,
	label,
	placeholder,
	type,
	bottom,
}) => {
	return (
		<>
			<Label>{label}</Label>
			<InputContainer bottom={bottom}>
				<Shape />
				<input
					type={type}
					placeholder={placeholder}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</InputContainer>
		</>
	);
};
