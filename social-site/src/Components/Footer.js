import React from "react";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="border-top text-center small text-muted py-3">
        <p><Link to="/" className="mx-1">Home</Link></p>
        </footer>
    )
}

export default Footer