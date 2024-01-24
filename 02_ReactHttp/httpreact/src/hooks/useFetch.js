import { useState, useEffect } from 'react';

//4 -> custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //5 - refatorando post

  //vai configurar os post e cabeçalhos
  const [config, setconsig] = useState(null);
  const [method, setMethod] = useState(null); // func the get or post
  const [callFetch, setCallFetch] = useState(false) //vai ser usado para mapear junto com o fetch
  // -> vai trazer os dados quando forem atualizados

  const httpConfig = (data, method)=>{
    if(method ==="POST"){
      setConfig({
        method, 
        headers:{
          "Content-type": "aplication/json",
        },
        body: JSON.stringify(data),
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url, callFetch]);

  //refatorando post

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {

        let fetchOptions = [url, config]

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    }
  }, [config])

  return { data, httpConfig };
};
