import React, { useEffect, useState }  from "react";
import api from "../api";
import Carrinho from './carrinho';
import styled from 'styled-components';
import Header from '../header'
function SacolaDeCompras(){
    const [list,setList]= useState([]);
    async function carregarApi(){
       const l =await api.listarCarrinho()
       setList(l)
    }

    const excluir = (id)=>{
      api.deletarCarrinho(id);
      setTimeout(() => {
         window.location.reload()
      }, 500);
    }
    
    const Component = styled.div`
       .tela{
          display:flex;
          width:100%;
       }
       .bloco{
          display:grid;
          grid-template-columns:1fr 1fr;
          margin:30px;
       }
       .lista{
          width:100%;       }
       button{
          width:70%;
          height:35px;
          background-color:orangered;
          color:white;
          border-radius:5px;
          cursor:pointer;
       } 
       button:hover{
          background-color:rgb(205, 19, 43);
       }
       .btn{
          display:flex;
          justify-content:center;
       }
       .total{
          display:flex;
          justify-content:center;
          align-items:center;
          width:100%;
       }
       .parcela{
         display:flex;
         
         margin:10px -20px 20px 15%;
       }
       .item_total{
          display:flex;
          align-items:center;
          justify-content:space-between;
          
          width:70%;
       }
       @media (max-width:400px){
         .bloco{
            grid-template-columns:1fr;
            margin:10px 2px;;
         }
       }
    `
    //document.querySelector('span').innerHTML='<h1>vazio</h1>';
    
   const [quant,setQuant]=useState();
   const [total,setTotal]=useState();
   

   async function listarCarrinho(){
      const lista = await api.listarCarrinho();
      var i =0;
      lista.map((item)=>{
        i = i+1;
        
        
        return ''
      })
      localStorage.setItem('cont',i);
      setQuant(i);
    }

   async function calcularTotal(){
      const lista = await api.listarCarrinho()
      var total =0;
      lista.map((item)=>{
         var str = item.valor;
         var  valor= str.replace(',','.')
         var v = parseFloat(valor);
         var q = v*parseFloat(item.quantidade)
         total = total + q;
         
         
         return ''
      })
      setTotal(total.toFixed(2))
      
    }
    useEffect(()=>{
       carregarApi()
       listarCarrinho()
       calcularTotal()
       
    },[])

   
    return<>
       <Header/>
       <Component>
        <div className='container'>
           <div className='bloco'>
               <div className='lista'>
                  <h3>Sacola de compras ({quant} itens) </h3>
                  {list.map((item)=>{
                     return <Carrinho nome={item.nome} imagem={item.imagem1} valor={item.valor} id={item._id} tamanho={item.tamanho} quantidade={item.quantidade} excluirItem={excluir}/>
                  })}
               </div>

               <aside>
                     <div className='total'>
                        <div className='item_total'>
                          <div>Total</div>
                          <h5> R$ {total} </h5>
                          
                        </div>
                        
                     </div>

                     <div className='parcela'>ou 6x de R$ {(total/6).toFixed(2)} sem juros</div>
                     <div className='btn'>
                           <button>fazer pedido</button>
                     </div>
               </aside>

           </div>
        </div>
       </Component>
    </>
}

export default SacolaDeCompras;