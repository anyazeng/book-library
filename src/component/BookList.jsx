import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/bookSlice';


export default function BookList() {
    //get the state from bookReducer 
    //the name from this bookReducer is called books
    const books = useSelector(state => state.books)
    //all the actions in reducer muste be dispatched  
    const dispatch = useDispatch();
    //when to fetch books: when first rendering
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]) 
  return (
    <div>
        <h3>Book List</h3>
        <ul>
            {
            books.map(book => (
                <li key={book.id}>
                    {book.title} by {book.author}
                    <button onClick={()=>dispatch(deleteBook({id:book.id}))}>Delete</button>
                </li>)
            )
            }
        </ul>
    </div>
  )
}

// import { useEffect } from 'react'
// import {useSelector,useDispatch} from 'react-redux';
// import { fetchBooks,deleteBook } from '../redux/bookSlice';
 
// export default function BookList() {
//   const books = useSelector(state=>state.books)
//   const dispatch = useDispatch()
 
//   useEffect(()=>{
//     dispatch(fetchBooks());
//   },[dispatch])
 
//   return (
//     <div>
//       <h2>Books</h2>
//       <ul>
//         {books.map(book=>(
//           <li key={book.id}>
//             {book.title} by {book.author}
//             <button onClick={()=>dispatch(deleteBook({id:book.id}))}>Delete</button>
//           </li>
//         ))
 
//         }
//       </ul>
//     </div>
//   )
// }
