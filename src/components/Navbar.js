import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

class Navbar extends React.Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a aclassName="nav-item nav-link active" to="/">Logo <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" to="/">Comics</a>
                        <a className="nav-item nav-link" to="/characters">Characters</a>
                    </div>
                </div>
            </nav>
        </div>);
    }
}

export default Navbar;