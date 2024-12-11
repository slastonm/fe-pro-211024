import React, {useState} from 'react';

function UseState(props) {
    let [counteValue, setCounterValue] = useState(0);
    function upValue(){
        setCounterValue(counteValue=>counteValue+1);
    }
    function downValue(){
        setCounterValue(counteValue-1);
    }
    let [showState, setShowState] = useState(false);
    function changeShowState(){
        setShowState(showState=>!showState);
    }

    return (
        <div>
            <button onClick={upValue} className="btn btn-primary">
                +1
            </button>
            <span className="btn">
                {/* {counteValue} */}
                {counteValue>0 ? counteValue : 'Low value'}
            </span>
            <button onClick={downValue} className="btn btn-primary">
                -1
            </button>
            <div>
                <button onClick={changeShowState} className="btn btn-info">
                    {showState? 'Close': 'Open'}
                </button>
                {showState? <div>Search input </div>: null}
            </div>
        </div>
    );
}

export default UseState;