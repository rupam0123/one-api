import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestCharacter} from '../thunks/character';


export default function Character() {
  const characters = useSelector((state) => state.getCharacter.character);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(requestCharacter());
    }, [])

  return (
    <div>
    <h1>Character List</h1>
    <div>
    {characters.map((data=>
        <tr>
        <td>{data.race}</td>
        <td>{data.gender}</td>
        </tr>
    ))}
    </div>
    </div>
  )

}