
//HomePage
export const ADD_DECK = "ADD_DECK";
export const add_deck = (id,deckname) => ({type:ADD_DECK , payload:{id:id,deckname:deckname,cardlist:[]}})

//DeckListItem
export const SET_DECK_NAME= "SET_DECK_NAME";
export const set_deck_name = (id,deckname) => ({type:SET_DECK_NAME , payload:{id:id,deckname:deckname}})

export const DEL_DECK= "DEL_DECK";
export const del_deck = (id) => ({type:DEL_DECK , payload:{id:id}})

//CardList
export const SET_CARD_WORD_Q = "SET_CARD_WORD_Q";
export const set_card_word_q =(cid,did,updatedWord) =>({type:SET_CARD_WORD_Q , payload:{did:did,cid:cid,updatedWord:updatedWord}}); //id of the card to change

export const SET_CARD_WORD_A = "SET_CARD_WORD_A";
export const set_card_word_A =(cid,did,updatedWord) =>({type:SET_CARD_WORD_A , payload:{did:did,cid:cid,updatedWord:updatedWord}}); //id of the card to change
