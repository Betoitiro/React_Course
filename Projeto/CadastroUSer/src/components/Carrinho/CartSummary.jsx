import React from 'react';
import './Cart.css'
const CartSummary = () => (
    <aside>
        <div className="box">
            <header>Resumo da compra</header>
            <div className="info">
                <div><span>Sub-total</span><span>R$ 418</span></div>
                <div><span>Frete</span><span>Gratuito</span></div>
                <div><button>Adicionar cupom de desconto <i className='bx bx-right-arrow-alt' ></i></button></div>
            </div>
            <footer>
                <span>Total</span>
                <span>R$ 418</span>
            </footer>
        </div>
        <button>Finalizar compra</button>
    </aside>
);

export default CartSummary; 