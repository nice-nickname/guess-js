import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import Scene from "./Components/Scene/Scene";

export default function App() {
    const [state, setState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setState(true);
        }, 2000);
    }, []);

    return (
        <div className="App">
            {state ? <Scene /> : null}
            <Loader isFinished={state} />
        </div>
    );
}
