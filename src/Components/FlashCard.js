import { useState } from "react";
import { del_card, set_card_words} from "../action";

import { useSelector ,useDispatch} from 'react-redux';

export default function FlashCard(props) {
  const [displayWord, setDisplayWord] = useState(props.OriginalWord);
  const [isMouseOver, setIsMouseOver] = useState(window.innerWidth>500?false:true)
  const [OriginalWord,setOriginalWord] = useState(props.OriginalWord);
  const [TranslatedWord, setTranslatedWord] = useState(props.TranslatedWord);
  const [cardState,setCardState] = useState(true)
  const [isEdit,setIsEdit]  = useState(false)
  const dispatch = useDispatch();



  function saveToDB(id,originalWord,translatedWord,deckName=props.deckName){
    let DBTemp = localStorage.getItem("mainDeckList")
    DBTemp.forEach((deckTemp)=>{
      if(deckTemp["deckname"]==deckName){
        deckTemp["cardlist"].map((cardsTemp)=>{
          if(cardsTemp.id===id){
            cardsTemp.OriginalWord = originalWord
            cardsTemp.AnswerWord = translatedWord

          }
        })
      }
    })
  }
  
  function removeThisCard(){
    document.getElementById("fc-"+props.id).style.display="none"
  }

  function flipCard(){
    document.getElementById("fc-"+props.id).firstChild.style.width="0em"
    document.getElementById("fc-" + props.id).firstChild.style.position = "relative"
    document.getElementById("fc-" + props.id).firstChild.style.left = "6em"
    document.getElementById("fc-" + props.id).firstChild.firstChild.style.display="none"
    document.getElementById("fc-" + props.id).firstChild.lastChild.style.display = "none"
    setTimeout(function () {
      document.getElementById("fc-" + props.id).firstChild.style.width = "12em" 
      document.getElementById("fc-" + props.id).firstChild.style.position = "static"
      document.getElementById("fc-" + props.id).firstChild.style.left = "0em"
      document.getElementById("fc-" + props.id).firstChild.firstChild.style.display = "flex"
      document.getElementById("fc-" + props.id).firstChild.lastChild.style.display = "block"
    }, 60);
    
  }

  function switchWord(){
    flipCard()
    setCardState(!cardState)
  }
  
  return (
    <div  onMouseEnter={() => { setIsMouseOver(true) }} onMouseLeave={() => { setIsMouseOver(false) }}
      className=" list-col" id={"fc-" + props.id} style={{ width: "12em", height: "12em", borderRadius: "0.5em",margin:"1em" }}>
      <div className="flash-card flip-anim list-col drop-shadow primary-200 outline-dark" style={{ justifyContent:"space-between"}}>
      {isMouseOver ? <div className="list-container list-row" style={{ maxHeight: "2em", flexBasis: "10%" }}>
        {isEdit ? <h5 
        onClick={() => { 
          setIsEdit(false);
          dispatch(set_card_words(props.did,props.id,OriginalWord,TranslatedWord))
          
          //saveToDB(props.id,OriginalWord,TranslatedWord)
         }} className="button">SAVE</h5> 
         :
        <h5 onClick={() => { setIsEdit(true) }} className="button">EDIT</h5>}
        


        <h5 onClick={()=>{removeThisCard()
        dispatch(del_card(props.did,props.id))}} className="button">DEL</h5>
        
        <h5 className="button" onClick={switchWord}>FLIP</h5>
        
      </div>
        : <div ></div>}

      <div style={{ flexBasis:"65%" }} >
        {isEdit ?<> 
        <input value={OriginalWord} onChange={(e) => { setOriginalWord(e.target.value) }} className="input-style primary-500 center-element" /> 
        <input value={TranslatedWord} onChange={(e) => { setTranslatedWord(e.target.value) }} className="input-style primary-500 center-element" /></>:
         <h2 style={{ wordBreak: "break-word",fontSize:"inherit" }}>{cardState?OriginalWord:TranslatedWord}</h2>}
       </div>     
      </div>
    </div>
  );
}
