import React from 'react';
import style from './MyButton.module.css';

function MyButton(props) {
    const inlineStyle ={
        color:'blue',
        fontSize:'30px',
        backgroundColor:'yellow',
        margin:'50px'
    }
    let buttonText = 'Hello user !!!! let value';
    return (
        <div className='w-50 mx-auto'>
            <button style={inlineStyle}>
                {buttonText}
            </button>
            <button className='btn btn-primary'>
                Regular classname
            </button>
            <button className={style.custom}>
                Module css
            </button>
            <button className={`${style.custom} m-3 p-5`}>
                Module css
            </button>
        </div>
    );
}

export default MyButton;