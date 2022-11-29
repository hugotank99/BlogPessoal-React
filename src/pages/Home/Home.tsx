import react, { useState }  from "react";
import './Home.css'

function Home() {
    const [num, setNum] = useState (0); //modo de aplicar o hook state

    return(
        <><h1>Pagina Home</h1>
        <div>
            <p>Quantos você deseja? {num} </p>
            <button onClick={() => setNum(num - 1)}>
                -
            </button>
            <button onClick={() => setNum(num + 1)}>
                +
            </button>
        </div></>
        
    );
};

export {Home}