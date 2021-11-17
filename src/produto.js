import React from "react";
import { useHistory } from "react-router";
//import styled from 'styled-components';
function Produto({nome,imagem,item,valor}){
    const h = useHistory();
    const carrinho = ()=>{
       localStorage.setItem('id',item._id)
       localStorage.setItem('nome',item.nome);
       localStorage.setItem('imagem',item.imagem1);
       localStorage.setItem('valor',item.valor);
       localStorage.setItem("sexo",item.sexo);
       localStorage.setItem('idade',item.idade);
       
       h.push('/carrinhoDeCompras');
    }
    const parcelar = ()=>{
        var valortratado = valor.replace(',','.');
        return (parseFloat(valortratado)/6).toFixed(2)
    }
    return<>
      
            <div onClick={carrinho} className='produto_item_1'>
                
                <img src={imagem} alt=''/>
                <div>{nome}</div>

                <div >
                  <div className='preço'>R$ {valor}</div>
                  <div className='parcela'>6x  R${parcelar()} sem juros</div>
                </div>
            </div>
    
    </>
}
export default Produto;