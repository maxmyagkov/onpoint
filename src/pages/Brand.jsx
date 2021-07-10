import React from 'react'
import { Header, Footer, Button } from '../components'


const Brand = ({ popupAtributes }) => {

    const [popup, setShowPopup] = React.useState(false)
    const [navCount, setNavCount] = React.useState(0)

    const refShadow = React.useRef()


    const handleOutsideClick = (event) => {
        const path = event.composedPath();
        if (path.includes(refShadow.current)) {
            setShowPopup(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, []);


    const showPopup = () => {
        setShowPopup(!popup)
    }

    const plusNavStatus = () => {
        if (navCount >= 0 && (navCount + 1 < Math.ceil(popupAtributes.length / 3))) {
            setNavCount((prev) => ++prev)

        }
    }

    const minusNavStatus = () => {
        if (navCount !== 0) {
            setNavCount((prev) => prev - 1)
        }
    }

    let size = 3;
    let subarray = [];
    for (let i = 0; i < Math.ceil(popupAtributes.length / size); i++) {
        subarray[i] = popupAtributes.slice((i * size), (i * size) + size);
    }



    return (
        <div className="wrapper">
            <Header />
            <section className="content">
                <div className="brand__container">
                    {popup && <><div className="popup">
                        <div className="content__text">
                            <div className="brand__text">
                                <div className="brand__text-content">
                                    <span>преимущества</span>
                                    <p>brend<strong>xy</strong></p>
                                </div>

                            </div>
                        </div>
                        <div onClick={showPopup} className="popup__close"></div>
                        <div className="popup__content">
                            <ul >
                                {subarray[navCount].map((item, index) => (
                                    <li key={`${index}__${item.length}`}>
                                        <div className="popup__number">{`0${index + 1}`}</div>
                                        <div className="popup__text">{item}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="popup__nav">
                            <div className="popup__prev" onClick={minusNavStatus}></div>
                            <div className={navCount === 0 ? 'popup__dot dot--active' : 'popup__dot'} ></div>
                            {Array(Math.ceil(popupAtributes.length / 3 - 1)).fill().map((el, index) => (
                                <div key={index} className={navCount === index + 1 ? 'popup__dot dot--active' : 'popup__dot'}></div>
                            ))}
                            <div className="popup__next" onClick={plusNavStatus}></div>
                        </div>
                    </div>
                        <div ref={refShadow} class="setblack"></div>
                    </>
                    }
                    <div className="content__text">
                        <div className="brand__text">
                            <div className="brand__text-content">
                                <span>ключевое сообщение</span>
                                <p>brend<strong>xy</strong></p>
                            </div>

                        </div>
                    </div>
                    <div className="brand__content">
                        <div className="brand__rec">
                            <div className="brand__rec--text">
                                <p>
                                    3 раза в день после
                                    еды. После приема
                                    препарата рекомен-
                                    дуется воздержаться
                                    от пищи и напитков
                                    в течение 1 часа
                                </p>
                            </div>
                            <div className="brand__rec--logo"></div>
                        </div>
                        <div className="brand__cource-block">
                            <div className="brand__cource">
                                <div className="brand__cource--text">
                                    <p>
                                        Курс лечения от
                                        7 дней до 1 мес.
                                    </p>
                                </div>
                                <div className="brand__cource--logo"></div>
                            </div>
                            <Button
                                onClick={showPopup}
                                text={'Подробнее'}
                                className={'button--plus'}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer bottle={true} />
        </div>
    )
}

export default Brand