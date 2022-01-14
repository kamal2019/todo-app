import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {db} from './firebase.js';
import { doc, deleteDoc } from "firebase/firestore";
import './todo.css';
const Todo=({arr})=>{
return (
    <div  >
        <List className="todo-list">
        <ListItem>
        <ListItemAvatar />
        <ListItemText primary={arr.item.todo} secondary="Should finish it in time" />
        </ListItem>
        <DeleteIcon fontSize="large" style={{opacity:0.7}} onClick={() => {deleteDoc(doc(db,'todos',arr.id))}} />
        </List>
    </div>
)
};
export default Todo;