import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './../components/Footer/index'

export default function About() {
    const {name} = useParams()
    return (
        <div>
            <p>Ola mundo {name}!</p>
            
        </div>  
    )
}
