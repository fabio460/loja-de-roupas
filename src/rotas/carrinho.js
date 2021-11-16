import React from "react";
import styled from "styled-components";
import api from "../api";
function Carrinho({nome,imagem,valor,id,excluirItem,tamanho,quantidade}){

    const Component = styled.div`
      img{
          width:100px;
      }        
      .containerCarrinho{
          border:solid black 1px;
          display:flex;
          margin-bottom:10px;
          padding:20px;
          justify-content:space-between;
      }
      .excluir{
         cursor:pointer;
      }
      .excluir:hover{
        color:orange;
     }
      h3{
          color:red;
      }
      h4{
          margin:0px;
      }
      .left{
          display:flex;
      }
      img{
          margin:0px 20px;
      }
      .span{
         margin:10px;
         cursor:pointer;
      }
      .btn{
          margin:10px 0px;

      }
      .tamanho{
          margin:10px 0px;
      }
    `
    var quant = 1;
    const excluir =()=>{
        excluirItem(id)
    }
    const mais = ()=>{
     quant = parseInt(quantidade) + 1   
     api.atualizarCarrinho(id,quant)
     setTimeout(() => {
        window.location.reload()
     }, 200);
    }

    const menos = ()=>{
        const positivo = parseInt(quantidade);
        if(positivo > 1){
            quant = parseInt(quantidade) - 1   
            api.atualizarCarrinho(id,quant)
            setTimeout(() => {
               window.location.reload()
            }, 200);
        }
    }
    return<>
       <Component>
                <div className='containerCarrinho'>
                    <div className='left'>
                        <img src={imagem} alt=''/>
                        <div>
                            <h4>{nome}</h4>
                            <div className='tamanho'>tam  {tamanho}</div>
                            <div className='btn'>
                                <span className='span' onClick={menos}>-</span>
                                <span >{quantidade}</span>
                                <span className='span' onClick={mais}>+</span>
                            </div>              
                        </div>
                    </div>
                    <div className='right'>
                       <h3>{valor}</h3>
                       <div className='excluir' onClick={excluir}>excluir</div>
                    </div>
                </div>
       </Component>
    </>
}
export default Carrinho;