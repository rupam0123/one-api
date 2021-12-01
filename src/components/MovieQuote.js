
import React from 'react';
import { connect } from 'react-redux';
import { requestMovieQuote } from '../thunks/movieQuote'


class MovieQuote extends React.Component {


  componentDidMount() {
    const { id } = this.props.match.params
    this.props.requestMovieQuote(id);
  }
  render() {
    const { movie } = this.props
    return (

      <div>
        <h1>MovieQuote</h1>
        <ul>
          {movie.map((data) => (
            <li>{data.dialog}</li>
          ))}
        </ul>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  movie: state.getMovieQuote.movieQuote
});

const mapDispatchToProps = {
  requestMovieQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieQuote);

