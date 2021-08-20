import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Movie.action";

class Movie extends Component {
  componentDidMount() {
    this.props.getMovie();
  }

  render() {
    const { movie } = this.props;
    console.log(movie);

    return (
      <div>
        <h1 >หนังแหละ</h1>
        <ul>
          {movie.data && movie.data.map((item) => 
        //   <li key={item.id}>{item.title}</li>
          <img src={require(`../images/` + item.title + `.jpg`).default } 
          alt="img"
          width={200}
          height={200}
          />
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ movie }) => {
  return {
    movie,
  };
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
