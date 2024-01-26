import React from "react";
import LocI from './Locimg.png';
import './Localizacao.css';
const Localizacao = () => {
    return (
        <form>
            <div className="body">
                <DeliveryHeader />
                <DeliveryAddress />
            </div>
        </form>
    );
};

const DeliveryHeader = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }} className='title'>
                <img src={LocI} style={{ width: '40px', height: 'auto', marginRight: '80px' }} alt="" />
                <h1 style={{ margin: 0 }}>Entrega</h1>
            </div>
            <hr style={{ borderTop: '2px solid red', width: '350px', margin: '10px 0' }} />
        </div>
    );
};

const DeliveryAddress = () => {
    return (
        <div className='i'>
            <label htmlFor="">
                <h3>CEP</h3>
                <input type="text" placeholder='Ex. 12345-678' style={{ width: '250px' }} />
            </label>
            <label htmlFor="">
                <h3>Endereço</h3>
                <input type="text" placeholder='EX. Rua Rio Branco' />
            </label>
            <br /> <br />
            <div className="form-group">
                <div>
                    <label htmlFor="complemento"><h3>Complemento</h3></label>
                    <input type="text" id="complemento" placeholder='Ex. apto 123' style={{ width: '100px' }} />
                </div>
                <div>
                    <label htmlFor="numero"><h3>Número</h3></label>
                    <input type="text" id="numero" placeholder='Ex. 123' style={{ width: '100px' }} />
                </div>
            </div>

            <div className="form-group">
                <div>
                    <label htmlFor="Bairro"><h3>Bairro</h3></label>
                    <input type="text" id='Bairro' placeholder='Seu bairro' style={{width: '100px'}} />
                </div>

                <div>
                    <label htmlFor="Cidade"> <h3>Cidade</h3></label>
                    <input type="text" id='Cidade' placeholder='Sua cidade' style={{width: '100px'}}/>
                </div>
            </div>
            
            <div className="form-group">
                <div>
                    <label htmlFor="Estado"><h3>Estado</h3></label>
                    <input type="text" id='Estado' placeholder='Ex. São Paulo' style={{width: '100px'}} />
                </div>

                <div>
                    <label htmlFor="Pais"> <h3>País</h3></label>
                    <input type="text" id='Pais' placeholder='Ex. Brasil' style={{width: '100px'}}/>
                </div>
            </div>

            <center>
                <input type="submite" placeholder="Continuar" />
            </center>

        </div>
    );
};

export default Localizacao;
