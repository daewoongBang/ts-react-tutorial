import React, {useState} from 'react';

const Counter = () => {
    // Generics를 사용하여 해당 상태가 어떤 타입을 가지고 있을지 설정
    const [count, setCount] = useState<number>(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;