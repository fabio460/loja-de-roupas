import React, { useEffect, useState } from "react";
import api from "../api";
import styled from "styled-components";
import Produto from "../produto";
import {useHistory} from 'react-router-dom';

function PlusSize(){

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
        flex-wrap: wrap;
        width:100%;
        padding:0px 0px;
        margin:0px;
    }
    li{
        margin:15px;
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
                        if( item.sexo === "feminino plus size" || item.sexo === "masculino plus size"){
                            return item
                        }
                        return '';
                    })
        
        setList(l)
        document.querySelector('.span').innerHTML=" "
    }

    async function listarPorTipo(tipo,sexo){
        const p =await api.listar();
        const l = p.filter((item)=>{
                        if( item.tipo === tipo && item.sexo === sexo ){
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
                <img src='https://www.megamodashopping.com.br/wp-content/uploads/2019/04/BANNER-1920x720-1.png' alt=''/>
            </div>
            <div className='container'>
                <nav className=''>
                    <span className='voltar' onClick={voltar}>inicio </span>
                    {" > "}
                    <span onClick={()=>atualizaTela()}> plus size </span>
                    <span className='span'></span>
                </nav>   
                <section>
                    <aside>
                        <h4>Categoria</h4>
                        <ul>
                            <li onClick={()=>listarPorTipo("calça","masculino plus size","adulto") }>calça masculina</li>
                            <li onClick={()=>listarPorTipo("camisas","masculino plus size","adulto")}>camisas masculina</li>
                            <li onClick={()=>listarPorTipo("bermudas","masculino plus size","adulto")}>bermuda masculina</li>
                            <li onClick={()=>listarPorTipo("calça","feminino plus size","adulto")}>calças feminina</li>
                            <li onClick={()=>listarPorTipo("vestido","feminino plus size","adulto")}>vestido</li>
                            <li onClick={()=>listarPorTipo("blusa","feminino plus size","adulto")}>blusa feminina</li>
                            <li onClick={()=>listarPorTipo("cropped","feminino plus size","adulto")}>cropped</li>
                            
                        </ul>
                    </aside>
                    <div className='produtos_container'>
                        {list.map((item)=>{
                            return <Produto nome={item.nome} imagem={item.imagem1} item={item} valor={item.valor}/>
                        })}
                    </div>
                </section>
            </div>
        </Produtos>
    </>
}
export default PlusSize;