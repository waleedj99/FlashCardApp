import "./styles.css";
import HomePage from "./Pages/HomePage";
import PlayPage from "./Pages/PlayPage";
import CardList from './Components/CardList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FlashCard from "./Components/FlashCard";
export default function App() {
  let deckList =
    [
      {
        "deckname": "General CS Questions",
        "cardlist":
          [
            { id: "1", "OriginalWord": "'OS' computer abbreviation usually means?", "AnswerWord": "Operating System" },
            { id: "2", "OriginalWord": " '.MOV' extension refers usually to what kind of file?", "AnswerWord": "Animation/movie file" },
            { id: "3", "OriginalWord": " '.MPG' extension refers usually to what kind of file?", "AnswerWord": "Animation/movie file" },
            { id: "4", "OriginalWord": "What is part of a database that holds only one type of information? ", "AnswerWord": "Field" },
            { id: "5", "OriginalWord": "Who developed Yahoo?", "AnswerWord": " David Filo & Jerry Yang" },
            { id: "6", "OriginalWord": " 'DB' computer abbreviation usually means?", "AnswerWord": "Database" },
            { id: "7", "OriginalWord": "'.INI' extension refers usually to what kind of file?", "AnswerWord": "System file" },
            { id: "8", "OriginalWord": "The sampling rate, (how many samples per second are stored) for a CD is?", "AnswerWord": "44.1 kHz" },
            { id: "9", "OriginalWord": "Which of these is a documented hoax virus?", "AnswerWord": "McDonalds screensaver" },
            { id: "10", "OriginalWord": "What does SSL stand for?", "AnswerWord": "Secure Socket Layer" },
            { id: "11", "OriginalWord": "What is a URL?", "AnswerWord": "The address of a document or page on the World Wide Web" }

          ]
      },
      {
        "deckname": "General Questions about India",
        "cardlist":
          [
            { "id": "1", "OriginalWord": "India's only Naval Aviation Museum is located in", "AnswerWord": "Goa" },
            { "id": "2", "OriginalWord": "The Disaster Management Act was enacted in India in the year ", "AnswerWord": "2005" },
            { "id": "3", "OriginalWord": "The headquarters of Western Air Command of Indian Air Force is located at", "AnswerWord": "New Delhi" },
            { "id": "4", "OriginalWord": "The aircraft carrier Admiral Gorshkov which was brought by India from Russia is renamed as", "AnswerWord": "INS Vikramaditya" },
            { "id": "5", "OriginalWord": "Which industry in India is the maximum consumer of water", "AnswerWord": "Thermal Power" }
          ]
      }

    ];
  // if (localStorage.getItem("mainDeckList") != "null" && localStorage.getItem("mainDeckList") != null){  
  //   console.log("isnotNull")
  //   console.log(localStorage.getItem("mainDeckList") != "null")
  //   deckList = JSON.parse(localStorage.getItem("mainDeckList"))
  // } 
  
  
  return (
    <Router>
    <div className="App primary-500">
    
    <Switch>
    
        
        <Route path="/cards">    
          <CardList/>
        </Route>
          <Route path="/play">
            <PlayPage/>
          </Route>
          <Route path="/">
            <HomePage deckList={deckList} />
          </Route>
          
    </Switch>
    
      
    </div>
    </Router>
  );
}
