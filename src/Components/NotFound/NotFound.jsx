import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="py-5 text-center">
        <h1 className="fw-bolder my-5 pt-5">Page Not Found</h1>
        <p className="py-5">We couldn't find what you were looking for.</p>
        <p className="fw-bolder">Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
      </div>
    );
  }
}

export default NotFound;
