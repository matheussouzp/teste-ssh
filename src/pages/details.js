import React from 'react';
import Footer from './../components/Footer/index'
import { useParams } from 'react-router-dom'
const listNumbers = [0, 1, 2]
const filmes = [{
  "nome": "Vingadores",
  "duracao": "2H30",
  "foto": "vingadores.png",
  "ano": 2010,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Vingadores 2",
  "duracao": "1H30",
  "foto": "vingadores.png",
  "ano": 2014,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Vingadores 3",
  "duracao": "2H00",
  "foto": "vingadores.png",
  "ano": 2015,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
}
]

export default function Filme() {
    const {filme} = useParams();
  return (
    <div>   
        <p>Filme: {filme}</p>
        {(() => {
            if(filme == 'Vingadores'){
                return (
                    <div>
                        <p>{filmes[0].descricao}</p>
                        <p>{filmes[0].genero}</p>
                    </div>
                )
            }
        })()}

        <Footer />
    </div>
    
  )
}