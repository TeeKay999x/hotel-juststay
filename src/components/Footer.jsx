import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <h2>Just<span>Stay</span></h2>
                    <p>Excellence in Hospitality.</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Rooms</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>📍 Rivers State, Nigeria</p>
                    <p>📞 +234 000 000 0000</p>
                    <p>📧 info@juststay.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Hotel JustStay. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;