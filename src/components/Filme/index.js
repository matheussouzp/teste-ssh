import "./Filme.css";


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
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Avatar",
  "duracao": "2H00",
  "foto": "avatar.png",
  "ano": 2015,
  "genero": "Desenho",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
}
]

export default function Filme() {
  
  return (
    
    <div className="container text-center">
      <div class="text-center">
                <h1 class="display-5 fw-bold">Lista de Filmes</h1>
      </div>
      <div class="row">
        {filmes.map((filme) => (
          
          <div className="col">
            <div className="card">
              <div class="card-movie">
              <img class="card-movie card-img-top" src={'/assets/images/' + filme.foto} alt="Card image cap" width= '400' height= '500px'/>
              </div>
                <div class="card-body">
                <h5 class="card-title">{filme.nome}</h5>
                <p>{filme.duracao}</p>
                <a href={`/details/${filme.nome}`}>
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}