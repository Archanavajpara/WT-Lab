import React from 'react'
import "../App.css"

export default function Footer() {
 
    return(
    <>
        <footer className="text-center text-lg-start bg-dark">  
        <div className="container text-center">
            <p className="mb-1 text-white">Connecting Riders, Saving the Planet.</p>
             <div className="mb-2">
                <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
            </div>
        </div>
    </footer>
    </>
    );
}
  


