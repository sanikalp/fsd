import React, { useState, useEffect, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import NoteItem from './NoteItem';

function NotesApp() {
const [note, setNote] = useState('');

const [notes, setNotes] = useState(() => {
const savedNotes = localStorage.getItem('notes');
return savedNotes ? JSON.parse(savedNotes) : [];
});

const { dark } = useContext(ThemeContext);

useEffect(() => {
localStorage.setItem('notes', JSON.stringify(notes));
document.title = `Notes (${notes.length})`;
}, [notes]);

function addNote() {
if (note.trim() === '') {
return;
}


setNotes([...notes, note.trim()]);
setNote('');


}

function deleteNote(index) {
setNotes(notes.filter((item, i) => i !== index));
}

return (
<div style={{
backgroundColor: dark ? '#222' : 'white',
color: dark ? 'white' : 'black',
minHeight: '100vh',
padding: '20px'
}}> <h1>My Notes App</h1>

```
  <ThemeToggle />

  <br /><br />

  <input
    type="text"
    placeholder="Enter your note"
    value={note}
    onChange={(e) => setNote(e.target.value)}
  />

  <button onClick={addNote}>Add Note</button>

  <h2>Notes ({notes.length})</h2>

  {notes.length === 0 ? (
    <p>No notes yet</p>
  ) : (
    <ul>
      {notes.map((item, index) => (
        <NoteItem
          key={index}
          note={item}
          index={index}
          deleteNote={deleteNote}
        />
      ))}
    </ul>
  )}
</div>


);
}

function App() {
return ( <ThemeProvider> <NotesApp /> </ThemeProvider>
);
}

export default App;
