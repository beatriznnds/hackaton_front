import dayjs from "dayjs";
import styled from "styled-components";

export default function Note ({ name, description, date, setCurrentPage, pages}) {

    return (
        <Container>
            <Prev><ion-icon name="arrow-back-circle-outline" onClick={() => setCurrentPage(pages - 1)}></ion-icon></Prev>
            <Note>
                <div>
                    {name}
                    dayjs({date}).format('DD/MM')
                </div>
                <div>
                    {description}
                </div>
                <div>
                    <ion-icon name="help-circle-outline" onClick={exampleMarkdown}></ion-icon>
                    <ion-icon name="create-outline" onClick={editMarkdown}></ion-icon>
                    <ion-icon name="trash-outline" onClick={deleteMarkdown}></ion-icon>
                </div>
            </Note>
            <Next><ion-icon name="arrow-forward-circle-outline" onClick={() => setCurrentPage(pages + 1)}></ion-icon></Next>
        </Container>
    )
}

const Container=styled.div`
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