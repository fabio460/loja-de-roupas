const api = {
    listar: async()=>{
        try {
          const f =await fetch('https://api-e-commerce.vercel.app/listar');
          if(!f){
                window.location.reload();
          }
          const j = await f.json();
          return j;
        } catch (error) {
           //document.querySelector('.produtos_container').innerHTML="carregando ..."
           window.location.reload();
        }
    },
    listarPorNome: async(nome)=>{
       
       const f =await fetch(`https://api-e-commerce.vercel.app/listarPorNome/${nome}`);
       const j = await f.json();
       return j;
    },
    listarCarrinho: async ()=>{
       const f = await fetch('https://api-e-commerce.vercel.app/listarCarrinho');
       const j = f.json();
       return j;
    },
    deletarCarrinho: (id)=>{
       fetch(`https://api-e-commerce.vercel.app/deletarCarrinho/${id}`,{
          method:'DELETE'
       });
    },
    inserirCarrinho: (nome,imagem1,valor,tamanho,quantidade)=>{
       const formdata = new FormData();
       formdata.append('nome',nome)
       formdata.append('imagem1',imagem1)
       formdata.append('valor',valor)
       formdata.append('tamanho',tamanho)
       formdata.append('quantidade',quantidade)
       fetch(`https://api-e-commerce.vercel.app/postarCarrinho`,{
          method:'POST',
          body:formdata
       })
    },
    atualizarCarrinho: (id,quantidade)=>{
      const formdata = new FormData();
      formdata.append('quantidade',quantidade)
      fetch(`https://api-e-commerce.vercel.app/atualisacarrinho/${id}`,{
         method:'PUT',
         body:formdata
      })
    }
 }
 export default api;