const Challange = (e) =>{

    const a = 5;
    const b = 6;

    const a1 = parseFloat(a);
    const b1 = parseFloat(b);
    const soma = a1 + b1;
    
    function Valor1() {
        console.log(a)
    }
    function valor2(){
        console.log(b);
    }
    function SomarF(){
        console.log(soma)
    }
    return(
        <div>
            <div>
                <button onClick={Valor1}>
                    Mostrar valor 1
                </button>

            </div>
            <div>
                <button onClick={valor2}>
                    Mostar valor 2
                </button>
            </div>
            <div>
                <button onClick={SomarF}>
                    soma dos valores
                </button>
            </div>
        </div>

    );
}

export default Challange;