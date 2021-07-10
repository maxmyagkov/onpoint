import React from 'react'
import { Header, Footer, Button } from '../components'
import { Link } from 'react-scroll'



const Home = () => {

    return (
        <div className="wrapper" id='start'>
            <Header />
            <section className="content">
                <div className="content__text home-page__text">
                    <span>привет,</span><br />
                    это <strong>не</strong><br /> коммерческое<br /> задание
                </div>
                <Link
                    to='link'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>

                    <Button
                        text={'Что дальше ?'}
                        className={'button--arrow'}
                    />
                </Link>

            </section>
            <Footer />
        </div >
    )
}

export default Home