import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './../components/Footer/index'

export default function About() {
    const {name} = useParams()
    return (
        <div class="container text-center">
        
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">CineMatheus</strong>
            <h3 class="mb-0">Cinema Matheus fundado em 2023 com as melhores atrações da atualidade, contamos com alguns planos para você que é apaixonado em filmes! </h3>
            
          </div>
          <div class="col-auto d-none d-lg-block">
            <img class="bd-placeholder-img rounded-circle" src={'/assets/images/cinema.jpg' } width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
          </div>
       
      </div>
      </div>
    )
}
