import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function NoteItem({ note, deleteNote, index }) {
const { dark } = useContext(ThemeContext);

return (
<li style={{
backgroundColor: dark ? '#444' : '#eee',
color: dark ? 'white' : 'black',
padding: '10px',
margin: '10px'
}}>
{note}


  <button onClick={() => deleteNote(index)}>
    Delete
  </button>
</li>

);
}

export default NoteItem;
