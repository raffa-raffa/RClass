        import React from 'react'
    import { useSearchParams } from 'react-router-dom'
    import { useFetch } from '../hooks/useFetch'
    import {Link} from 'react-router-dom'

    const Search = () => {
        const [searchParams] = useSearchParams()

        const url = "http://localhost:3000/products?" + searchParams
        const {data: items, loading, error} = useFetch(url)
        
        return (
            <div><h1>Resultado disponíveis</h1>
            <ul className='products'>
        {items && items.map((item)=>(
        <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.id}</p>
            <p>R$: {item.price}</p>
            <Link to={`/Products/${item.id}`}>Detalhes</Link>
        </li>))}</ul>
        </div>
        )
        }

        export default Search