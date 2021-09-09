import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div className="errorPage">
      <h1>Page Not Found</h1>
      <p>We can't seem to find the page you we're looking for.</p>
      <button><Link to="/">Back To Home Page</Link></button>
    </div>
  )
}

export default Error
