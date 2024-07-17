import React from 'react'

function Footer() {
  return (
    <div>
            <footer>
        <p>2024 Tech Talk. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
