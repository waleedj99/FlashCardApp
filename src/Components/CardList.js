import { useState } from "react";
import FlashCard from "../Components/FlashCard";
import { withRouter } from "react-router";

import { useSelector ,useDispatch} from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { add_card } from "../action";
function CardList(props) {
    const { deck , did } = props.location.state;
    const dispatch = useDispatch()
    const [deckW,setDeck] = useState(deck)
    const [modalState,setModalState] = useState("none")
    const [questionWord,setQuestionWord] = useState("")
    const [answerWord, setAnswerWord] = useState("")


    function showModal(){
        setModalState("flex")
    }
    
    function hideModal() {
        setModalState("none")
        if(questionWord.length!=0 && answerWord.length!=0){
            dispatch(add_card(did,deckW.length+1,questionWord,answerWord))
            setDeck([...deckW, { "id":deckW.length+1,"OriginalWord": questionWord, "AnswerWord": answerWord }])
            // set_card_word_a(did,deckW.length-1,answerWord)
            // set_card_word_q(did,deckW.length-1,questionWord)
            
            
        }
    }
    function addCard() {
        showModal() 
        
        //(deck)
    }
    return (
        <>

            <div className="modal center-element list-col" style={{ display: modalState }}>
                <div className="modal-content primary-200" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>     
                    <h1>ADD NEW CARD</h1>
                    <input placeholder="Prompt " className="primary-500  input-style" onChange={(e) => {setQuestionWord(e.target.value) }} />
                    
                    <input placeholder="Answer " className="primary-500  input-style" onChange={(e) => {setAnswerWord(e.target.value) }} />
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <div onClick={hideModal} className="button  primary-500 outline-dark close">ADD</div>
                    </div>
                </div>
            </div>

        <div className="list-container list-row">
                <h1>
                <Link style={{textDecoration:"underline"}} to="/">
                  BACK
                 </Link>
                </h1>
        </div>    
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {deckW.map((cardData)=>{
            return <FlashCard did={did} id={cardData.id} OriginalWord={cardData.OriginalWord} TranslatedWord={cardData.AnswerWord} deckName={props.location.state.deckName}  />
        })}
                <div style={{ width: "12em", height: "12em", borderRadius: "0.5em", margin: "1em" }}>
                <div onClick={addCard} className="button flash-card primary-500 outline-dark center-element"> 
                <h1 style={{margin:0,fontSize:"1.5em"}} className="center-element">ADD CARD <br/> +</h1>
                    </div>
                </div>
        </div> 
        </>
        
    );
}
export default withRouter(CardList);