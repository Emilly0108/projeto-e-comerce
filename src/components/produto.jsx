import { useState } from 'react'
export default function Produto(){

    const [favorito, setFavorito] = useState(null)
    const produtos = [
        {
            id: 1,
            nome: "meia",
            img: "https://www.pexels.com/photo/pair-of-socks-with-long-upper-part-5746026/",
            preçoAntigo: 20,
            preçoNovo: 15
        },
        {
            id: 2,
            nome: "camisa",
            img: "https://i5.walmartimages.com/asr/6e100e7f-4bf1-449d-8fe8-b8f406ec319a.8893f03a6001286748a669b34d6d79d3.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768",
            preçoAntigo: 40,
            preçoNovo: 38
        },
        {
            id: 3,
            nome: "base rubyrose",
            img:  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
            preçoAntigo: 35,
            preçoNovo: 30
        },
        {
            id: 4,
            nome: "gloss sheglam",
            img:  "https://www.slikk.club/makeup/lips/Maybelline/Smooth-And-Non-sticky-Lifter-Gloss-Moon/41554583878",
            preçoAntigo: 40,
            preçoNovo: 35
        },
        {
            id: 5,
            nome: "mouse",
            img:  "https://i5.walmartimages.com/asr/6e100e7f-4bf1-449d-8fe8-b8f406ec319a.8893f03a6001286748a669b34d6d79d3.jpeg",
            preçoAntigo: 40,
            preçoNovo: 30
        }
    ];

    return(
        <>
            {produtos.map((produto) => (
                <div key= {produto.id}>
                    <h3> {produto.nome} </h3>
                    <img src={produto.img} width={150}/>
                    <button onClick={() => setFavorito(produto.id)}> Favoritar </button>
                    <p> preço antigo: {produto.preçoAntigo}</p>
                    <p> preço novo: {produto.preçoNovo} </p>
                </div>
            ))}
        </>
       
    )
}