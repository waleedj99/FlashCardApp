import { useState } from "react";
import DeckListItem from "../Components/DeckListItem";
import FlashCard from "../Components/FlashCard";
import CardList from "../Components/CardList"
import NavbarComponent from "../Components/NavbarComponent"

import { add_deck } from "../action";

import { useSelector ,useDispatch} from 'react-redux';


export default function HomePage(props) {
  //const [deckList, setDeckList] = useState(props.deckList)
  
  const dispatch = useDispatch();
  const deckList = useSelector((state) => state)
  
  // function addDeck(){
  //   setDeckList([...deckList, {
  //     "deckname": "new deck",
  //     "cardlist":[]
  //   }])
  //   console.log(deckList)
  // }

  if(props.deckList == null)return(<>loading</>)

  return (

    
    <div className="home-page">
      {/* Div with  DeckName , Buttons for edit , delete , rename  */}
      <div className="list-container list-col ">
        {deckList.map((item) => {
          return <DeckListItem  deck={item} />;
        })}
      
        <div onClick={()=>dispatch(add_deck(deckList.length+1,"New Deck"))} className="button drop-shadow list-item primary-500 outline-dark">
          <h3 className="center-element" >
            ADD DECK
      </h3>
        </div>
      </div>
      
    </div>
    
  );
}
