import React, { useEffect, useState } from "react";
import api from "../api";
import styled from "styled-components";
import Produto from "../produto";
import {useHistory} from 'react-router-dom';
function Masculino(){

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
    }
    li{
        margin:5px;
    }
    aside{
        width:100%;

    }
     }
    `
    const [list,setList]=useState([])

    async function atualizaTela(sexo){
        const p =await api.listar();
        const l = p.filter((item)=>{
                        if( item.sexo === sexo && item.idade !== "infantil"){
                            return item
                        }
                        return '';
                    })
        
        setList(l)
        document.querySelector('.span').innerHTML=" "
    }

    async function listarPorTipo(tipo,sexo,idade){
        const p =await api.listar();
        const l = p.filter((item)=>{
                        if( item.tipo === tipo && item.sexo === sexo && item.idade === idade ){
                            return item
                        }
                        return ""
                    })
        
        setList(l)
        document.querySelector('.span').innerHTML=` > ${tipo}`
        localStorage.setItem("tipo","")
    }
    useEffect(()=>{
       listarPorTipo(localStorage.getItem("tipo"),localStorage.getItem("sexo"),localStorage.getItem("idade")) 
    },[])

    const h = useHistory();
    const voltar = ()=>{
        h.push('/')
    }

    return<>
    <Produtos>
            <div className='banner'>
                <img src='https://img.irroba.com.br/filters:fill(transparent):quality(95)/seltenbr/catalog/banners/categoria/banner-categoria-moda-masculina.png' alt=''/>
            </div>
            <div className='container'>
                <nav className=''>
                    <span className='voltar' onClick={voltar}>inicio </span>
                    {" > "}
                    <span onClick={()=>atualizaTela("masculino")}> masculino</span>
                    <span className='span'></span>
                </nav>   
                <section>
                    <aside>
                        <h4>Categoria</h4>
                        <ul>
                            <li onClick={()=>listarPorTipo("calça","masculino","adulto") }>calça</li>
                            <li onClick={()=>listarPorTipo("camisas","masculino","adulto")}>camisas</li>
                            <li onClick={()=>listarPorTipo("bermudas","masculino","adulto")}>bermudas</li>
                            <li onClick={()=>listarPorTipo("tenis","masculino","adulto")}>tenis</li>
                            
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
export default Masculino;