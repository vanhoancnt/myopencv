import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
        <div id="menu">
          <nav className="navbar navbar-light" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">My OpenCV</a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Information</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}

export default Menu;
