import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice'; 


export default function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addBook({title, author}));
        setTitle('');
        setAuthor('')
    }
  return (
    <div>
        <h3>Add Books</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder='Title...' required onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" value={author} placeholder='Author...' required onChange={(e)=>setAuthor(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

