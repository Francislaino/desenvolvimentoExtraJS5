let titulo = document.createElement("h1");
titulo.innerText = " Produto à venda";
titulo.id = "Título";

let tituloDoSite = document.querySelector("body");

tituloDoSite.appendChild(titulo);



const produto = document.createElement("div");

produto.innerHTML = 
`<h2 class="titulo-produto">Bateria</h2>;
<img src="./img/bateria.jpg" alt="foto de uma bateria">
<p class="texto-produto">Vendo bateria em otimo estado</p>
<h2 class="preco-produto">R$2000</h2>;`

const vendaProduto = document.querySelector("body")

vendaProduto.appendChild(produto)