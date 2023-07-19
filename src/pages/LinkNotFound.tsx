import React from 'react';

function LinkNotFound() {
  return <div className="alert alert-danger">
    <h3> Link Not Found</h3>
    <button className="btn btn-primary" onClick={() => {
      window.location.href = "http://localhost:7070"
    }}>Want to Shorten Link</button>
  </div>;
}

export default LinkNotFound;
