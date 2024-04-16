"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Function to toggle submenu
  const toggleSubmenu = (event) => {
    const submenu = event.currentTarget.querySelector(".subnav");
    submenu.classList.toggle("subnav-open");
  };  

  return (
    <header className={`header-scn ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="hdr-inner">
          <a href="#" className="logo">
            <img src="/icon/logo.svg" alt="logo" />
          </a>
          <nav className={`menu ${isMenuOpen ? "show" : ""}`}>
            <ul>
              <li>
                <Link href="#">Websites</Link>
              </li>
              <li>
                <Link href="#">Mobile Apps</Link>
              </li>
              <li>
                <Link href="#">Dashboards</Link>
              </li>
              <li>
                <Link href="#">Applications</Link>
              </li>
              <li>
                <Link href="#">Components</Link>
              </li>
              <li className="dropdown" onClick={toggleSubmenu}>
                <Link href="#">Coded</Link>
                <ul className="subnav">
                  <li>
                    <Link href="#">Company 1</Link>
                  </li>
                  <li>
                    <Link href="#">Company 2</Link>
                  </li>
                  <li>
                    <Link href="#">Company 3</Link>
                  </li>
                  <li>
                    <Link href="#">Company 4</Link>
                  </li>
                  <li>
                    <Link href="#">Company 5</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="hdr-right">
            <div className="searchBar">
              <input
                id="searchQueryInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search"
              />
              <button
                id="searchQuerySubmit"
                type="submit"
                name="searchQuerySubmit"
              >
                <svg
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#666666"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </button>
            </div>
            <span className="mobile-toggle" onClick={toggleMenu}>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
