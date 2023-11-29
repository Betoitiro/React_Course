const Events = () => {

    //se cria um eventro dentro do arquivo, que sera chamado dentro do botton
    const handleMyEvent = (e) =>{
        console.log("Ativou o evento")
    };

    const rederSomething = (x) => {
        if(x){
            return <h1>Render  this!</h1>
        }else{
            return <h1>Render this too</h1>
        }
    }
    return(
        <div>
            <div>
                {/**
                 * não colocasse os (), dentro das chaves, pois dessa maneira o evento seria acionado/ disparado 
                 * quando o script for iniciado
                 */}
                <button onClick={handleMyEvent}>CLique aqui</button>
            </div>

            <div>
                {/**
                 * dependendo do tamanho da função pode colocar dentro do botton
                 */}
                <button onClick={()=>console.log("clicou aqui primeiro")}>Clique aqui novament</button>
            </div>
            <div>
                {rederSomething(true)}
                {rederSomething(false)}
            </div>
        </div>
    );
};

export default Events;