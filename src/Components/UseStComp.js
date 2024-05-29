import React, { useState, useEffect } from 'react'
// useState, useEffect are hooks.
// in my code - 'count' is state name and 'setCount' is useState function, jeta count er state ke update korte help korbe.

// 'useEffect' akta react hook jeta sideeffect dite kaj kre. only work in functional component. It is not working in class component.
// component re-render hoar just pore theke 'useEffect' kaj start kre.

const UseStComp = () => {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState('Other Data');

    const handleClick = () =>{
        setCount(count + 1);
    }

    const handleClickOther = () =>{
        setOther('Data change');
    }

    useEffect(()=>{
        console.log("useEffect hook working...");
    },[other]); // An empty dependency array '[]' means that the effect does not depend on any values from the component scope.

    return (
        <>
            <div className='text-center mb-5'>
                <h1>My State {count}</h1>
                <button onClick={handleClick}>Click Me</button>

                <h1>{other}</h1>
                <button onClick={handleClickOther}>Click Me</button>
            </div>
        </>
    )
}

export default UseStComp;