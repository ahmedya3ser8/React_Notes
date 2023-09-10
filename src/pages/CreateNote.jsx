import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useState } from "react";
import {v4 as uuid} from 'uuid';
import UseCreateDate from "../components/UseCreateDate";

function CreateNote ({setNotes}) {
  const [title, setTitle] = useState('');
  const [details, setDtails] = useState('');
  const date = UseCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = {id: uuid(), title, details, date}

      setNotes(prevNote => [note, ...prevNote])
      console.log(note);
      navigate('/');
    }
  }
  return (
    <section>
      <header className="create-note-header">
        <Link to='/' className="btn"><RiArrowGoBackFill /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea rows="28" placeholder="Note details..." value={details} onChange={(e) => setDtails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote;