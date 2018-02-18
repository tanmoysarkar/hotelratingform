'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating';
import pkg from '../package';

var inject = document.querySelector('.inject');

class App extends React.Component {

  handleRatingClick(e, data) {
    console.log(data);
    alert('You left a ' + data.rating + ' star rating for ' + data.name);
  }

  render() {
    var currentVersion = pkg.version;

    return (
      <section>
        
        <div className="ratings-wrap">
          
          <h2>Rating Form</h2>
          <hr/>
          <form target="_self" method="GET" className="demo-form">
             <p>Enter Your Name</p>
            <input name="react-input-name" type="text"/>
            <p>Enter Your Phone Number</p>
            <input name="react-input-phone" type="text"/>
            <p>Enter Your Email-Id</p>
            <input name="react-input-email" type="email"/>
           <p>Enter Your Comment</p>
           <textarea name= "react-input-comment" type="text"></textarea>
           <p>Preview Your Rating</p>
            <StarRating name="react-star-rating" totalStars={5} />
            <br/>
            <button type="submit" className="btn btn-primary">Submit Rating</button>
          </form>
          
        </div>
        <footer>
          
        </footer>
      </section>
    );
  }

}

ReactDOM.render(<App />, inject);
