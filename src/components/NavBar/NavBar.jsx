import "./NavBar.css"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
export const NavBar=()=>{
    return (
      <div className="nav">
        <Link to="/">
          <button className="home" >User</button>
        </Link>
        <Link to="/">
          <button className="city">Login </button>
        </Link>
        <Link to="/">
          <button className="country">Sign Up</button>
        </Link>
      </div>
    );
}