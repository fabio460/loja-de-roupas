import React from "react";
import { useHistory } from "react-router";
//import styled from 'styled-components';
function Produto({nome,imagem,item,id}){
    const h = useHistory();
    const carrinho = ()=>{
       localStorage.setItem('id',item._id)
       localStorage.setItem('nome',item.nome);
       localStorage.setItem('imagem',item.imagem1);
       localStorage.setItem('valor',item.valor);
       localStorage.setItem("sexo",item.sexo);
       localStorage.setItem('idade',item.idade);
       console.log(localStorage.getItem('id'))
       h.push('/carrinhoDeCompras');
    }

    return<>
      
            <div onClick={carrinho} className='produto_item_1'>
                <div>{nome}</div>
                <img src={imagem} alt=''/>
                
            </div>
    
    </>
}
export default Produto;