const planos = [{
    "nome": "Prata",
    "preco": "$10/month",
    "foto": "prata.png",
    "descricao": "Acesso a 5 filmes por mês"
  },
  {
    "nome": "Ouro",
    "preco": "$20/month",
    "foto": "ouro.jpg",
    "descricao": "Acesso a 15 filmes por mês"
  },
  {
    "nome": "Diamante",
    "preco": "$40/month",
    "foto": "diamante.png",
    "descricao": "Acesso ilimitado aos filmes"
  }
  ]

export default function Plans() {
    return (
        <div className="container text-center">
        <div class="text-center">
                  <h1 class="display-5 fw-bold">Lista de Planos</h1>
        </div>
        <div class="row">
          {planos.map((plano) => (
            
            <div className="col">
              <div className="card">
              <div class="card-movie">
              <img class="bd-placeholder-img rounded-circle" src={'/assets/images/' + plano.foto} width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
              </div>
                  <div class="card-body">
                  <h5 class="card-title">{plano.nome}</h5>
                  <p>{plano.preco}</p>
                  <p>{plano.descricao}</p>
                  <a href={`/detalhes/${plano.nome}`}>
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

