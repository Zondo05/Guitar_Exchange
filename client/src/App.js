import React from 'react';
import { Router,  Link } from '@reach/router';
import HomeScreen from './Views/HomeScreen';
import ProductScreen from './Views/ProductScreen';
import './App.css';

function App() {

    const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
    }



    return (
        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">Guitar Exchange</Link>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="Signin.html">Sign In</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button"onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Gibson</a>
                    </li>
                    <li>
                        <a href="index.html">Fender</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                <Router>
                    <ProductScreen path="/product/:id" component={ProductScreen} />
                    <HomeScreen path="/" exact={true} component={HomeScreen} />
                </Router>
                </div>
            </main>
            <footer className="footer">
                All rights reserved.
            </footer>
        </div>
    );
}

export default App;
