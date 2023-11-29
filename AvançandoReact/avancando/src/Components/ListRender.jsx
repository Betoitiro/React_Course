import { useState } from 'react'
import React from 'react'

const ListRender = () => {

    const [list] = useState(["Humberto", "Pedro", "Rafael", "Natan", "Luiz"])

    /**
     * 
     * criasse uma lista usando o useStates, para possivel atualização/exibição dos itens da tela
     * 
     */


    /**
     * 
     * dessa maneira estamos passando uma lista simulada do sql, ou seja, o elemento da lista ja possui uma chave unica ou primarykey
     * sendo assim muda a maneira de representar os valores da lista dentro do html
     * 
     */
    const [users, setUsers] = useState([
        {id:1, name: "Humberto", age: 18},
        {id:2, name: "Natan", age:19},
        {id:3, name: "luiz", age:20}
    ])

    const deleteRandom = () => {
        const randomNumber= Math.floor(Math.random()*4);
                                //Math floor é para os numeros apontarem para baixo (3,2,1)
        setUsers((prevUsers)=>{
                //prevUsers corresponde ao valor "atual" das variaveis
            return prevUsers.filter((user) => randomNumber !==user.id)
                //filtrara os usuarios
                //os id que baterem/ derem match com o do sorteado, sera deletado
                    
        })
    }

  return (
    <div>
        <ul>
            {/**
             * usando o metodo map e uma function, é possivel listar todos os elementos da lista
             */}

             {/**
              * 
              * para sanar um erro de chave (key), ja que o react precisa de uma chave unica para os itens listados
              * colocasse essa estrutura dentro da lista
              * 
              * list.map((item, i) =>(
              *     <li key={i}>{item}</li>))
              * 
              * essa implementação i, vai "atribuir uma chave primaria para cada elemento da lista"
              * 
              */}
            {list.map((item, i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {/**
             * 
             * dessa maneira (que seria a forma que os dados viriam de um banco sql), o sistema ja tem a primarykey, ou chave unica
             * nesse sentindo so basta colocar dessa maneira
             * 
             * 
             */}
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random user</button>
    </div>
  )
}

export default ListRender