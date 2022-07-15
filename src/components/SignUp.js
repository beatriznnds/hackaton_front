import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';
import AuthScreen from "./AuthScreen";
import { Link } from "react-router-dom";

const Register = () => {


  
	return (
		<AuthScreen>
			<Title>CREATE AN ACCOUNT</Title>
			<Form >
				<Input placeholder="Name"
				 type="text"
               />

				

				<Input placeholder="E-mail" 
				type="email"
				
				
				 />
				<Input placeholder="Password"
				type="password"
				
				 />
				<Input placeholder="Confirm password"
				     type="password"
					  />

				
                <Button type="submit">CREATE</Button>
				
         
				
			</Form>
            
				    
		</AuthScreen>
        
	);
};

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
    span {
		font-size: 12px;
		color: black;
        margin-top:15px;
	}
	input:valid {
		border: 2px solid teal;
	}
	input:invalid {
		border: 2px solid #ffe4c4;
	}
	textarea:focus,
	input:focus {
		outline: none;
	}
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
    margin-top:14px;
`;



export default Register;