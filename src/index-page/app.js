import { Link } from "react-router-dom";

function App(){
    return(<ul>
        <li><Link to={'/counter-without-use-callback'}>Counter Without useCallback</Link></li>
        <li><Link to={'/counter-with-use-callback'}>Counter With useCallback</Link></li>
    </ul>)
}

export default App;