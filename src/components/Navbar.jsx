import React from "react";
import "./Navbar.css";

const Navbar = () => {

    const navLinks = [
        {id: 1, name: "Home", href: "#"},
        {id: 2, name: "Features", href: "#"},
        {id: 3, name: "Pricing", href: "#"},
        {id: 4, name: "Contact", href: "#"}
    ];

    const renderNavLinks = () => {

        const listItems = navLinks.map( (link) => {
            const liElement = <li className="nav-item" key={link.id}>
                <a className="nav-link" href={link.href}>
                    {link.name}
                </a>
            </li>;
            return liElement
        });

        return listItems
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span style={{ color: "red", fontWeight: "bold" }}>MyApp</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {
          renderNavLinks()
          }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
