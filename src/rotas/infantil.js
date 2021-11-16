import React, { useEffect, useState } from "react";
import api from "../api";
import styled from "styled-components";
import Produto from "../produto";
import {useHistory} from 'react-router-dom';

function Infantil(){

    const Produtos = styled.div`
        
    .container{
        width: 95%;
        margin: auto;
        
      }
      
      .produtos_container{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        margin:0px 10px;
        padding-top:10px;
        border-top:solid black 1px;
        
      }
      li{
          list-style:none;
          cursor:pointer;
      }
      li:hover{
          color:orange;
      }
      
      .produto img{
          width: 180px;
      }
      .produto{
         display: flex;
         flex-direction: column;
         align-items: center;
      }
      section{
          display:flex;
          padding-top:10px;
      }
      nav{
          margin:10px 0px;
      }
      aside{
          border-top:solid black 1px;
          width:40%;
          padding-top:10px;
      }
      h4{
          margin:0;
      }
      span{
          cursor:pointer;
      }
      span:hover{
          color:orange;
      }
      .banner img{
          width:100%;
          height:250px;
      }
      @media (max-width:400px) {
        section{
          flex-direction: column;
          margin-top: 10px;
        }
        section img{
         width: 98%;
         height: 300px;
         margin:auto;
       }
       .produtos_container{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        margin:0px 10px;
        padding-top:10px;
        border-top:solid black 1px;
        
      }
      .banner img{
        width:100%;
        height:120px;
      }
      ul{
        display:flex;
        flex-wrep:wrep;
        width:100%;
        padding:0px 0px;
        margin:0px;
        flex-wrap: wrap;
    }
    li{
        margin:10px;
    }
    aside{
        width:100%;

    }
     }
    `

    const [list,setList]=useState([])

    async function atualizaTela(){
        const p =await api.listar();
        const l = p.filter((item)=>{
                        if(item.idade === "infantil" && ( item.sexo === "feminino" || item.sexo === "masculino")){
                            return item
                        }
                        return '';
                    })
        
        setList(l)
        document.querySelector('.span').innerHTML=" "
    }

    async function listarPorTipo(sexo,tipo){
        const p =await api.listar();
        const l = p.filter((item)=>{
                        if( item.tipo === tipo && item.sexo === sexo && item.idade === "infantil"){
                            return item
                        }
                        return ""
                    })
        
        setList(l)
        document.querySelector('.span').innerHTML=` > ${tipo}`
        localStorage.setItem("tipo","")
    }
    useEffect(()=>{
       listarPorTipo(localStorage.getItem("sexo"),localStorage.getItem("tipo")) 

    },[])

    const h = useHistory();
    const voltar = ()=>{
        h.push('/')
    }



    return<>
      <Produtos>
            <div className='banner'>
                <img src='https://www.globalmixx.com.br/wp-content/uploads/2017/10/banner-moda-infantil.png' alt=''/>
            </div>
            <div className='container'>
                <nav className=''>
                    <span className='voltar' onClick={voltar}>inicio </span>
                    {" > "}
                    <span onClick={()=>atualizaTela()}> infantil     </span>
                    <span className='span'></span>
                </nav>   
                <section>
                    <aside>
                        <h4>Categoria</h4>
                        <ul>
                            <li onClick={()=>listarPorTipo("masculino","calça") }>calça menino</li>
                            <li onClick={()=>listarPorTipo("masculino","camisas")}>camisas menino</li>
                            <li onClick={()=>listarPorTipo("masculino","bermudas")}>bermuda menino</li>
                            <li onClick={()=>listarPorTipo("masculino","tênis")}>tênis menino</li>
                            <li onClick={()=>listarPorTipo("feminino","calça")}>calças menina</li>
                            <li onClick={()=>listarPorTipo("feminino","vestido")}>vestido</li>
                            <li onClick={()=>listarPorTipo("feminino","blusa")}>blusa menina</li>
                            <li onClick={()=>listarPorTipo("feminino","shorts")}>short menina</li>
                            
                        </ul>
                    </aside>
                    <div className='produtos_container'>
                        {list.map((item)=>{
                            return <Produto nome={item.nome} imagem={item.imagem1} item={item}/>
                        })}
                    </div>
                </section>
            </div>
        </Produtos>
    </>
}
export default Infantil;