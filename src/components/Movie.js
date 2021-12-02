import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestMovie, requestMovieRunTime } from '../thunks/movie';
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { setMovieFilter } from '../actions';


export default function Book() {
  const movies = useSelector((state) => state.getMovie.movie);
  const filter = useSelector((state) => state.getMovie.movie.filter);
  console.log(filter)
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    const { value, name } = event.target;
    dispatch(setMovieFilter({ [name]: value }));
  };



  useEffect(() => {
    if (filter.limit===undefined){
      dispatch(requestMovie());
    }
    else{
      dispatch(requestMovie(filter.limit));
    }
    if(filter.minute===undefined){
      dispatch(requestMovieRunTime());
    }
    else{
      dispatch(requestMovieRunTime(filter.minute));
    }


  }, [filter.limit, filter.minute])

  return (
    <div>
      <h1>Movie List</h1>
      <th>Name</th>
      <div>
        <select name="limit" value={filter.limit} onChange={handleChangeFilter} >budgetInMillion
          <option>budgetInMillion</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={500}>500</option>
          <option value={700}>700</option>
        </select>
        <select name="minute" value={filter.minute} onChange={handleChangeFilter} >runtimeInMinutes
          <option>RunTimeMinutes</option>
          <option value={160}>160</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={500}>500</option>
          <option value={700}>700</option>
        </select>
        {movies.movie.map((data =>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Movie Name</th>
                <th>RunTimeMinutes</th>
                <th>budgetInMillion</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.runtimeInMinutes}</td>
                <td>{data.budgetInMillions}</td>
                <td> <Link to={`movie/${data._id}/quotes`}>
                  <Button variant="danger" >MovieQuote</Button>
                </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    </div>
  )

}