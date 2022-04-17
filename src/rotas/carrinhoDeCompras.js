import React from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import api from "../api";
import Header from '../header';
function CarrinhoDeCompras(){

    const Container = styled.div`
      .voltar{
        cursor: pointer;
      }
      .voltar:hover{
        color: orange;
      }
      .bloco{
        margin-top:30px;
      }
      .img-carrinho{
        margin-top:10px;
        height:400px;
      }
      button{
        width:500px;
        height:50px;
        cursor:pointer;
        background-color:orange;
        color:white;
      }
      .btn_tamanhos{
        display:flex;
        margin:20px 0px;
      }
      .tamanhos{
        width:50px;
        height:50px;
        border-radius:25px;
        border:solid black 1px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
      }
      .tamanhos:hover{
        background-color:orange;
        color:white;
      }
      .ativo{
        background-color:orange;
        color:white;
      }
@media (max-width:400px) {
  button{
    width:100%;

  }

}
    `
    const h = useHistory()
    
    const adicionarCarrinho =async ()=>{
    //inserindo no carinho os campos colocados no local storage e o botao selecionado do tamanho
      var quant = 1;
      var id ='';
      const lista =await api.listarCarrinho();  
     const tem = lista.find((item)=>{
        if(item.nome === localStorage.getItem('nome') && item.tamanho ===  document.querySelector('.ativo').id){
          quant = parseInt(item.quantidade) + 1;
          id = item._id
          return true;
        }
        return ''
      })
      if(tem){
           
           api.atualizarCarrinho(id,quant)
           alert('item adicionado ao carrinho de compras')
           window.location.reload()
           h.push('/sacolaDeCompras')
      }else{
        try {
          api.inserirCarrinho( 
            localStorage.getItem('nome'),
            localStorage.getItem('imagem'),
            localStorage.getItem('valor'),
            document.querySelector('.ativo').id,
            quant
          );
          alert('item adicionado ao carrinho de compras')
          
        } catch (error) {
          alert('por favor insira o tamanho')
        }
      }

      window.location.reload()
      //h.push('/sacolaDeCompras')
    }
    const ativo = (e)=>{
       document.querySelectorAll('.tamanhos').forEach((item)=>{
          item.classList.remove('ativo')
       })
       document.getElementById(e.target.id).classList.add('ativo')
       
    }
    
    const parcelar = (valor)=>{
      var valortratado = valor.replace(',','.');
      return (parseFloat(valortratado)/6).toFixed(2)
  }
    return <>
       <Header/>
       <Container>
            <div className='container bloco'>
                <span className='voltar' onClick={()=>h.push('/')}>inicio {"  >"}</span>
                <span className='voltar'>{localStorage.getItem('sexo') +" "+ localStorage.getItem("idade")+ " - " } </span>
                <span>{localStorage.getItem("nome")}</span>
            </div>
            <div className='container'>
                <section>
                    <img className='img-carrinho' src={localStorage.getItem('imagem')} alt=''/>  
                    <aside>
                        <h1 className='nome_carrinho'>{localStorage.getItem("nome")}</h1>
                        <h1 className='valor'>R$ {localStorage.getItem("valor")}</h1>
                        <div className='parcela'>ou 6x de R$ {parcelar(localStorage.getItem("valor"))} sem juros</div>
                        <div className='btn_tamanhos'>
                           <div id='36' onClick={ativo} className='tamanhos'>36</div>
                           <div id='38' onClick={ativo} className='tamanhos'>38</div>
                           <div id='40' onClick={ativo} className='tamanhos'>40</div>
                           <div id='42' onClick={ativo} className='tamanhos'>42</div>
                           <div id='44' onClick={ativo} className='tamanhos'>44</div>
                        </div>
                        <button className='btn_comprar' onClick={adicionarCarrinho}>comprar</button>

                    </aside>
                </section>
                </div>
       </Container>
    </>
}
export default CarrinhoDeCompras;