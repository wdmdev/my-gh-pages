import React from 'react';
import './Navbar.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import FrontPage from '../frontpage/FrontPage';

function NavBar() {
    return (
        <Router basename="/">
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h3>
                                        <Link to="/home">Home</Link>
                                    </h3>
                                </div>
                                <div className="col-sm">
                                    <h3>
                                        <Link to="/about">About Me</Link>
                                    </h3>
                                </div>
                                <div className="col-sm">
                                    <h3>
                                        <Link to="/projects">My Projects</Link>
                                    </h3>
                                </div>
                                <div className="col-sm">
                                    <h3>
                                        <Link to="/contact">Contact</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/home" class="navbar-brand">
                        <img src="./logo.png" width="45" alt="logo" class="d-inline-block align-middle mr-2" />
                        <span class="text-uppercase logotext">Significa</span>
                    </Link>
                </nav>
            </div>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/home">
                    <FrontPage />
                </Route>
                <Route path="/">
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;