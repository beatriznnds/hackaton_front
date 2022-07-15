import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
<<<<<<< HEAD
import Note from './Note'
import { mobile } from './Responsive';
import Logo from "./../assets/icons8-notes-100.png";

=======
import Note from './Note';
>>>>>>> 146da98b8f4b50e87f4bdbd229918fe27abd800b

export default function MainMenu () {
    const [notes, setNotes] = useState([]);
    const { user,token} = useContext(UserContext);
    const navigate = useNavigate();
    const [itensPerPage, setItensPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);
    const [login, setLogin]  = useState(false);

	useEffect(() => {
        if(token){
            setLogin(true);
        }

	    const promise = axios.get('https://firsthackaton.herokuapp.com/notas', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then((res) => {
	 	    setNotes(res.data);
	 	});

        promise.catch(Error => {
             alert(Error.response.data.message)
         });

	}, []);

    const pages = Math.ceil(notes.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = notes.slice(startIndex, endIndex);

    return (
        <>
<<<<<<< HEAD
      <Header>
      <Wrapper>
       <Left>
      <img src={Logo} alt="Logo" onClick={goHome} />
        </Left>
     
         <Center>
          <Nogo>WRITE IT!</Nogo>
        </Center>
        <Right>
          <MenuItem>
          {
            login ? <h2>Oi, { user.name }! </h2> : <h2>Seja bem-vinda(o)!</h2>
          } 
          </MenuItem>
          <MenuItem onClick={() => navigate('/sign-up')}>REGISTER</MenuItem>
          <MenuItem onClick={() => navigate('/login')}>SIGN IN</MenuItem>
        </Right>
        </Wrapper>
     </Header>
=======
       <Header>
            <h2 onClick={() => navigate('/login')}>Login</h2>
            <ion-icon name="log-in-outline" onClick={() => navigate('/login')}></ion-icon>
            {
                login ? <h2>Oi, { user }! </h2> : <h2>Bem-vinda(o)!</h2>
            }   
            <h2 onClick={() => navigate('/sign-up')}>Cadastro</h2>
       </Header>
>>>>>>> 146da98b8f4b50e87f4bdbd229918fe27abd800b
       <Container>
            <Notes>
            {
                currentItens.length > 0 ? currentItens.map((note, index) => <Note key={index} name={note.name} description={note.description} date={note.noteId} setCurrentPage={setCurrentPage} pages={pages}/> )
                : <h2>Você não possui nenhuma nota!</h2>
            }
            </Notes>
       </Container>
       </>
    )
}


const Header=styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #B5D3E7;
    border-radius: 5px;
    margin-top: 50px;
    color: #000;
    font-size: 20px;
<<<<<<< HEAD
    font-weight: bold;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst2.depositphotos.com%2F2673669%2F7343%2Fv%2F950%2Fdepositphotos_73438117-stock-illustration-sticky-notes-wallpaper.jpg&f=1&nofb=1")
        center;
background-size: cover;
	
=======
    
>>>>>>> 146da98b8f4b50e87f4bdbd229918fe27abd800b

    ion-icon {
        font-size: 60px;
    }
`

const Container=styled.div`
    width: 100%;
    height: 100%;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F402%2F828%2Foriginal%2Fvector-collection-of-sticky-note-illustrations.jpg&f=1&nofb=1");
`


const Notes=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #B5D3E7;
    border-radius: 5px;
`
