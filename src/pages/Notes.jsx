import {RiSearchLine, RiAddLine, RiCloseFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import NoteItem from '../components/NoteItem';
import { useEffect, useState } from 'react';

function Notes ({notes}) {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filterNotes, setFilterNotes] = useState(notes);
  const handleSearch = () => {
    // eslint-disable-next-line array-callback-return
    setFilterNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())) {
        return note;
      }
    }))
  }
  useEffect(handleSearch, [notes, text]);
  return (
    <section>
    <header className="notes-header">
      {!showSearch && <h2>My Notes</h2> }
      {showSearch && <input type="text" autoFocus placeholder="keyword..." value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} />}
      <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <RiCloseFill /> : <RiSearchLine />}</button>
    </header>
    <div className="notes-container">
      {
        filterNotes.map(note => <NoteItem key={note.id} note={note} />)
      }
    </div>
    <Link to={'/create-note'} className='btn add-btn'><RiAddLine /></Link>
  </section>
  )
}

export default Notes;