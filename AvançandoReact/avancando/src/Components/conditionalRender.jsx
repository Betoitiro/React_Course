import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("Carlos");

    /**
     * 
     *  EStrutura para usar o set name 
     *  cont [name, setName] = useState("nomeQualquer");
     * 
     * <button onCLick={()=>setName("NomeQueDesejaMudar")}>MudarNome</button>;
     * 
     */

    return <div>
        <h1>if convencional</h1>
        <p>Isso sera exibido?</p>
        {x && <p>se x for true sim!</p>}
        {!x && <p>agora x é falso</p>}

        <h1>
            IF ternario 
        </h1>
        {name ==="João" ? (
            <div>
                <p>
                    O nome é João
                </p>
            </div>
        ) : (
            <div>
                <p>
                    nome não encontrado
                </p>
            </div>
        )}
        <button onClick={()=> setName("João")}>Clique aqui</button>
    </div>
};

export default ConditionalRender;