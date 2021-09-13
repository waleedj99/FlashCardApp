import {ADD_DECK,SET_DECK_NAME,DEL_DECK, SET_CARD_WORDS} from "./action.js"

export const initialState = [
      {
          "id":1,
        "deckname": "General CS Questions",
        "cardlist":
          [
            { id: 1, "OriginalWord": "'OS' computer abbreviation usually means?", "AnswerWord": "Operating System" },
            { id: 2, "OriginalWord": " '.MOV' extension refers usually to what kind of file?", "AnswerWord": "Animation/movie file" },
            { id: 3, "OriginalWord": " '.MPG' extension refers usually to what kind of file?", "AnswerWord": "Animation/movie file" },
            { id: 4, "OriginalWord": "What is part of a database that holds only one type of information? ", "AnswerWord": "Field" },
            { id: 5, "OriginalWord": "Who developed Yahoo?", "AnswerWord": " David Filo & Jerry Yang" },
            { id: 6, "OriginalWord": " 'DB' computer abbreviation usually means?", "AnswerWord": "Database" },
            { id: 7, "OriginalWord": "'.INI' extension refers usually to what kind of file?", "AnswerWord": "System file" },
            { id: 8, "OriginalWord": "The sampling rate, (how many samples per second are stored) for a CD is?", "AnswerWord": "44.1 kHz" },
            { id: 9, "OriginalWord": "Which of these is a documented hoax virus?", "AnswerWord": "McDonalds screensaver" },
            { id: 10, "OriginalWord": "What does SSL stand for?", "AnswerWord": "Secure Socket Layer" },
            { id: 11, "OriginalWord": "What is a URL?", "AnswerWord": "The address of a document or page on the World Wide Web" }

          ]
      },
      {
          "id":2,
        "deckname": "General Questions about India",
        "cardlist":
          [
            { "id": 1, "OriginalWord": "India's only Naval Aviation Museum is located in", "AnswerWord": "Goa" },
            { "id": 2, "OriginalWord": "The Disaster Management Act was enacted in India in the year ", "AnswerWord": "2005" },
            { "id": 3, "OriginalWord": "The headquarters of Western Air Command of Indian Air Force is located at", "AnswerWord": "New Delhi" },
            { "id": 4, "OriginalWord": "The aircraft carrier Admiral Gorshkov which was brought by India from Russia is renamed as", "AnswerWord": "INS Vikramaditya" },
            { "id": 5, "OriginalWord": "Which industry in India is the maximum consumer of water", "AnswerWord": "Thermal Power" }
          ]
      }

    ];

export const reducer = (state=initialState,action) =>{
    if(action.type==ADD_DECK){
        return [...state , {id:action.payload.id,deckname:action.payload.deckname}];
    }
    if(action.type==DEL_DECK){
        return state.filter(obj=>obj.id!==action.payload.id);
    }
    if(action.type==SET_DECK_NAME){
        state.map((obj) => {
            console.log(obj,obj.id===action.payload.id)
            if(obj.id===action.payload.id){
                console.log(obj.deckname)
                obj.deckname = action.payload.deckname;
                console.log(obj.deckname)
            }
        });        
        return state 
    }

    if(action.type==SET_CARD_WORDS){
      state.map((obj) => {
            console.log(obj,obj.id===action.payload.id)
            if(obj.id===action.payload.did){
                console.log(obj.deckname)
                obj.cardlist.map((card)=>{
                  if(card.id===action.payload.cid){
                    card.OriginalWord = action.payload.updatedWord
                    card.AnswerWord = action.payload.updatedWord
                  }
                })
            }
        });        
        return state
    }

    return state;
}

