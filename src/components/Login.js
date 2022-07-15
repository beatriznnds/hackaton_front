import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

import { Link } from "react-router-dom";
import { mobile } from "./Resnposive";
import Logo from "./../assets/icons8-notes-100.png";

const Login= () => {


  
	return (
		<Container>

          <Wrapper>
		 
			<Title>SIGN IN</Title>
			
			<Form >
				<Input
					type="email"
					name="email"
					placeholder="E-mail"
				
				/>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					
				/>
				<Button type="submit">LOGIN</Button>
				<Link to="/sign-up" style={{ textDecoration: "none" }}>
					<span>Não tem conta? Cadastre-se aqui!</span>
				</Link>
			</Form>
		
            
            </Wrapper>   
		</Container>
        
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F402%2F828%2Foriginal%2Fvector-collection-of-sticky-note-illustrations.jpg&f=1&nofb=1")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
    border-radius: 1rem;
	background-color: #B5D3E7;
	align-items: center;
	
	${mobile({ width: "75%" })}
`;
const Img = styled.img`
    width: 140.21px;
    height: 140.16px;
	
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
    span {
		font-size: 12px;
		color: black;
        margin-top:15px;
		font-family: 'Urbanist', sans-serif;
	}
	input:valid {
		border: 2px solid teal;
		font-family: 'Urbanist', sans-serif;
	}
	input:invalid {
		border: 2px solid #ffe4c4;
	}
	textarea:focus,
	input:focus {
		outline: none;
		font-family: 'Urbanist', sans-serif;
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



export default Login;