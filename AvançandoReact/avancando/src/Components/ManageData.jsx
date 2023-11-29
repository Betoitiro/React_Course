import {useState} from 'react'

const ManegeData = () => {

    let someData = 10;
    let n = 10;

    //atribui um valor inicial ao usestate
    const[number, setNumber] = useState(n);
    return(
        <div>
            <div>
                {/**
                 * 
                 * Na maneira abordada o valor da variavel n é alterada
                 */}
                <p>valor: {someData}</p>
                <button onClick={()=> (someData=15)}>Mudar variavel</button>
            
            </div>
                
            <div>

                {/**
                 * 
                 * usando o useState, conseguimos mudar o valor de uma variavel.
                 * É possivel fazer uma função para somar mais 10 ao valor que foi atribuido a variavel
                 * 
                 */}
                <p>valor: {number}</p>
                <button onClick={()=> setNumber(n+10)}>somar 10</button>
            </div>

        </div>
        
    );
};

export default ManegeData;