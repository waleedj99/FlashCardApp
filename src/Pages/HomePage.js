import { useState } from "react";
import DeckListItem from "../Components/DeckListItem";
import FlashCard from "../Components/FlashCard";
import CardList from "../Components/CardList"
import NavbarComponent from "../Components/NavbarComponent"
export default function HomePage(props) {
  const [deckList, setDeckList] = useState(props.deckList)
  function addDeck(){
    setDeckList([...deckList, {
      "deckname": "new deck",
      "cardlist":[]
    }])
    console.log(deckList)
  }

  if(props.deckList == null)return(<>loading</>)

  return (

    
    <div className="home-page">
      {/* Div with  DeckName , Buttons for edit , delete , rename  */}
      <div className="list-container list-col ">
        {deckList.map((item) => {
          return <DeckListItem  deck={item} />;
        })}
      
        <div onClick={()=>{addDeck()}} className="button drop-shadow list-item primary-500 outline-dark">
          <h3 className="center-element" >
            ADD DECK
      </h3>
        </div>
      </div>

    </div>
    
  );
}
