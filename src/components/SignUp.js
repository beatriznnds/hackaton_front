import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';
import AuthScreen from "./AuthScreen";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [confirmPass,setConfirmPass] = useState('');

	function signUp(event){
		event.preventDefault();

		const body = {
			name,
			email,
			password,
			confirmPass
		}

		const promise = axios.post('https://firsthackaton.herokuapp.com/sign-up',body);

		promise.then(()=>{
			alert('Cadastrado com sucesso!');
		});

		promise.catch(Error=>{
			alert(Error.response.data.message);
		})
	}
  
	return (
		<AuthScreen>
			<Title>CREATE AN ACCOUNT</Title>
			<Form onSubmit={signUp}>
				<Input placeholder="Name"
				 type="text"
				 value={name}
				 onChange={e=>setName(e.target.value)}
				 required
               />

				

				<Input placeholder="E-mail" 
					type="email"
					value={email}
					onChange={e=>setEmail(e.target.value)}
					required
				
				 />
				<Input placeholder="Password"
					type="password"
					value={password}
					onChange={e=>setPassword(e.target.value)}
					required
				
				 />
				<Input placeholder="Confirm password"
				    type="password"
					value={confirmPass}
				 	onChange={e=>setConfirmPass(e.target.value)}
				 	required
				/>

				
                <Button type="submit">CREATE</Button>
			
         
				
			</Form>
            
			<Link to="/login" style={{ textDecoration: "none" }}>
					<Span>Já tem uma conta? Faça login!</Span>
			</Link>
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

const Span = styled.span`
font-size: 12px;
	color: black;
	margin-top:15px;
	font-family: 'Urbanist', sans-serif;
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
const Cadastro = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: black;
    text-decoration: underline;
    
`;


export default Register;