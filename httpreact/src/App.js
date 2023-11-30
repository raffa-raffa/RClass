  import React, { useState } from 'react';
  import './App.css';
  import { useFetch } from './hooks/useFetch';

  const url = "http://localhost:3000/products";

  function App() {
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");

    const { data: items , httpConfig, loading, error} = useFetch(url);
  console.log(product, setProduct)
    console.log(items);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const product = {
        name,
        price
      };

      // const res = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(product)
      // });

      // console.log(res);

      // const addedProduct = await res.json();
      // setProducts((prevProducts) => [...prevProducts, addedProduct]);


      httpConfig(product, "POST")
      setName("");
      setPrice("");
    };


    const deleteItem = (id) =>{
      console.log('item deletado', id)
      httpConfig(id, "DELETE")
    }
    console.log(product)

    return (
      <div className="App">
        <h1>Lista de Produtos</h1>
        {/*6- loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>Ops, Aconteceu algum erro ao carregar dados!</p>}
        {!error && (<ul>
          {items && items.map((product) => (
            <div className='list-item'><li key={product.id}>{product.name} - R$: {product.price}</li>
            <button onClick={()=>deleteItem(product.id)}>X</button></div>
          ))}
        </ul>)}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Preço:
              <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
            </label>
            {!loading && (<input type="submit" disabled value="Criar" />)}
            {!loading && (<input type="submit" value="Criar" />)}
          </form>
        </div>
      </div>
    );
  }

  export default App;
