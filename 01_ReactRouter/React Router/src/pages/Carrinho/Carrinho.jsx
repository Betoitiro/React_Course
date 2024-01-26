import React from "react";
import CarrinhoItem from './CarrinhoItem'
import SummaryCarrinho from './SummaryCarrinho'
const Carrinho = () => {
    return (
        <>
          
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
                                <CarrinhoItem />
                                {/* Adicione mais itens do carrinho conforme necessário */}
                            </tbody>
                        </table>
                        <SummaryCarrinho />
                    </section>
                </div>
            </main>
            
        </>
    )
}
export default Carrinho;