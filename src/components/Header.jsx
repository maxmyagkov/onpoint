import React from 'react'
import { Link } from 'react-scroll'



const Header = () => {


    return (
        <header className="header">
            <div className="header__content">
                <Link
                    to='start'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <p className="header__text" >
                        <span></span>
                        project
                    </p>
                </Link>
            </div>
        </header>
    )
}

export default Header