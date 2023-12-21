import React from "react";
import './CartItem';
import'./CartSummary';
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import './Cart.css'

const Cart = () => (
    <main>
      <div className="page-title">Seu carrinho</div>
      <div className="content">
        <section>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
                <CartItem/>
              {/* Adicione mais itens do carrinho conforme necessário */}
            </tbody>
          </table>
          <CartSummary/>
        </section>
      </div>
    </main>
  );
  
  export default Cart;