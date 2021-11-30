import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestMovie } from '../thunks/movie';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function Book() {
  const movies = useSelector((state) => state.getMovie.movie);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(requestMovie());
    
  }, [])

  return (
    <div>
    <h1>Movie List</h1>
    <div>
    {movies.map((data=>
    <li key={data.id}>
      <tr>
       <tr>{data.name}</tr>
       <Link to ={`movie/${data.id}/quote`}>
       <Button varient="danger">MovieQuote</Button>
       </Link>
      </tr>
      </li>
    ))}
    </div>
    </div>
  )

}