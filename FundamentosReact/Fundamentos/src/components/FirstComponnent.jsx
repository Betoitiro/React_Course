import MyComponent from "./MyComponents";

const FirstComponents = () => {
    //essa funcao vai adicionar um texto dentro do app.jsx
    return (
        <div>
            {/**
             * 
             * A maneira de como comentar dentro do jsx
             * (Esses comentarios diferente do html n é vazado para o usuario atravez do console.)
             * 
             */}
            <h1>
                meu primeiro componente
            </h1>
            {/**
             * colocando a hierarquia de components, com o FirstComponents sendo pai de MyComponnets
             */}
            <MyComponent/>
        </div>
    );

};


export default FirstComponents;

