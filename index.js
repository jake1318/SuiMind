import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { WalletProvider, WalletButton } from "@suiet/wallet-kit";

// Import additional page components
import Search from "./Search";
import Staking from "./Staking";
import Swap from "./Swap";

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="app">
          {/* Navigation Bar */}
          <nav className="navbar">
            <div className="nav-logo">
              <Link to="/">
                <img src="./assets/Design_2.png" alt="Logo" />
              </Link>
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/staking" className="nav-link">
                  Staking
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/swap" className="nav-link">
                  Swap
                </Link>
              </li>
            </ul>
          </nav>

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/swap" element={<Swap />} />
          </Routes>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2025 SuiMind. All Rights Reserved.</p>
          </footer>
        </div>
      </Router>
    </WalletProvider>
  );
}
// JavaScript for intercepting form submission and displaying a styled pop-up

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  // Create a pop-up container
  const popup = document.createElement("div");
  popup.id = "success-popup";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#1e1e1e";
  popup.style.color = "#e0e0e0";
  popup.style.padding = "20px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 0 10px rgba(0, 163, 255, 0.3)";
  popup.style.textAlign = "center";
  popup.style.display = "none";
  popup.style.zIndex = "1000";

  const popupMessage = document.createElement("p");
  popupMessage.textContent = "Your message has been successfully sent!";
  popupMessage.style.marginBottom = "10px";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.background = "#00a3ff";
  closeButton.style.color = "#1a1a1a";
  closeButton.style.border = "none";
  closeButton.style.padding = "10px 20px";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.style.transition = "all 0.3s ease";

  closeButton.addEventListener("mouseover", () => {
    closeButton.style.background = "#007acc";
  });

  closeButton.addEventListener("mouseout", () => {
    closeButton.style.background = "#00a3ff";
  });

  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.appendChild(popupMessage);
  popup.appendChild(closeButton);
  document.body.appendChild(popup);

  contactForm.addEventListener("submit", (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Display the styled pop-up
    popup.style.display = "block";

    // Optionally clear the form fields
    contactForm.reset();
  });
});

function Home() {
  return (
    <header className="hero">
      <h1>Welcome to SuiMind</h1>
      <p>Discover the power of AI on the blockchain.</p>
      <WalletButton />
      <section className="feature">
        <h2>Our Features</h2>
        <ul>
          <li>AI-Powered Search</li>
          <li>Staking Opportunities</li>
          <li>Effortless Swapping</li>
        </ul>
      </section>
    </header>
  );
}

export default App;
