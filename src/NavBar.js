import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

/*
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="link-container">
          <Link to="/page1" className="link">
            Page 1
          </Link>
        </div>
        <div className="link-container">
          <Link to="/page2" className="link">
            Page 2
          </Link>
        </div>
      </div>
    );
  }
}*/


/*
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="link-container">
        <Link to="/page1" className="link">
          Page 1
        </Link>
      </div>
      <div className="link-container">
        <Link to="/page2" className="link">
          Page 2
        </Link>
      </div>
    </div>
  );
};*/

export default function NavBar(){
  return (
    <div className="NavBar">
      <div className="link-container">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <div className="link-container">
        <Link to="/page1" className="link">
          Page 1
        </Link>
      </div>
      <div className="link-container">
        <Link to="/page2" className="link">
          Page 2
        </Link>
      </div>
    </div>
  )
}

