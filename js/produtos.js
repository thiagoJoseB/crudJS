'use strict';

const url = 'http://10.107.142.2:8080/produtos';

const getProdutos= async ()=>{

  /// resposta da requisicao  
const response = await fetch(url);
//// retorna os dados
return response.json();


};


const postProduto = (produto) => {
    console.log(produto);
  const options = {
      method: 'POST',
      body: JSON.stringify(produto),
      headers:{
          'content-type': 'application'
      }
  };

fetch(url,options);

};

const deletarProduto = (id) =>{
    const options = {
        method: 'DELETE',
        
        headers:{
            'content-type': 'application'
        },
    };
    fetch(`${url}/${id}`,options)
};


export{getProdutos , postProduto, deletarProduto};