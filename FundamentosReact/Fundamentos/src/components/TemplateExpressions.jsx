 const TemplateExpressions = () =>{

    const name = "Humberto";
    const data = {
        age:31, 
        job: "Programmer",
    };


    return(
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Profissão {data.job}</p>
        </div>
    )
 }

export default TemplateExpressions;