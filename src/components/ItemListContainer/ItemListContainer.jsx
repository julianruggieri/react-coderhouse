import { getProducts } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ( {text} )=>{

  const [products, setProducts] = useState([])

      useEffect(() => {
        getProducts()
        .then(result => {
          setProducts(result)


        }
        )
      },[])

    return(
      



        <>
        <div className="card text-bg-info mb-3">
        <div className="card-header">
    <h1>{text}</h1>
     
    <h2><ItemList products={products}></ItemList></h2>
        </div>
        <div className="card-body">
        <blockquote className="blockquote mb-0">
      <p>Daikiri es pasión...</p>
      <footer className="blockquote-footer"> <cite title="Source Title">Diego Maradona</cite></footer>
    </blockquote>
      </div>
     </div>
        

        </>
    )
}


export default ItemListContainer