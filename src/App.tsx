import React, { useState } from "react";
import {
	Container,
	SigninFormWrapper,
	SigninBackgroundImage,
	Logo,
	SignInTitle,
	SubmitButton,
	ForgotPassord,
	FormSection,
} from "./styles/App.styles";

import { TextInput } from "./components/text-input";

import { ReactComponent as EmailIcon } from "./images/icons/message.svg";
import { ReactComponent as PasswordIcon } from "./images/icons/lock.svg";

function App() {
	const [userName, setUserName] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<Container>
			<SigninFormWrapper>
				<Logo />
				<SignInTitle>Sign In</SignInTitle>
				<FormSection onSubmit={handleSubmit}>
					<TextInput
						type={"text"}
						placeholder={"Enter Email"}
						setInputValue={setUserName}
						inputValue={userName}
						Shape={EmailIcon}
						label={"User name"}
						bottom
					/>
					<TextInput
						type={"password"}
						placeholder={"Enter Password"}
						setInputValue={setPassword}
						inputValue={password}
						Shape={PasswordIcon}
						label={"Password"}
					/>
					<ForgotPassord>FORGOT PASSWORD?</ForgotPassord>
					<SubmitButton>Sign In</SubmitButton>
				</FormSection>
			</SigninFormWrapper>
			<SigninBackgroundImage />
		</Container>
	);
}

export default App;
