import { useState, useEffect } from 'react'
export default function Produto(){

    const API = "https://6a86e20f70fbbd308f9870ac.mockapi.io/caixa-eletronico/Produtos"
    const [favorito, setFavorito] = useState("favoritar")
    const [produtos, setProdutos] = useState([])
    function favoritar(){
        setFavorito(favorito == "Favoritar" ? "Favoritado" : "Favoritar")
    }

    useEffect(()=> {
        fetch(API)
        .then((resposta) => resposta.json())
        .then((dados) => {setProdutos(dados)})
    },[])
   

    return(
        <>
            {produtos.map((produto) => (
                <div key= {produto.id}>
                    <h3> {produto.nome} </h3>
                    <img src={produto.img} width={150}/>

                    <div>
                        <button onClick={favoritar}>{favorito}</button> 
                    </div>
                    <p> preço antigo: {produto.precoAntigo}</p>
                    <p> preço novo: {produto.precoNovo} </p>
                </div>
            ))}
        </>
       
    )
}