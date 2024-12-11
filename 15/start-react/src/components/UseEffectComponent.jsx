import React, {useState, useEffect} from 'react';

function UseEffectComponent(props) {
    // useEffect(()=>{}) Виконується після кожного рендеру
    // useEffect(()=>{},[]) Виконується один раз підчас монтуєтсья
    // useEffect(()=>{},[value]) Виконується один раз підчас монтування і зміни value
    const [count, setCount] = useState(0)
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    //     return ()=>{
    //         console.log('Виконується після кожного рендеру');
    //     }
    // })
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    //     return ()=>{
    //         console.log('Виконується один раз підчас монтуєтсья');
    //     }
    // },[])
    useEffect(()=>{
        document.title = `Count ${count}`;
        return ()=>{
            console.log('Виконується один раз підчас монтування і зміни value');
        }
    },[count])

    return (
        <div>
            <p>
                {count}
            </p>
            <button onClick={()=>{setCount(count+1)}} className="btn btn-primary">
                +1
            </button>
        </div>
    );
}

export default UseEffectComponent;