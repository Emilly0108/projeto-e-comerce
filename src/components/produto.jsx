import { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
export default function Produto({nome, img, precoAntigo, precoNovo}){

    
    const [favorito, setFavorito] = useState(false)
    function favoritar(){
        setFavorito(!favorito)
    }

    
   

    return(
        <>
            
                <div>
                    <div>
                       {favorito?<FaHeart style={{cursor:"pointer", color: "red"}} onClick={favoritar}/>:<FaRegHeart style={{cursor:"pointer", color: "red"}} onClick={favoritar}/>}
                    </div>
                    <h3> {nome} </h3>
                    <img src={img} width={150}/>

                    
                    <p> preço antigo: {precoAntigo}</p>
                    <p> preço novo: {precoNovo} </p>
                </div>
            
        </>
       
    )
}