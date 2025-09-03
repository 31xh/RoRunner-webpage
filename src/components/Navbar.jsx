import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg position-fixed p-0" style={{zIndex: 50, top: 0, left: 0, right: 0}}>
            <div className="container-fluid ro-runner-title fs-4">
                <a className="navbar-brand ms-3" href="#">
                    <img src="https://res.cloudinary.com/dhpjybus4/image/upload/v1753999150/grouplogo_gv7yzy.png" alt="#" className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Game</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" aria-disabled="true">News</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" aria-disabled="true">Community</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" aria-disabled="true">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
