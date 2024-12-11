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

    const callAlert = ()=>{
        alert('Hello!');
    }
    const helloUser =(userName)=>{
        alert(`Hello ${userName}`);
    }
    const eventInfo = (e)=>{
        
        e.preventDefault();
        console.log(e);
    }
    let count = 0;
    const counter =()=>{
        count++;
    }
    return (
        <div className='w-50 mx-auto'>
            <button onClick={callAlert} style={inlineStyle}>
                {buttonText} call alert
            </button>
            <button onClick={()=>{
                helloUser('Test!!!!')
            }} className='btn btn-primary'>
                hello username
            </button>
            <button onClick={(e)=>eventInfo(e)} className={style.custom}>
                Module css Event
            </button>
            <button className={`${style.custom} m-3 p-5`}>
                Module css
            </button>
            <div>
                <button onClick={counter} className="btn btn-danger">
                    +1
                </button>
                <p>
                    {count}
                </p>
            </div>
        </div>
    );
}

export default MyButton;