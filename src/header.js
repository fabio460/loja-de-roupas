import React, { useEffect } from "react";
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
import api from "./api";
function Header() {
  
  const Component = styled.div`
  header{
    display:flex;
    padding: 20px;
    align-items: center;
  }
  
  header div{
    margin: 0px 8px;
  }
  header h1{
    margin: 0px 200px 0px 0px;
    width:100%;
  }
  .menu:hover .menu-body{
    visibility: visible;
    padding-top: 30px;
    transition: 0.3s; 
    opacity: 1;
    height: 260px;
  }
  
  .menu-body{
    visibility: hidden;
    position: fixed;
    left:20%;
    right:20%;
    background-color: white;
    box-shadow: black 1px 2px 5px;
    padding-top: 30px;
    opacity: 0;
    padding: 60px;
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
  }
  li{
    list-style: none;
  }
  .logo{
    width:50px;
  }
 
  .menu-item:hover{
    color: orangered;
  }
  li:hover{
    color: orangered;
  }
  .menu-item,li{
    cursor: pointer;
  }
  .menu-body img{
    width:300px;
  }

  .bloco-menu{
    display:flex;
    width:100%;
      
  }
  .carrinho,.login{
    width:22px;
    margin:5px;
    cursor:pointer;
  }
  span{
    color:white;
    margin-left:-5px;
    background-color:red;
    border-radius:7px;
    height:15px;
    width:15px;
    display:none;
    justify-content:center;
    align-items:center;
    font-size:10px;
  }
  .nomeDoSite{
    cursor:pointer;
    display:flex;
    align-items:center;
  }
  a img{
    width:40px;
    margin-right:20px;
  }
  .bloco-menu{
    display:flex;
    align-items:center;
    
    height:50px;
  }
  @media (max-width:400px) {
    header{
      
      flex-direction: column;
      padding: 0px;
      align-items: flex-start;
      justify-content: flex-start;
    }
    span{
      
      padding:0px 5px;
    }
    .menu {
      width: 100%;
      display:flex;
      margin:0;
    }
    .bloco-menu{
      display:flex;
      width:95%;
      
    }
    .menu-body{
      left:0%;
      right:0%;
      padding:0px;
      padding:0px;
      padding-top: 3px;
    }
    .menu-body img{
      width:50%;
    }
    .menu-body ul{
      padding:0px;
      
    }
    .menu:hover .menu-body{
      padding: 8px;
    
    }
    .container{
      width:98%;
    }
    h1{
      width:100%;
      font-size:25px;
    }
    .login,.carrinho{
      display:flex;
    }
  }
  ` 
  const h = useHistory();
  const link_feminino = (e)=>{
   localStorage.setItem("tipo",e.target.id)
   h.push('/feminino');
  }
  
  const link_masculino_adulto = (e)=>{
    localStorage.setItem("tipo",e.target.id)
    localStorage.setItem("sexo","masculino")
    localStorage.setItem("idade","adulto")
    h.push('/masculino')
  }
  const link_plusSize_masculino = (e)=>{
    localStorage.setItem("tipo",e.target.id)
    localStorage.setItem("sexo","masculino plus size")
    h.push('/plussize')
  }
  const link_plusSize_feminino = (e)=>{
    localStorage.setItem("tipo",e.target.id)
    localStorage.setItem("sexo","feminino plus size")
    h.push('/plussize')
  }
  const link_infantil_masculino = (e)=>{
    localStorage.setItem("tipo",e.target.id)
    localStorage.setItem("sexo","masculino")
    h.push('/infantil')
  }
  const link_infantil_feminino = (e)=>{
    localStorage.setItem("tipo",e.target.id)
    localStorage.setItem("sexo","feminino")
    h.push('/infantil')
  }
  //const [icone,setIcone]=useState();
 var i = 0;
 async function verificarCarrinho(){
     const lista =await api.listarCarrinho()
     
     lista.map((item)=>{
        return i = i + 1;
     })
    
     if(i === 0){
       document.querySelector('span').style='display:none'
     }else{
      document.querySelector('span').style='display:flex'
     }
  }
  verificarCarrinho();
  useEffect(()=>{
      
  },[])
  return <>
    <Component>
         <header className='container'>
           

            <h1 className='nomeDoSite' onClick={()=>h.push('/')}>
              <a href='https://fabio460.github.io/Portifolio/'>
                 <img src='https://superherois.vercel.app/static/media/logo.67123f25.png' alt=''/>
              </a>
              E-commerce site
            </h1>   
            
            <div className='bloco-menu '>
                    <div className='menu'>
                        <div className='menu-item'>masculino</div>
                        <div className='menu-body'>
                          <ul>
                                <li id='camisas' onClick={link_masculino_adulto}>camisas</li>
                                <li id='bermudas' onClick={link_masculino_adulto}>bermudas</li>
                                <li id='calça' onClick={link_masculino_adulto}>calças</li>
                                <li id='tenis' onClick={link_masculino_adulto}>tenis</li>
                                
                            </ul>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDG8m7Lf8O9ZsL-ggTBkn1aUCofQqnE2G1w&usqp=CAU' alt=''/>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='menu-item'>feminino</div>
                            <div className='menu-body'>
                              <ul>
                                    <li id='vestidos' onClick={link_feminino}>vestidos</li>
                                    <li id='sapato' onClick={link_feminino}>sapatos</li>
                                    <li id='calça' onClick={link_feminino}>calças</li>
                                    <li id='blusa' onClick={link_feminino}>blusas</li>
                                    <li id='jeans' onClick={link_feminino}>jeans</li>
                                    <li id='saia' onClick={link_feminino}>saias</li>
                                    <li id='shorts' onClick={link_feminino}>shorts</li>
                                    <li id='tênis' onClick={link_feminino}> tênis</li>    
                                </ul>
                            
                                <img src='https://www.wefashiontrends.com/wp-content/uploads/2018/01/tende%CC%82ncias-2018.jpg' alt=''/>
                            </div>
                      
                    </div>
                    <div className='menu'>
                        <div className='menu-item'>plus size</div>
                        <div className='menu-body'>
                          <div className='pluz-size-masculino'>
                                <h5>masculino</h5>
                                <ul>
                                    <li id='calça' onClick={link_plusSize_masculino}>calças</li>
                                    <li id='bermudas' onClick={link_plusSize_masculino}>bermudas</li>
                                    <li id='camisas' onClick={link_plusSize_masculino}>camiseta</li>
                                </ul>
                          </div>
                          <div className='pluz-size-feminino '>
                                <h5>feminino</h5>
                                <ul>
                                    <li id='calça' onClick={link_plusSize_feminino}>calças</li>
                                    <li id='vestido' onClick={link_plusSize_feminino}>vestidos</li>
                                    <li id='blusa' onClick={link_plusSize_feminino}>blusas</li>
                                    <li id='cropped' onClick={link_plusSize_feminino}>cropped</li>
                                    
                                </ul>
                          </div>
                          <img src='http://www.eucapricho.com/imagens//2019/01/plus_size5.jpg' alt=''/>
                        </div>
                    </div>
                    <div className='menu'>
                        <div className='menu-item'>infantil</div>
                        <div className='menu-body'>
                          <ul>
                              <h5>menino</h5>
                                <li id='camisas' onClick={link_infantil_masculino}>camisas</li>
                                <li id='calça' onClick={link_infantil_masculino}>calças</li>
                                <li id='tênis' onClick={link_infantil_masculino}>tênis</li>
                                <li id='bermudas' onClick={link_infantil_masculino}>bermudas</li>
                            </ul>
                            <ul>
                                <h5>menina</h5>
                                <li id='blusa' onClick={link_infantil_feminino}>blusas</li>
                                <li id='vestido' onClick={link_infantil_feminino}>vestidos</li>
                                <li id='shorts' onClick={link_infantil_feminino}>shorts</li>
                                <li id='calça' onClick={link_infantil_feminino}>calças</li>
                                
                            </ul>
                            <img src='http://texbrasil.com.br/wp-content/uploads/2021/02/moda-infantil.png' alt=''/>
                        </div>
                    </div>
                    <img className='login' src='http://cdn.onlinewebfonts.com/svg/img_127104.png' alt=''/>
                    <img onClick={()=>h.push('/sacoladecompras')} className='carrinho' src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt=''/>
                    <span className='cont'>{parseInt(localStorage.getItem('cont'))}</span>
            </div>


         </header>
    </Component>  
  </>
}

export default Header;