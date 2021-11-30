import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Book from './components/Book';
import Movie from './components/Movie'
import Character from './components/Character';
import MovieQuote from './components/MovieQuote';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return(
    <Router>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">API</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/book">Books</Nav.Link>
      <Nav.Link href="/movie">Movies</Nav.Link>
      <Nav.Link href="/character">Character</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
      <Route exact path="/book" component={Book} />
      <Route exact path="/movie" component={Movie} />
      <Route exact path="/character" component={Character} />
      <Route exact path="/movie/:id/quotes" component={MovieQuote}/>
    </Router>

  )
}

export default App;
