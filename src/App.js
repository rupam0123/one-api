import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Book from './components/Book';
import Movie from './components/Movie'
import Character from './components/Character';
import MovieQuote from './components/MovieQuote';

function App() {
  return(
    <Router>
      <Link to ="/book">Book</Link><br/>
      <Link to ="/movie">Movie</Link><br/>
      <Link to ="/character">character</Link><br/>
      <Route path="/book" component={Book} />
      <Route path="/movie" component={Movie} />
      <Route path="/character" component={Character} />
      <Route path="/movie/:id/quote" component={MovieQuote}/>
    </Router>

  )
}

export default App;
