'use strict';


///// importe do arquivo de moldal 
import {openModal , closeModal} from './moldal.js';
import{getProdutos , postProduto , deletarProduto} from './produtos.js';
import{preview} from './preview.js'


const carregarProdutos = async ()=>{
  const container = document.querySelector('.records tbody');
  const produtos = await getProdutos();
  const linhas = produtos.map(criarLinhas);
  
//   console.log(linhas);
  
  container.replaceChildren(...linhas);



};

                //    <tr>                 
                //      
                //     </tr>


const criarLinhas = ({foto,nome,preco,categoria,id}) => {
  const linha = document.createElement('tr');
  linha.innerHTML = ` 
                 <td>
              <img src="${foto}" class="produto-image" />
           </td>
           <td>${nome}</td>
           <td>${preco}</td>
           <td>${categoria}</td>
           <td>
               <button type="button" class="button green" data-idproduto=${id}>
                   editar
               </button>
               <button type="button" class="button red" data-idproduto=${id}>
                   excluir
               </button>
           </td> `;

        return linha;



};



// const carrregarProdutos = async ()=>{
//  const container = document.querySelector('.records tbody');
// const produtos = await getProdutos();
// const linhas = await produtos.map(criarLinhas);
// container.replaceChildren(...linhas);
               
// };
               






const imagemPreview = () => preview ('inputFile', 'imagePreview');


const salvarProduto = () =>{

    const produto = {
        nome:document.getElementById('product').value,
        preco:document.getElementById('price').value,
        categoria:document.getElementById('category').value,
        foto:document.getElementById('imagePreview').src,

    };


    postProduto(produto);

    closeModal();
    carregarProdutos();


}

const handleClickTbody = ({target}) =>{
    if(target.type === 'button'){
        const acaoBotao = target.textContent.trim();
        if(acaoBotao === 'excluir' ){
        deletarProduto(target.dataset.idProduto);
        carregarProdutos();

        }
    }
   


}

carregarProdutos();








document
    .getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('cancel').addEventListener('click', closeModal);

document.getElementById('inputFile'),addEventListener('change' ,imagemPreview);


document.getElementById('save').addEventListener('click' , salvarProduto);


document.querySelector('.records tbody').addEventListener('click', handleClickTbody);

