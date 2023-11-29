import { memo, useEffect, useState } from "react";

function Button({children,onClick}){
    const [isPending,setPending] = useState(true);

    useEffect(()=>{
        setPending(true)
        setTimeout(()=>{
            setPending(false)
        },1000)
    },[onClick]);

    if(isPending){
        return <>...</>;
    }
    return (<button onClick={onClick}>{children}</button>);
}

export default memo(Button);