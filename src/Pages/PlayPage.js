import { useState } from "react";
import FlashCardLarge from "../Components/FlashCardLarge";
import { withRouter } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function PlayPage(props) {
    const { deck } = props.location.state;
    
    const [deckW, setDeck] = useState(deck)
    console.log(deckW.length)
    const [selectedID,setSelectedID] = useState("0")
    const [userScore,setUserScore] = useState(0)
    
    
    function changeCard(){
        
        if (Number(selectedID)<deckW.length){
            document.getElementById(selectedID).style.display = "none";
            document.getElementById(selectedID).nextSibling.style.display = "block";
            setSelectedID(document.getElementById(selectedID).nextSibling.id);
        }
        
    }    

    return(
        <>
            <div className="list-container">
                <h1>
                    <Link style={{ textDecoration: "underline" }} to="/">
                        BACK
                    </Link>
                </h1>
            </div>
            
    <div className="center-element list-container list-col">
                <div className="list-container list-row">
                    <div style={{ margin: "1em" }}>
                        <h2>{selectedID + "/" + deckW.length} Cards Completed</h2>

                    </div>

                </div>
            
        <div className="center-element list-container list-row">
            {deckW.map((cardData,index)=>{
                return(
                    index==selectedID ?
                            <div id={index} style={{display:"block"}}>
                            <FlashCardLarge id={cardData.id} OriginalWord={cardData.OriginalWord} TranslatedWord={cardData.AnswerWord} />
                            </div>
                                : 
                            <div id={index} style={{ display:"none" }}>
                            <FlashCardLarge id={cardData.id} OriginalWord={cardData.OriginalWord} TranslatedWord={cardData.AnswerWord} />
                            </div>    
                )
            })}
                <div id={deckW.length} style={{ display: "none" }}>
                        <FlashCardLarge 
                            id={deckW.length}
                            currentScore ={userScore}
                            OriginalWord={<div style={{ margin: "1em" }}>
                                <h1>Deck Completed</h1>
                                <h4>Click to see the results</h4>
                            </div>} 
                            TranslatedWord={<div style={{ margin: "1em" }}>
                                <h1>Deck Completed</h1>
                                <h2>You Got </h2>
                                <h1>{Number(userScore) + "/" + deckW.length} </h1>
                                <h2>Correct Answers</h2>
                            </div>}    
                        />
                </div>
        </div>
            
            {(selectedID != deckW.length ? 
                <div className="list-container list-row">
                    <div onClick={()=>{setUserScore(userScore+1);
                    changeCard()}} className="button primary-100 outline-dark btn-large">
                        CORRECT
                    </div>
                        <div onClick={() => { changeCard() }} className="button primary-100 outline-dark btn-large">
                        WRONG
                    </div>
                </div> :
            <div  
                onClick={()=>{
                    window.location.reload();
                    document.getElementById(selectedID).style.display = "none";
                    setSelectedID(0);
                    setUserScore(0)}} 
                className="button primary-100 outline-dark btn-large">
                RESTART
            </div>)}
        
    </div>
    </>
    )
}

export default withRouter(PlayPage)