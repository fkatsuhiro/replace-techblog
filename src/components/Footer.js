import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-light" style={{height: '10vh'}}>
            <div className="container text-center">
                <span >@TechBlog</span>
            </div>
        </footer>
    );
}

export default Footer;