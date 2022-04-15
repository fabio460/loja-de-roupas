import React, { useState,useEffect } from "react";
import styled from 'styled-components';
import api from './api';
import Banner from "./bootstrap/banner";
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
      input{
          background-color:red;
          border:0;
          width:100px;
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
            <input value={texto} onChange={search} placeholder='pesquisar'/>
            <img src='https://thumbs.dreamstime.com/b/%C3%ADcone-do-lupa-achado-da-busca-ou-ilustra%C3%A7%C3%A3o-logotipo-sinal-liso-vetor-isolado-no-fundo-branco-ilustra-o-simples-para-gr-fico-e-153736337.jpg' onClick={buscar} alt=''/>
          </div>
       </div>
       <div className="header_botton"><h1>melhor site e-commerce</h1></div>
       <div className="banner"><Banner/> </div>
       <Produtos>
           <div className='container'>
               
               <div className='produtos_container'>

                   {list.map((item)=>{
                       return <Produto nome={item.nome} imagem={item.imagem1} item={item} id={item._id} valor={item.valor}/>
                   })}
               </div>
           </div>
       </Produtos>
    </>
}
export default Produtos2;