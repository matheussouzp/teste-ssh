import React from 'react';
import Footer from './../components/Footer/index'
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

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
  "nome": "Sonic",
  "duracao": "1H30",
  "foto": "sonic.jpg",
  "ano": 2014,
  "genero": "Ação/Nerd",
  "descricao": "Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman.",
  "nota": 5
},
{
  "nome": "Avatar",
  "duracao": "2H00",
  "foto": "avatar.png",
  "ano": 2015,
  "genero": "Desenho",
  "descricao": "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos",
  "nota": 5
}

]

function Details() {
  const { filme } = useParams();

  return (
        <div className="container text-center">
            <div class="text-center">
                    <h1 class="display-5 fw-bold">Lista de Planos</h1>
            </div>
        <div>
          <Title
              title={"Details"}
              text="" />               
          {(() => {
              if (filme == 'Vingadores') {
                  return (
                    <div class="container text-center"> 
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div class="col p-4 d-flex flex-column position-static">
                        <h3 class="mb-0"> Informações do filme clicado: </h3>
                        <h3 class="mb-0"> {filmes[0].nome} </h3>
                        <h3 class="mb-0"> {filmes[0].duracao} </h3>
                        <h3 class="mb-0"> {filmes[0].genero} </h3>
                        <h3 class="mb-0"> {filmes[0].descricao} </h3>
                        <h3 class="mb-0"> {filmes[0].nota} </h3>
                      </div>
                      <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" src={'/assets/images/' + filmes[0].foto} width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                      </div>
                  </div>
                  </div>
                  )
              } else if (filme == 'Sonic') {
                  return (
                    <div class="container text-center"> 
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div class="col p-4 d-flex flex-column position-static">
                        <h3 class="mb-0"> Informações do filme clicado: </h3>
                        <h3 class="mb-0"> {filmes[1].nome} </h3>
                        <h3 class="mb-0"> {filmes[1].duracao} </h3>
                        <h3 class="mb-0"> {filmes[1].genero} </h3>
                        <h3 class="mb-0"> {filmes[1].descricao} </h3>
                        <h3 class="mb-0"> {filmes[1].nota} </h3>
                      </div>
                      <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" src={'/assets/images/' + filmes[1].foto} width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                      </div>
                  </div>
                  </div>
                  )
              } else {
                  return (
                    <div class="container text-center"> 
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div class="col p-4 d-flex flex-column position-static">
                        <h3 class="mb-0"> Informações do filme clicado: </h3>
                        <h3 class="mb-0"> {filmes[2].nome} </h3>
                        <h3 class="mb-0"> {filmes[2].duracao} </h3>
                        <h3 class="mb-0"> {filmes[2].genero} </h3>
                        <h3 class="mb-0"> {filmes[2].descricao} </h3>
                        <h3 class="mb-0"> {filmes[2].nota} </h3>
                      </div>
                      <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" src={'/assets/images/' + filmes[2].foto} width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                      </div>
                  </div>
                  </div>
                  )
              }
          })()}
      </div>
      </div>
  )
}

export default Details;