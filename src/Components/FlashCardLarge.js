import { useState,useEffect } from "react";
export default function FlashCardLarge(props) {
    const [displayWord, setDisplayWord] = useState(props.OriginalWord);
    const [isMouseOver, setIsMouseOver] = useState(window.innerWidth > 500 ? false : true)

    function showTranslatedWord() {
        setDisplayWord(props.TranslatedWord);
    }
    function showOriginalWord() {
        setDisplayWord(props.OriginalWord);
    }

    
    function flipCard() {
        document.getElementById("fc-" + props.id).firstChild.style.width = "0em"
        document.getElementById("fc-" + props.id).firstChild.style.position = "relative"
        document.getElementById("fc-" + props.id).firstChild.style.left = "12em"
        document.getElementById("fc-" + props.id).firstChild.lastChild.style.display = "none"
        setTimeout(function () {
            document.getElementById("fc-" + props.id).firstChild.style.width = "25em"
            document.getElementById("fc-" + props.id).firstChild.style.position = "static"
            document.getElementById("fc-" + props.id).firstChild.style.left = "0em"
            document.getElementById("fc-" + props.id).firstChild.lastChild.style.display = "block"
        }, 60);

    }
    
    
    function switchWord() {
        if (displayWord === props.TranslatedWord) {
            showOriginalWord();
        } else {
            showTranslatedWord();
        }
        flipCard()
        
    }

    return (
        <div style={{display:"inline"}} className="large" id={"fc-" + props.id}>
        <div className="flash-card flip-anim  primary-200 outline-dark drop-shadow list-col" style={{width:"25em",height:"25em"}}  onClick={switchWord}>
            <div>
                <h2 style={{ wordBreak: "break-word"}}>{displayWord} </h2>
            </div>
        </div>
        </div>
    );
}
