import React, {useState} from 'react'
import './Counter.css'

function Counter() {

    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    return (
        <div>
            <h3 data-testid={'header'}>My counter</h3>
            <h2 data-testid={'counter'}
                className={
                    counterValue <= -100 ? 'red' : counterValue >= 100 ? 'green' : null
                }
            >{counterValue}</h2>
            <button data-testid={'subtract-btn'}
                    onClick={() => setCounterValue(+counterValue - +inputValue)}
            >{'-'}</button>
            <input
                data-testid={'input'}
                type={'number'}
                value={inputValue}
                className={'text-center'}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button data-testid={'add-btn'}
                    onClick={() => setCounterValue(+counterValue + +inputValue)}
            >{'+'}</button>
        </div>
    );
}

export default Counter;