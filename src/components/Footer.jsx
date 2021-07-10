import React from 'react'

const Footer = ({ bottle }) => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <a href="https://onpoint.ru/">
                    <div className="footer__logo"></div>
                </a>
                {bottle && <div className="footer__content--bottle"></div>}
            </div>
        </footer>
    )
}

export default Footer