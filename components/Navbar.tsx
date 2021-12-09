import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div style={{height: 24}}>
            <Image src="/assets/img/top.png" layout="fill" />
          </div>
        </div>
      </nav>
      <header id="header" className="navbar navbar-expand-lg navbar-end navbar-light">
        {/* Topbar */}
        <div className="container navbar-topbar">
          <nav className="js-mega-menu navbar-nav-wrap">
            {/* Toggler */}
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#topbarNavDropdown" aria-controls="topbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="d-flex justify-content-between align-items-center">
                <span className="navbar-toggler-text">Topbar</span>
                <span className="navbar-toggler-default">
                  <i className="bi-chevron-down ms-2" />
                </span>
                <span className="navbar-toggler-toggled">
                  <i className="bi-chevron-up ms-2" />
                </span>
              </span>
            </button>
            {/* End Toggler */}
            <div id="topbarNavDropdown" className="navbar-nav-wrap-collapse collapse navbar-collapse navbar-topbar-collapse">
              <div className="navbar-toggler-wrapper">
                <div className="navbar-topbar-toggler d-flex justify-content-between align-items-center">
                  <span className="navbar-toggler-text small">Topbar</span>
                  {/* Toggler */}
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topbarNavDropdown" aria-controls="topbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi-x" />
                  </button>
                  {/* End Toggler */}
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* End Topbar */}
        <div className="container">
          <nav className="js-mega-menu navbar-nav-wrap">
            {/* Default Logo */}
            <a className="navbar-brand" href="/" aria-label="Front">
              <img className="navbar-brand-logo" src="/assets/img/logo.png" alt="Logo" />
            </a>
            {/* End Default Logo */}
            {/* Toggler */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-default">
                <i className="bi-list" />
              </span>
              <span className="navbar-toggler-toggled">
                <i className="bi-x" />
              </span>
            </button>
            {/* End Toggler */}
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div>
                    <div className="input-group input-group-merge">
                      <div className="input-group-prepend input-group-text" id="inputGroupMergeFullNameAddOn">
                        <i className="bi-search" />
                      </div>
                      <input type="text" className="form-control" id="inputGroupMergeFullName" placeholder="Pencarian" aria-label="Pencarian" aria-describedby="inputGroupMergeFullNameAddOn" />
                    </div>
                  </div>
                </li>
                <li className="hs-has-sub-menu nav-item">
                  <a id="listingsDropdown" className="hs-mega-menu-invoker nav-link dropdown-toggle " href="index.html#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                  <div className="hs-sub-menu dropdown-menu" aria-labelledby="listingsDropdown" style={{minWidth: '14rem'}}>
                    <a className="dropdown-item " href="products-list.html">Listing</a>
                    <a className="dropdown-item " href="products-grid.html">Listing (Grid)</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html">My Bag</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Wishlist</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary btn-transition" type="button" data-bs-toggle="modal" data-bs-target="#signupModal">
                    Login
                  </button>
                </li>
              </ul>
            </div>
            {/* End Collapse */}
          </nav>
        </div>
      </header>
    </Fragment>
  )
}