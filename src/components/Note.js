import dayjs from "dayjs";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Note ({ name, description, date, setCurrentPage, pages}) {
    const {token} = useContext(UserContext);
    const id = 1;
    const navigate = useNavigate();

    function deleteMarkdown(){
        const promise = axios.delete(`https://firsthackaton.herokuapp.com/notas/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });

        promise.then(()=>{
            alert("Deletado com sucesso!")
        });

        promise.catch(Error=>{
            alert(Error.response.data.message);
        })
    }

    function editMarkdown(){
        const body = {
            name,
            description
        }

        const promise = axios.patch(`https://firsthackaton.herokuapp.com/notas/${id}`,body,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });

        promise.then(()=>{
            alert("Editado com sucesso!")
        });

        promise.catch(Error=>{
            alert(Error.response.data.message);
        })
    }

    function exampleMarkdown () {  
        navigate('/example')        
    }

    return (
        <Container>
            <Prev><ion-icon name="arrow-back-circle-outline" onClick={() => setCurrentPage(pages - 1)}></ion-icon></Prev>
            <Notes>
                <div>
                    {name}
                    dayjs.({date}).format('DD/MM')
                </div>
                <div>
                    {description}
                </div>
                <div>
                    <ion-icon name="help-circle-outline" onClick={exampleMarkdown}></ion-icon>
                    <ion-icon name="create-outline" onClick={editMarkdown}></ion-icon>
                    <ion-icon name="trash-outline" onClick={deleteMarkdown}></ion-icon>
                </div>
            </Notes>
            <Next><ion-icon name="arrow-forward-circle-outline" onClick={() => setCurrentPage(pages + 1)}></ion-icon></Next>
        </Container>
    )
}

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Notes=styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
    }

    ion-icon {
        font-size: 30px;
    }
`

const Prev=styled.div`
    ion-icon {
        font-size: 40px;
    }
`

const Next=styled.div`
    ion-icon {
        font-size: 40px;
    }
`