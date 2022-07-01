import React, { useEffect, useState  } from 'react';

const Counterfunctionel = () => {

    const [counter, setCounter] = useState(0);

    const handleDecrease = () => {
        setCounter(counter - 1);
    }

    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    // Component Did Mount
    useEffect(() => {
    
    }, []);

    // Component Did Update
    useEffect(() => {
        console.log("Update from Functional Component", counter)
    }, [counter]);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => handleDecrease()}>Decrease</button>
            <button onClick={() => handleIncrease()}>Increase</button>
        </div>
    );
}

export default Counterfunctionel;
