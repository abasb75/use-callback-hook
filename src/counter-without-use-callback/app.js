import { useState } from "react";
import Button from "./button";

function App(){
    const [count,setCount] = useState(0);
    const [inc,setInc] = useState(1);

    const increment = ()=> {
        setCount(count=>count+inc);
    };
    const decrement = () => {
        setCount(count=>count-inc);
    };

    return (<>
        <div>
            <input value={inc} onChange={e=>setInc(parseInt(e.target.value))} type="number"/>
            <Button onClick={decrement}>-</Button>
            {count}
            <Button onClick={increment}>+</Button>
        </div>
    </>);
}

export default App;