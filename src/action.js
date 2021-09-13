
//HomePage
export const ADD_DECK = "ADD_DECK";
export const add_deck = (id,deckname) => ({type:ADD_DECK , payload:{id:id,deckname:deckname,cardlist:[]}})

//DeckListItem
export const SET_DECK_NAME= "SET_DECK_NAME";
export const set_deck_name = (id,deckname) => ({type:SET_DECK_NAME , payload:{id:id,deckname:deckname}})

export const DEL_DECK= "DEL_DECK";
export const del_deck = (id) => ({type:DEL_DECK , payload:{id:id}})

//CardList
export const SET_CARD_WORDS = "SET_CARD_WORDS";
export const set_card_words =(cid,did,updatedWord) =>({type:SET_CARD_WORDS , payload:{did:did,cid:cid,updatedWord:updatedWord}}); //id of the card to change
