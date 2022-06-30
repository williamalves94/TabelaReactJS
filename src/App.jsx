import React, {useState} from 'react';

const carros=[
    {categoria:"Esporte",preco:"120000",modelo:"Golf GTI",ano:"2015"},
    {categoria:"Esporte",preco:"230000",modelo:"BMW M3",ano:"2022"},
    {categoria:"SUV",preco:"210000",modelo:"Tiguan",ano:"2018"},
    {categoria:"SUV",preco:"120000",modelo:"Nivus",ano:"2022"},
    {categoria:"Passeio",preco:"85000",modelo:"Passat",ano:"2017"},
    {categoria:"Passeio",preco:"75000",modelo:"Civic",ano:"2019"},
    {categoria:"Passeio",preco:"70000",modelo:"Veloster",ano:"2018"},
    {categoria:"Passeio",preco:"800000",modelo:"Panamera",ano:"2020"}
]

const linhas=(cat)=>{
    const li=[]
    carros.forEach(
        (carro)=>{
            if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.toUpperCase() ==''){
                li.push(
                    <tr>
                        <td>{carro.categoria}</td>
                        <td>{carro.preco}</td>
                        <td>{carro.modelo}</td>
                    </tr>
                )
            }
        }
    )
    return li
}

//TABELA
const TabelaCarros=(cat)=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Categoria</th><th>Preço</th><th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {linhas(cat)}
            </tbody>
        </table>
    )
}

const pesquisaCategoria=(cat, scat)=>{
    return(
        <div>
            <label>Digite uma categoria: </label>
            <input type="text" value={cat} onChange={(e)=>scat(e.target.value)}/>
        </div>
    )
}


export default function App() {
    const [categoria, setCategoria]=useState('')
    return(
        <>
        {pesquisaCategoria(categoria, setCategoria)}
        <br/>
        {TabelaCarros(categoria)}
        </>
    );
}
