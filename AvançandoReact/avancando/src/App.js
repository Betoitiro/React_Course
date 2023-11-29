import logo from './logo.svg';
import './App.css';

// importando imagem que não esta na pasta public
import Logo512 from './assets/logo512.png';

//importando componnents
import ManegeData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/conditionalRender';
import ShowUserName from './Components/ShowUserName';
import { useState } from 'react';
import CarDetalis from './Components/CarDetalis';

function App() {

  const name = "Beto";
  const [userName] = useState("Fernanda")
  return (
    <div className="App">
      <h1>
        avancando em react
      </h1>
      {/**Adicionando uma imagem em public */}
      <div>
        {/**
         * quando a imagem esta em public ja pode acessala pelo "/nomeDaImagem"
         * 
         * public é mais usado para imagens que dificilmente terão alterações 
         */}
        <img src="/logo192.png" alt="Logo" />
      </div>
      <div>
        {/**
         * usando imagens que esteja em outra pasta (assets)
         * 
         * -> se importa a imagem -> atribui um const/nome a ela -> quando for puxar a imagem usa a estrutura das chaves -> {};
         */}
         <img src={Logo512} alt="outra logo" />
      </div>
      <ManegeData/>
      <ListRender/>
      <ConditionalRender/>
      {/**
       * props
       */}
      <ShowUserName name={userName}/>

      {/**
       * destructuring
       */}
       <CarDetalis brand ="Vw"km ={100000} color ="branco"/>
       {/**
        * 
        * os nomes das propriedades tem que ser iguais aos dados do CarDetalis
        * 
        */}
        <CarDetalis brand ="VW"km ={0} color ="branco" newCar={true}/>
       <CarDetalis brand ="Ford"km ={1000} color ="preto" newCar={false}/>
       <CarDetalis brand ="toyota"km ={100000} color ="branco" newCar ={false}/>
       <CarDetalis brand ="Fiat"km ={0} color ="branco" newCar={true}/>

        

    </div>
  );
}

export default App;
