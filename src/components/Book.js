import React,{useEffect} from 'react'
import { ListGroup } from 'react-bootstrap';
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
      <ul>
      <ListGroup variant="flush">
      <ListGroup.Item>{ele._id}</ListGroup.Item>
      <ListGroup.Item>{ele.name}</ListGroup.Item>
     
    </ListGroup>
    </ul>
//      <li>{ele.name}</li>
    ))}
    </div>
    </div>
  )

}
