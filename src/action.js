export const ADD_DECK = "ADD_DECK";
export const DEL_DECK= "DEL_DECK";
export const SET_DECK_NAME= "SET_DECK_NAME";



export const add_deck = (id,deckname) => ({type:ADD_DECK , payload:{id:id,deckname:deckname,cardlist:[]}})

export const set_deck_name = (id,deckname) => ({type:SET_DECK_NAME , payload:{id:id,deckname:deckname}})


export const del_deck = (id) => ({type:DEL_DECK , payload:{id:id}})