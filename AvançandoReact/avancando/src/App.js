//import logo from './logo.svg';
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
import Fragment from './Components/Fragment';
import Container from './Components/Container';

function App() {

  //const name = "Beto";
  const [userName] = useState("Fernanda");
  const myvalue = 8;


  const cars = [
    {id: 1, brand: "ferrari", color: "Amarelo", newCar: true, km:0},
    {id: 1, brand: "Marcedes", color: "cinza", newCar: false, km:15036},
    {id: 1, brand: "VW", color: "Branco", newCar: true, km:0},
    {id: 1, brand: "Volvo", color: "preto", newCar: false, km:520000},

  ]



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


        {/**
         * 
         * loop em array de objetos
         * 
         */}
        
        {/**
         * 
         * Esse metodo de loop usando map é o mais utilizado!!
         * 
         */}
        {cars.map((car)=>(
          <CarDetalis 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} />
        ))}

        {/**
         * 
         * fragment
         * 
         */}
      <Fragment propFragment="teste"/>

      {/**
       * 
       * children
       * 
       */}

       
      <Container>
          <p>
            Este é  conteudo!!
          </p>
          <p>
            O valor é {myvalue}
          </p>
      </Container>
    </div>
  );
}

export default App;
