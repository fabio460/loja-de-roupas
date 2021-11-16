import React, { useState,useEffect } from "react";
import styled from 'styled-components';
import api from './api';
import Produto from './produto';
function Produtos2(){
    const [texto,setTexto] = useState();
    const [list,setList]=useState([])
    const Produtos = styled.div`
        
    .container{
        width: 80%;
        margin: auto;
        
      }
      
      .produtos_container{
        display: grid;
        grid-template-columns: repeat(4,1fr);
      }
      
      
      
      .produto img{
          width: 200px;
      }
      .produto{
         display: flex;
         flex-direction: column;
         align-items: center;
      }
      .carregando{
          display:flex;
          justify-content:center;
          background-color:red;
      }
      @media (max-width:400px) {
        
         .produto h1{
           font-size: 5px;
         }
        .produtos_container{
          display: grid;
          grid-template-columns: 1fr;
        }
      
        .container{
           width :98%;
        }
        .search{
            width:95%;
            margin:0px;
        }
        input{
            margin:0px;
            width:280px;
        }
      }
      
    `
 
    async function atualizarLista(){
        const l =await api.listar();
        if(!l){
            window.location.reload()
        }
        setList(l)
    }
    useEffect(()=>{
        document.querySelector('.produtos_container').innerHTML="<div className='carregando'> carregando ... </div>"
       atualizarLista();
    },[])
    const buscar =async ()=>{
       if(texto){
            const p =await api.listar()
            var aux =[];
            p.find(element => {
                if(element.nome.includes(texto)){
                    aux.push(element);
                }
                return '';
            });           
            setList(aux)
       }
       else{
           alert('insira um texto no campo')
           atualizarLista()
       }
    }
    const search = (e)=>{
        setTexto(e.target.value)
        
    }
    return<>
       <div className='container'>
          <div className='search'>
            <input value={texto} onChange={search} />
            <button onClick={buscar}>buscar</button>
          </div>
       </div>
       <Produtos>
           <div className='container'>
               
               <div className='produtos_container'>

                   {list.map((item)=>{
                       return <Produto nome={item.nome} imagem={item.imagem1} item={item} id={item._id}/>
                   })}
               </div>
           </div>
       </Produtos>
    </>
}
export default Produtos2;