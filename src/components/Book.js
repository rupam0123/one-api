import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestBooks } from '../thunks/book';


export default function Book() {
  const books = useSelector((state) => state.getBook.book);
  console.log(books)
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(requestBooks());
    
  }, [])

  return (
    <div>
    <h1>Book List</h1>
    <div>
    {books.map(ele=>(
      <li>{ele.name}</li>
    ))}
    </div>
    </div>
  )

}
