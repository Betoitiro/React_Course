import { useState, useEffect } from 'react';

//4 -> custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //5 - refatorando post

  //vai configurar os post e cabeçalhos
  const [config, setConfig] = useState(null); // Correção: nome da variável
  const [method, setMethod] = useState(null); // func para get ou post
  const [callFetch, setCallFetch] = useState(false); // usado para acionar o fetch

  // -> vai trazer os dados quando forem atualizados
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json", // Correção: "application/json"
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
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
        let fetchOptions = [url, config]; // Correção: adição de colchetes

        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest(); // Correção: chamada da função
  }, [config, method]); // Correção: incluir 'method' como dependência

  return { data, httpConfig };
};
