import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <span id="foot" style={{ marginTop: '15px' }}>Total Soft Inc.</span>
                <div className="contact-info" style={{ marginTop: '10px' }}>
                    <img
                        src="/imagenes/telefono.png"
                        style={{ width: '17px', height: '17px' }}
                        alt="Contact"
                    />
                    &nbsp;
                    <i className="fas fa-phone-alt" style={{ marginBottom: '10px' }}>
                        +506 5467 0937
                    </i>
                </div>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
            <p style={{ marginRight: '15px' }}>© 2019 Tsf, Inc.</p>
        </footer>
    );
};

export default Footer;