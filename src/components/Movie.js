import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestMovie } from '../thunks/movie';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { setMovieFilter } from '../actions';


export default function Book() {
  const movies = useSelector((state) => state.getMovie.movie);
  const filter =useSelector((state)=> state.getMovie.movie.filter);
  console.log(movies)
  const dispatch = useDispatch();
  
  const handleChangeFilter=(event)=>{
    const { value, name } = event.target;
    dispatch(setMovieFilter({ [name]: value }));
  };
  

  useEffect(() => {
    const getMovie=()=>{
      dispatch(requestMovie(filter));
    }
    getMovie();
    
  }, [filter.limit])

  return (
    <div>
    <h1>Movie List</h1>
    <th>Name</th>
    <div>
    <select name="limit" value={filter.limit} onChange={handleChangeFilter} >
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={300}>300</option>
        <option value={500}>500</option>
        <option value={700}>700</option>
      </select>
    {movies.movie.map((data=>
    <tr key={data._id}><br/>
       <td>{data.name}</td>
       <td>{data.budgetInMillions}</td>
       <Link to ={`movie/${data._id}/quotes`}>
       <Button variant="danger" >MovieQuote</Button>
       </Link>
       </tr>
    ))}
    </div>
    </div>
  )

}