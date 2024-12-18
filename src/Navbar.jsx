import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
   
    <nav class="navbar navbar-expand-lg  shadow-sm">
        <div class="container">
            <a class="navbar-brand text-primary fw-bold" href="#">KANTORKU</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">About Kantorku</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Solutions</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">FAQ</a></li>
                </ul>
                <div class="d-none d-lg-block">
                <a href="/Login" class="btn btn-primary">Login</a>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
