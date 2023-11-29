import { useCallback, useState } from "react";
import Button from "./button";

function App(){
    const [count,setCount] = useState(0);
    const [inc,setInc] = useState(1);

    const cashedIncrement = useCallback(()=> {
        setCount(count=>count+inc);
    },[inc]);
    const cashedDecrement = useCallback(() => {
        setCount(count=>count-inc);
    },[inc]);

    return (<>
        <div>
            <input value={inc} onChange={e=>setInc(parseInt(e.target.value) || 0)} type="number"/>
            <Button onClick={cashedDecrement}>-</Button>
            {count}
            <Button onClick={cashedIncrement}>+</Button>
        </div>
    </>);
}

export default App;