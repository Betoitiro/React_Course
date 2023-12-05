import React from 'react'

export const UserDetalis = ({name, job, age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>profissão: {job} </p>
        <p> idade: {age}</p>
        

        {age >=18 ? (
            <p>
                pode tirar carteira de habilitação
            </p>
        ): (
            <p>Menor de idade</p>
        )}

    
    </div>
  );
};

export default  UserDetalis;