import { Route, Routes } from 'react-router-dom';
import './App.css';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
// import notesData from './dummy-notes';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  return (
    <main className="app" id='app'>
      <Routes>
        <Route path='/' element={<Notes notes={notes} />} />
        <Route path='/create-note' element={<CreateNote setNotes={setNotes} />} />
        <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes} />} />
      </Routes>
    </main>
  );
}

export default App;
