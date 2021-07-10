import React from 'react'

const Button = ({ text, className, onClick }) => {


    return (
        <div onClick={onClick} className={`button ${className}`} >
            {text}
        </div >
    )
}

export default Button