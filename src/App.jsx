import Meucomponente from "./components/MeuComponente.jsx"
import Navbar from "./components/navbar.jsx"
import Produto from "./components/produto.jsx"
import { useState, useEffect } from 'react'

function App() {
  const API = "https://6a86e20f70fbbd308f9870ac.mockapi.io/caixa-eletronico/Produtos"
  const [produtos, setProdutos] = useState([])
  useEffect(()=> {
        fetch(API)
        .then((resposta) => resposta.json())
        .then((dados) => {setProdutos(dados)})
    },[])
  return (
    <div>
      {produtos.map((produto) => 
       <Produto key={produto.id} nome={produto.nome} img={produto.img} precoAntigo={produto.precoAntigo} precoNovo={produto.precoNovo}></Produto>
      )}
    </div>
  )
}

export default App
