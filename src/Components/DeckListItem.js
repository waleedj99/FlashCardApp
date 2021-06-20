import QueueIcon from '@material-ui/icons/Queue';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function DeckListItem(props) {
  
  const [isEditMode,setIsEditMode] = useState(false)
  const [isDeleted,setIsDeleted] = useState(false)  
  const [deckName, setDeckName] = useState(props.deck.deckname)
if(isDeleted==true)return(<></>)
else{
  return (
    <div className="list-item drop-shadow primary-200">
      
      {isEditMode ? <input value={deckName} onChange={(e)=>{setDeckName(e.target.value)}} className="input-style primary-500 center-element" style={{paddingRight:0,fontSize:"16px", marginLeft: "1em", justifyContent: "start", "flexBasis": "70%", }}></input> :
        <h3 className="center-element" style={{ marginLeft: "2em", justifyContent: "start", "flexBasis": "60%", }}>
          {deckName}
        </h3>
      }
      

      
      <div className="button primary-500 center-element" style={{ flexBasis: "10%" ,padding:"inherit" }}>
<Link  to={{
        pathname: '/cards',
        state: {
          deck: props.deck.cardlist,
          deckName:deckName
        }
      }}> OPEN</Link>
      </div>

      <div className="button primary-500 center-element" style={{ flexBasis: "10%", padding: "inherit" }}>
        <Link to={{
          pathname: '/play',
          state: {
            deck: props.deck.cardlist
          }
        }}> PLAY</Link>
      </div>



      {isEditMode ? <div onClick={() => { setIsEditMode(!isEditMode) }} className="button primary-500 center-element" style={{ flexBasis: "10%" }}>SAVE</div>:
        <div onClick={()=>{setIsEditMode(!isEditMode)}} className="button primary-500 center-element" style={{ flexBasis: "10%" }}>EDIT</div>
      }
      
      <div onClick={()=>{setIsDeleted(true)}} className="button primary-500 center-element" style={{ flexBasis: "10%" }}>DEL</div>
    </div>
  );
    }
}
